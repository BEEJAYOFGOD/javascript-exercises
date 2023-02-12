const removeFromArray = function (myArray, ...obsolete) {
    for (const obsNum of obsolete) {
        for (let itemIndex = 0; itemIndex < myArray.length; itemIndex++) {
            if (
                myArray[itemIndex] == obsNum &&
                typeof obsNum == typeof myArray[itemIndex]
            ) {
                myArray.splice(itemIndex, 1);
            }
        }
    }

    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
