const arrayList = createArrayOfNumbersBetween(-10000, 10000);
const excludeList = [1, 3, 6, 4, 1, 2];
lowestNumberInArray(arrayList, excludeList); /*?+*/


function findlowestNumberInCollection(collection) {
    return Math.min(...collection); /*?+*/
}

function findNumbersAbove(collection, above) {
    return collection.filter(number => number > above); /*?+*/
}


function isNumberInExcludeList(number, excludeList) {
    return excludeList.includes(number); /*?+*/

}

function excludeNumberFromCollection(numberCollection, excludeList) {

    let excludedNumberCollection = [];

    for (const number of numberCollection) {

        const isInExcludelist = isNumberInExcludeList(number, excludeList);
        const numbersNotExcluded = !isInExcludelist;

        if (numbersNotExcluded) {
            excludedNumberCollection.push(number);
        }
    }

    return excludedNumberCollection;
}

function lowestNumberInArray(arrayList, excludeList) {

    const excludedNumberCollection = excludeNumberFromCollection(arrayList, excludeList) /*?+*/
    const numbersAboveCollection = findNumbersAbove(excludedNumberCollection, 0); /*?+*/
    const result = findlowestNumberInCollection(numbersAboveCollection); /*?+*/

    return result; /*?+*/
}

function createArrayOfNumbersBetween(startNumber, endNumber) {

    const arrayOfNumbers = [];

    for (let index = startNumber; index < endNumber + 1; index++) {
        arrayOfNumbers.push(index);
    }

    return arrayOfNumbers;
}






