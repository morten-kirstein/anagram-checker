
const wordOne = 'Silent';
const wordTwo = 'listeN';

let isAnagram = null;

isAnagram = anagram(wordOne, wordTwo) /*?+*/


function anagram(wordOne, wordTwo) {

    //Check om ord har samme længde
    const isSameLength = isWordsSameLength(wordOne, wordTwo) /*?+*/

    //Lowercase Words
    const lowerCasedWordOne = setWordToLowercase(wordOne); /*?+*/
    const lowerCasedWordTwo = setWordToLowercase(wordTwo); /*?+*/

    // split ord til arary
    const splittedWordOne = splitWord(lowerCasedWordOne);
    const splittedWordTwo = splitWord(lowerCasedWordTwo);

    // sorteret array i alfabetisk
    const sortedWordOne = sortWordArray(splittedWordOne); /*?+*/
    const sortedWordTwo = sortWordArray(splittedWordTwo); /*?+*/

    //Join array to string
    const sortedWordOneString = arrayToString(sortedWordOne); /*?+*/
    const sortedWordTwoString = arrayToString(sortedWordTwo); /*?+*/

    // validere at wordOne er === WordTwo
    const isWordsSame = compareWords(sortedWordOneString, sortedWordTwoString) /*?+*/

    if (isWordsSame) {
        return true;
    } else {
        return false;
        console.log('du stinker');
    }

}

function compareWords(wordOne, wordTwo) {
    return wordOne === wordTwo; /*?+*/
}

function isWordsSameLength(wordOne, wordTwo) {
    const wordOneLength = wordOne.length;
    const wordTwoLength = wordTwo.length;

    return wordOneLength == wordTwoLength;
}


function splitWord(word) {
    return Array.from(word); /*?+*/
}

function arrayToString(wordArray) {
    return wordArray.join(''); /*?+*/
}



function setWordToLowercase(word) {
    const lowerCasedWord = word.toLowerCase();
    return lowerCasedWord;
}


function sortWordArray(wordArray) {
    const sortArray = [...wordArray];
    return sortArray.sort(); /*?+*/
}



//retunere true hvis alle bogstaver kan formes til det andet ord


//listen silent