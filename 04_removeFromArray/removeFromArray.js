const removeFromArray = function(arr, ...argsToRemove) {
    // a function that takes an array and some other 
    //arguments then removes the other arguments from that array:
    return arr.filter(item => !argsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
