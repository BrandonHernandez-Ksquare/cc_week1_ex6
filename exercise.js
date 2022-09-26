/* *Instructions*
    You will solve one of the most famous cypher... Caesar's cypher.

    This is a shift cypher meaning that all the letters shift it's position by a set amount.

    You need to implement a cypher that rotates each later exactly 13 positions (using only the English alphabeth),
    as input you will get a coded string and you must return the decoded result.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const cypher = (str) => {
    
    /* Only make changes below this comment */
    let encoded = ""; // created empty string variable for the result
    let alphabetStart = "ABCDEFGHIJKLM"; // when searching through wikipedia i found that there was this relationship to the cypher, so that's the approach I decided to take, it will compare two arrays and replace the letter found on one with the one on the other array which in turn is 13 positions apart from the encoded literal
    let alphabetEnd = "NOPQRSTUVWXYZ"; //

    for (let i = 0; i < str.length; i +=1) { // for loop to decode each letter
        let letterToDecode = str[i]; // letter that will be decoded based on index
        if (alphabetStart.indexOf(letterToDecode) >= 0) { // this conditions helps us find if the letter to decode is in the first half od the alphabet if its not it will continue to the other condition, if it is ->
            encoded += alphabetEnd[alphabetStart.indexOf(letterToDecode)]; // if the letter to decypher is found on the first array it will give us an index of position then we will take that same index and take the letter from the other array which would be the decoded one (13 positions apart) and add it to the result
        }
        else if (alphabetEnd.indexOf(letterToDecode) >= 0) { //this does the same but viceversa, if it is not found on the first 13 letters the result will be -1 and start on the second half, then it adds the letter equal to the index but on the other array
            encoded += alphabetStart[alphabetEnd.indexOf(letterToDecode)];
        } else {
            encoded += letterToDecode; // in case the letter is not included it will add the same value, it will add punctuation and spaces and ignore any other letter not in the arrays
        }
    }

   return encoded;
    /* Only make changes above this comment */
}

   return encoded;
    /* Only make changes above this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.cypher = cypher;