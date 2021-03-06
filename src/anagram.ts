import Utils from "./utils";
import Words from "./words.interface";

export default class AnagramChecker {

    constructor(private utils = new Utils()) { }

    checkWordsForAnagram({ wordOne, wordTwo }: Words): boolean {

        //Lowercase Words
        const lowerCasedWordOne = this.utils.lowercaseWord(wordOne); /*?+*/
        const lowerCasedWordTwo = this.utils.lowercaseWord(wordTwo); /*?+*/

        //Split words into array
        const splittedWordOne = this.utils.splitWordIntoArray(lowerCasedWordOne);
        const splittedWordTwo = this.utils.splitWordIntoArray(lowerCasedWordTwo);

        // Sort items in array alphabetically and desc. 
        const sortedWordOne = this.utils.sortWordArray(splittedWordOne); /*?+*/
        const sortedWordTwo = this.utils.sortWordArray(splittedWordTwo); /*?+*/

        //Create string from array items
        const sortedWordOneString = this.utils.arrayToString(sortedWordOne); /*?+*/
        const sortedWordTwoString = this.utils.arrayToString(sortedWordTwo); /*?+*/

        //Validate that the words are the identical
        const words: Words = { wordOne: sortedWordOneString, wordTwo: sortedWordTwoString };
        const isWordsSame = this.utils.compareWords(words) /*?+*/
        return isWordsSame;
    }

    isAnagram({ wordOne, wordTwo }: Words): boolean {

        //Check if words are same length
        const sameLength = this.utils.isWordsSameLength({ wordOne, wordTwo }) /*?+*/
        const notSameLength = sameLength === false;

        return notSameLength ? false : this.checkWordsForAnagram({ wordOne, wordTwo });
    }
}
