const palindromes = function (str) {
    // making sure it is not case sensitive an turn everything to lower case
    const processedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i = 0;
    let h = processedStr.length -1;

    while (h > i) {
        if (processedStr[i++] !== processedStr[h--]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
