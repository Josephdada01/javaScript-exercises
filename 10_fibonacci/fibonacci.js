/**
 * Calculates the Fibonacci number for a given position.
 * @param {number} number - The position in the Fibonacci sequence (0-based).
 * @returns {number} - The Fibonacci number at the specified position.
 */
const fibonacci = function(number) {
    // If the position is 0 or 1, return the number itself
    if (number <= 1) {
        return number;
    }
    let previous = 0; // Initialize the value for the previous number in the sequence
    let current = 1; //Initialize the value for the current number in the sequence

    // Iterate through to calculate the Fibonacci number at the given position
    for (let i = 2; i <= number; i++){
        const next = previous + current; // Calculate the next Fibonacci number
        previous = current; // Update the previous number to the current one
        current = next; // Update the current number to the next one for the next iteration
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
