(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["number-notations"] = factory();
	else
		root["number-notations"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';

	var getScientificNotation = function getScientificNotation(exp) {
	  if (exp < 1) {
	    return '';
	  }
	  return 'e' + exp;
	};

	var americanSimplifiedDictionary = [['abcdefghijklmnopqrstuvwxyz', 26], ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 52]];

	var getAmericanSimplifiedNotation = function getAmericanSimplifiedNotation(exp) {
	  var capitals = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	  var exp3 = Math.floor(Math.abs(exp) / 3);
	  if (exp > 14) {
	    return Array(2 + Math.ceil((exp3 - 4) / americanSimplifiedDictionary[capitals][1])).join(americanSimplifiedDictionary[capitals][0][(exp3 - 5) % americanSimplifiedDictionary[capitals][1]]);
	  } else if (exp > 0) {
	    return getAbbreviatedNumberNotation(exp);
	  } else {
	    return getScientificNotation(exp);
	  }
	};

	var abbreviatedNumberDictionary = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'Vg', 'Uvg', 'Dvg', 'Tvg', 'Qavg', 'Qivg', 'Sxvg', 'Spvg', 'Ocvg', 'Novg', 'Tg', 'Utg', 'Dtg', 'Ttg', 'Qatg', 'Qitg', 'Sxtg', 'Sptg', 'Octg', 'Notg', 'Qag', 'Uqag', 'Dqag', 'Tqag', 'Qaqag', 'Qiqag', 'Sxqag', 'Spqag', 'Ocqag', 'Noqag', 'Qig', 'Uqig', 'Dqig', 'Tqig', 'Qaqig', 'Qiqig', 'Sxqig', 'Spqig', 'Ocqig', 'Noqig', 'Sxg', 'Usxg', 'Dsxg', 'Tsxg', 'Qasxg', 'Qisxg', 'Sxsxg', 'Spsxg', 'Ocsxg', 'Nosxg', 'Spg', 'Uspg', 'Dspg', 'Tspg', 'Qaspg', 'Qispg', 'Sxspg', 'Spspg', 'Ocspg', 'Nospg', 'Ocg', 'Uocg', 'Docg', 'Tocg', 'Qaocg', 'Qiocg', 'Sxocg', 'Spocg', 'Ococg', 'Noocg', 'Nog', 'Unog', 'Dnog', 'Tnog', 'Qanog', 'Qinog', 'Sxnog', 'Spnog', 'Ocnog', 'Nonog', 'C', 'Uc', 'Dc', 'Tc', 'Qac', 'Qic', 'Sxc', 'Spc', 'Occ', 'Noc'];
	var abbreviatedNumberDictionaryCount = abbreviatedNumberDictionary.length;

	var getAbbreviatedNumberNotation = function getAbbreviatedNumberNotation(exp) {
	  var exp3 = Math.floor(Math.abs(exp) / 3);
	  if (exp > 0 && exp3 < abbreviatedNumberDictionaryCount) {
	    return abbreviatedNumberDictionary[exp3];
	  } else {
	    return getScientificNotation(exp);
	  }
	};

	var normalNmberDictionary = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintillion', 'trevigintillion', 'quattuorvigintillion', 'quinvigintillion', 'sexvigintillion', 'septenvigintillion', 'octovigintillion', 'novemvigintillion', 'trigintillion', 'untrigintillion', 'duotrigintillion', 'trestrigintillion', 'quattuortrigintillion', 'quinquatrigintillion', 'sextrigintillion', 'septentrigintillion', 'octotrigintillion', 'noventrigintillion', 'quadragintillion', 'unquadragintillion', 'duoquadragintillion', 'tresquadragintillion', 'quattuorquadragintillion', 'quinquaquadragintillion', 'sexquadragintillion', 'septenquadragintillion', 'octoquadragintillion', 'novemquadragintillion', 'quinquagintillion', 'unquinquagintillion', 'duoquinquagintillion', 'trequinquagintillion', 'quattuorquinquagintillion', 'quinquinquagintillion', 'sexquinquagintillion', 'septenquinquagintillion', 'octoquinquagintillion', 'novemquinquagintillion', 'sexagintillion', 'unsexagintillion', 'duosexagintillion', 'tresexagintillion', 'quattuorsexagintillion', 'quinsexagintillion', 'sexsexagintillion', 'septensexagintillion', 'octosexagintillion', 'novemsexagintillion', 'septuagintillion', 'unseptuagintillion', 'duoseptuagintillion', 'treseptuagintillion', 'quattuorseptuagintillion', 'quinseptuagintillion', 'sexseptuagintillion', 'septenseptuagintillion', 'octoseptuagintillion', 'novemseptuagintillion', 'octogintillion', 'unoctogintillion', 'duooctogintillion', 'treoctogintillion', 'quattuoroctogintillion', 'quinoctogintillion', 'sexoctogintillion', 'septenoctogintillion', 'octooctogintillion', 'novemoctogintillion', 'nonagintillion', 'unnonagintillion', 'duononagintillion', 'trenonagintillion', 'quattuornonagintillion', 'quinnonagintillion', 'sexnonagintillion', 'septennonagintillion', 'octononagintillion', 'novemnonagintillion', 'centillion', 'uncentillion', 'duocentillion', 'trecentillion', 'quattuorcentillion', 'quincentillion', 'sexcentillion', 'septencentillion', 'octocentillion', 'novemcentillion'];
	var normalNmberDictionaryCount = normalNmberDictionary.length;

	var getNormalNumberNotation = function getNormalNumberNotation(exp) {
	  var exp3 = Math.floor(Math.abs(exp) / 3);
	  if (exp > 0 && exp3 < normalNmberDictionaryCount) {
	    return normalNmberDictionary[exp3];
	  } else {
	    return getScientificNotation(exp);
	  }
	};

	var getAmericanSimplifiedNotationNoCaps = function getAmericanSimplifiedNotationNoCaps() {
	  return getAmericanSimplifiedNotation(exp, 0);
	};

	var getAmericanSimplifiedNotationCaps = function getAmericanSimplifiedNotationCaps() {
	  return getAmericanSimplifiedNotation(exp, 1);
	};

	var getNumberNotation = function getNumberNotation(exp) {
	  var notation = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	  switch (notation) {
	    case 0:
	      return getScientificNotation(exp);
	    case 1:
	      return getAmericanSimplifiedNotation(exp, 0);
	    case 2:
	      return getAmericanSimplifiedNotation(exp, 1);
	    case 3:
	      return getAbbreviatedNumberNotation(exp);
	    case 4:
	      return getNormalNumberNotation(exp);
	  }
	};

	module.exports = {
	  getNumberNotation: getNumberNotation,
	  getScientific: getScientificNotation,
	  getAmericanSimplified: getAmericanSimplifiedNotationNoCaps,
	  getAmericanSimplifiedWithCaps: getAmericanSimplifiedNotationCaps,
	  getAbbreviated: getAbbreviatedNumberNotation,
	  getNormal: getNormalNumberNotation
	};

/***/ }
/******/ ])
});
;