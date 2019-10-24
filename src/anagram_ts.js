"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var AnagramChecker = /** @class */ (function () {
    function AnagramChecker(wordOne, wordTwo) {
        if (wordOne === void 0) { wordOne = ''; }
        if (wordTwo === void 0) { wordTwo = ''; }
        this.wordOne = wordOne;
        this.wordTwo = wordTwo;
        this.isAnagram();
    }
    AnagramChecker.prototype.checkAnagram = function () {
        //Lowercase Words
        var lowerCasedWordOne = this.setWordToLowercase(this.wordOne); /*?+*/
        var lowerCasedWordTwo = this.setWordToLowercase(this.wordTwo); /*?+*/
        //Split words into array
        var splittedWordOne = this.splitWordIntoArray(lowerCasedWordOne);
        var splittedWordTwo = this.splitWordIntoArray(lowerCasedWordTwo);
        // Sort items in array alphabetically and desc. 
        var sortedWordOne = this.sortWordArray(splittedWordOne); /*?+*/
        var sortedWordTwo = this.sortWordArray(splittedWordTwo); /*?+*/
        //Create string from array items
        var sortedWordOneString = this.arrayToString(sortedWordOne); /*?+*/
        var sortedWordTwoString = this.arrayToString(sortedWordTwo); /*?+*/
        //Validate that the words are the same
        var isWordsSame = this.compareWords(sortedWordOneString, sortedWordTwoString); /*?+*/
        return isWordsSame;
    };
    AnagramChecker.prototype.isAnagram = function () {
        //Check om ord har samme længde
        var sameLength = this.isWordsSameLength(this.wordOne, this.wordTwo); /*?+*/
        var notSameLength = sameLength === false;
        return notSameLength ? false : this.checkAnagram();
    };
    AnagramChecker.prototype.compareWords = function (wordOne, wordTwo) {
        return wordOne === wordTwo;
    };
    AnagramChecker.prototype.isWordsSameLength = function (wordOne, wordTwo) {
        var wordOneLength = wordOne.length;
        var wordTwoLength = wordTwo.length;
        return wordOneLength === wordTwoLength;
    };
    AnagramChecker.prototype.splitWordIntoArray = function (word) {
        return Array.from(word);
    };
    AnagramChecker.prototype.arrayToString = function (wordArray) {
        return wordArray.join('');
    };
    AnagramChecker.prototype.setWordToLowercase = function (word) {
        var lowerCasedWord = word.toLowerCase();
        return lowerCasedWord;
    };
    AnagramChecker.prototype.sortWordArray = function (wordArray) {
        var sortArray = __spreadArrays(wordArray);
        return sortArray.sort();
    };
    return AnagramChecker;
}());
exports["default"] = AnagramChecker;
