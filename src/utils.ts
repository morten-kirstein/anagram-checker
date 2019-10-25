import Words from "./words.interface";

export default class Utils {

    public compareWords(words: Words): boolean {
        const { wordOne, wordTwo } = words
        return wordOne === wordTwo;
    }


    public isWordsSameLength(words: Words): boolean {

        const { wordOne, wordTwo } = words;

        const wordOneLength = wordOne.length;
        const wordTwoLength = wordTwo.length;

        return wordOneLength === wordTwoLength;
    }


    public splitWordIntoArray(word: string): string[] {
        return Array.from(word);
    }


    public arrayToString(wordArray: string[]): string {
        return wordArray.join('');
    }


    public lowercaseWord(word: string): string {
        return word.toLowerCase();
    }


    public sortWordArray(wordArray: string[]): string[] {
        return wordArray.sort();
    }
}



