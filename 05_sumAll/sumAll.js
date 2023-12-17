const sumAll = function(a, b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR'; // check if it is numb or not
    if (a < 0 || b < 0) return 'ERROR'; // if it is less than 0 return error
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    for (let j = min; j <= max; j++) {
        sum = sum + j
    }
    return sum;    
};

// Do not edit below this line
module.exports = sumAll;
