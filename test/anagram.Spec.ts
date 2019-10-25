/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Utils from "../src/utils";
import AnagramChecker from "../src/anagram_ts";


describe('AnagramChecker', () => {


    describe('Util class methods for anagram checking', () => {
        const utils = new Utils();

        it('should check if two strings are identical', () => {

            const wordOne = 'ole';
            const wordTwo = 'ole';

            const result = utils.compareWords(wordOne, wordTwo);
            expect(result).toBe(true);

        });


        it('should split words into array', () => {

            const stringWord = 'ole';
            const arrayWord = ['o', 'l', 'e'];

            const result = utils.splitWordIntoArray(stringWord);

            expect(result).toEqual(arrayWord);
            expect(result.length).toBe(3);

        });


        it('should make an string out of array items', () => {

            const arrayWord = ['o', 'l', 'e'];
            const stringWord = 'ole';
            const result = utils.arrayToString(arrayWord);

            expect(result).toEqual(stringWord);
        });


        it('should convert a string to lowerCase', () => {

            const word = 'Ole';
            const lowerCasedWord = "ole";
            const result = utils.lowercaseWord(word);

            expect(result).toEqual(lowerCasedWord);
        });


        it('should sort a array of chars in asc order', () => {

            const unsortedArray = ['c', 'a', 'b'];
            const sortedArray = ['a', 'b', 'c']
            const result = utils.sortWordArray(unsortedArray);

            expect(result).toEqual(sortedArray);
        });

        describe('should check words for same length', () => {

            it('should check if two words of same length return true', () => {

                const wordOne = 'ole';
                const wordTwo = 'ole';

                const result = utils.isWordsSameLength(wordOne, wordTwo);
                expect(result).toBe(true);
            });


            it('should check if two words of different length return false', () => {
                const wordOne = 'ole';
                const wordTwo = 'oleole';

                const result = utils.isWordsSameLength(wordOne, wordTwo);
                expect(result).toBe(false);
            });
        });

    });


    describe('Should check Words for anagram', () => {

        let anagramChecker = new AnagramChecker();

        it('should check if words are anagrams', () => {
            const wordOne = 'ole';
            const wordTwo = 'leo';

            const result = anagramChecker.checkWordsForAnagram(wordOne, wordTwo);
            expect(result).toBe(true);

        });


        it('should check if words not are anagrams and return false ', () => {
            const wordOne = 'sielent';
            const wordTwo = 'listen';

            const result = anagramChecker.checkWordsForAnagram(wordOne, wordTwo)
            expect(result).toBe(false);

        });


        it('should check if words are same length and return true', () => {
            const wordOne = 'silent';
            const wordTwo = 'listen';

            const result = anagramChecker.isAnagram(wordOne, wordTwo)
            expect(result).toBe(true);
        });

        it('should check if words are not same length and return false', () => {
            const wordOne = 'silent';
            const wordTwo = 'listenn';

            const result = anagramChecker.isAnagram(wordOne, wordTwo)
            expect(result).toBe(false);
        });


        it('should check that the metod checkWordsForAnagram is called if the two words are of same length', () => {

            const wordOne = 'ole';
            const wordTwo = 'leo';

            spyOn(anagramChecker, 'checkWordsForAnagram');
            anagramChecker.isAnagram(wordOne, wordTwo)

            expect(anagramChecker.checkWordsForAnagram).toHaveBeenCalled()
        });

    });
});