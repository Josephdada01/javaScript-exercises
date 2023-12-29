const fibonacci = function(number) {
    if (number <= 1) {
        return number;
    }
    let previous = 0;
    let current = 1;

    for (let i = 2; i <= number; i++){
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
