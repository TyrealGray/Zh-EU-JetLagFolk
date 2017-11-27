/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _searchInput = __webpack_require__(1);

	(0, _searchInput.initSearchInput)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.initSearchInput = initSearchInput;

	var _resultTable = __webpack_require__(2);

	function onInput(event) {
	    var keyword = event.target.value;
	    if ('' == keyword) {
	        document.getElementById('result').innerHTML = '';
	        return;
	    }
	    (0, _resultTable.showResult)(event.target.value);
	}

	function initSearchInput() {
	    var searchInput = document.getElementById('searchInput');

	    searchInput.addEventListener("input", function (event) {
	        return onInput(event);
	    }, false);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.showResult = showResult;
	function showResult(value) {
	    var resultDiv = document.getElementById('result'),
	        tableBodys = [];

	    var database = firebase.database();
	    var usersRef = database.ref('users');

	    usersRef.on('value', function (snapshot) {
	        snapshot.forEach(function (childSnapshot) {
	            value = value.toLowerCase();
	            var folk = childSnapshot.val();
	            if (~folk.platform.toLowerCase().indexOf(value) || ~folk.wanted.toLowerCase().indexOf(value) || ~folk.qq.indexOf(value) || ~folk.name.toLowerCase().indexOf(value)) {
	                var addSteam = '' == folk.steam ? '' : '加为好友';
	                tableBodys.push('<tr>\n                    <td title="some text for tooltip">' + folk.name + '(' + folk.qq + ')</td>\n                    <td>' + folk.platform + '</td>\n                    <td>' + folk.wanted + '</td>\n                    <td disable="true" ><a target="blank" href="' + folk.steam + '">' + addSteam + '</a></td>\n                </tr>');
	            }
	        });
	    });

	    if (0 === tableBodys.length) {
	        resultDiv.innerHTML = '';
	        return;
	    }

	    var result = '<table class="table table-hover table-mc-light-blue">\n                                <tr>\n                                    <th>\u7FA4\u53CB</th>\n                                    <th>\u5E73\u53F0</th>\n                                    <th>\u6700\u8FD1\u60F3\u73A9</th>\n                                    <th>Steam</th>\n                                </tr>\n                                ' + tableBodys.join('') + '\n                            </table>';

	    resultDiv.innerHTML = result;
	}

/***/ }
/******/ ]);