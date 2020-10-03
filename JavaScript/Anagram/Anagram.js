// [SHORT DESCRIPTION HERE]
//[LANGUAGE] Javascript ES6+
// Author: @Humiditii

/*
    This anagram function accepts two strings and compare them 
*/

/**
 * 
 * @param {String} string1 
 * @param {String} string2 
 */

const anagram = (string1, string2)=> {
    //change the case to lower case for uniformity
    const stringoneCaseChange = string1.toLowerCase();
    const stringTwoCaseChange = string2.toLowerCase();

    //check if strings have the same length before comparing
    if (stringoneCaseChange.length !== stringTwoCaseChange.length) {
        console.log('Words do not have same length');
    }else{
        //arrays that will contain values from the strings
        const strArr1 = [];
        const strArr2 = [];
        for (const a of stringoneCaseChange) {
            //pushing values to the array
            strArr1.push(a);
        }

        for (const b of stringTwoCaseChange) {
            //pushing values to the array
            strArr2.push(b);
        }

        //sort the arrays and join back to string
        const sortedArr1 = strArr1.sort().join('');
        const sortedArr2 = strArr2.sort().join('');

        //check for anagram or !anagram
        if (sortedArr1 === sortedArr2) {
            console.log('These words are anagram');
        }else{
            console.log('These words are not anagram');
        }

    }
   
}

anagram('Kunle', 'lEnuk');
