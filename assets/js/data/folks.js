import * as firebase from "firebase"

var config = {
    apiKey: "AIzaSyAcj8JDU8JIdbfRJi8xjRl3XjsTDtmfZ-Y",
    authDomain: "zh-eu-jetlagfolk.firebaseapp.com",
    databaseURL: "https://zh-eu-jetlagfolk.firebaseio.com",
    projectId: "zh-eu-jetlagfolk",
    storageBucket: "zh-eu-jetlagfolk.appspot.com",
    messagingSenderId: "1057126373949"
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code
    var errorMessage = error.message
    console.log(errorCode)
    console.log(errorMessage)
})
var database = firebase.database()
var usersRef = database.ref('users')

export default usersRef
