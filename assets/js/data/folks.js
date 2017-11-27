import * as firebase from "firebase"

var config = {
    apiKey: "AIzaSyBFsU5c0JjFGPv3WRRIsZNx2RpduQkzIRc",
    authDomain: "zh-eu-folks.firebaseapp.com",
    databaseURL: "https://zh-eu-folks.firebaseio.com",
    projectId: "zh-eu-folks",
    storageBucket: "zh-eu-folks.appspot.com",
    messagingSenderId: "217229419858"
  };
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
