/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Utils from "../src/utils";
import AnagramChecker from "../src/anagram_ts";


describe('Utiliy checker for AnagramChecker', () => {

    var utils = new Utils();


    describe('Should check the Anagram Class', () => {

        let anagramChecker = new AnagramChecker();

        it('should check the if words are anagrams and return true ', () => {
            const wordOne = 'ole';
            const wordtwo = 'leo';

            const result = anagramChecker.checkWordsForAnagram(wordOne, wordtwo) /*?+*/
            expect(result).toBe(true);

        });


        it('should check if words not are anagrams and return false ', () => {
            const wordOne = 'sielent';
            const wordtwo = 'listen';

            const result = anagramChecker.checkWordsForAnagram(wordOne, wordtwo) /*?+*/
            expect(result).toBe(false);

        });


        it('should check if words are same length and return true', () => {
            const wordOne = 'sielent';
            const wordtwo = 'listen';

            const result = anagramChecker.isAnagram(wordOne, wordtwo) /*?+*/
            expect(result).toBe(false);
        });

    });


    describe('should check method words for same length', () => {

        it('should check if two words of same length return true', () => {

            const wordOne = 'ole';
            const wordtwo = 'ole';

            const result = utils.isWordsSameLength(wordOne, wordtwo); /*?+*/
            expect(result).toBe(true);
        });


        it('should check if two words of different length return false', () => {
            const wordOne = 'ole';
            const wordtwo = 'oleole';

            const result = utils.isWordsSameLength(wordOne, wordtwo); /*?+*/
            expect(result).toBe(false);
        });
    });


    it('should check if two strings are identical', () => {

        const wordOne = 'ole';
        const wordtwo = 'ole';

        const result = utils.compareWords(wordOne, wordtwo); /*?+*/
        expect(result).toBe(true);

    });


    it('should split words into array', () => {

        const stringWord = 'ole';
        const arrayWord = ['o', 'l', 'e'];

        const result = utils.splitWordIntoArray(stringWord); /*?+*/

        expect(result).toEqual(arrayWord);
        expect(result.length).toBe(3);

    });


    it('should make an string out of array items', () => {

        const arrayWord = ['o', 'l', 'e'];
        const stringWord = 'ole';
        const result = utils.arrayToString(arrayWord); /*?+*/

        expect(result).toEqual(stringWord);
    });


    it('should convert word string to lowerCase', () => {

        const word = 'Ole';
        const lowerCasedWord = "ole";
        const result = utils.setWordToLowercase(word);

        expect(result).toEqual(lowerCasedWord);
    });


    it('should sort a array of chars in asc order', () => {

        const unsortedArray = ['c', 'a', 'b'];
        const sortedArray = ['a', 'b', 'c']
        const result = utils.sortWordArray(unsortedArray) /*?+*/

        expect(result).toEqual(sortedArray);

    });


});