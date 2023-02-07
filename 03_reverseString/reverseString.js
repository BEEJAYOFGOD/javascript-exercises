const reverseString = function (userMsg) {
    let stringed = ""; //initialization of the reversed string
    for (let count = 1; count < userMsg.length + 1; count++) {
        /*
         * A for loop that loops through the
         * number of elements iin the string &
         * adds them to the empty string
         */
        stringed += userMsg[userMsg.length - count];
    }
    return stringed;
};

// Do not edit below this line
module.exports = reverseString;
