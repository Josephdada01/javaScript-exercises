const add = function(a, b) {
  return  a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(array) {
  let total = 0;
  for (let element of array) {
    total += element;
  }
  return total;	
};

const multiply = function(array) {
  let total = 1;
  for (let element of array) {
    total *= element;
  }
  return total;
};

const power = function(x, n) {
  let pow = 1;
  
  for (let i = 0; i <  n; i++) {
    pow = pow * x;
  }
  return pow;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1
  }	else {
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
