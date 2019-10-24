export default class Utils {

    public compareWords(wordOne: string, wordTwo: string): boolean {

        return wordOne === wordTwo;
    }

    public isWordsSameLength(wordOne: any, wordTwo: any): boolean {
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


    public setWordToLowercase(word: string): string {
        const lowerCasedWord = word.toLowerCase();
        return lowerCasedWord;
    }


    public sortWordArray(wordArray: string[]): string[] {
        const sortArray = [...wordArray];
        return sortArray.sort();
    }
}

