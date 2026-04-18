const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
	return nums.reduce((acc, num) => {return acc + num}, 0)
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => {return acc * num})
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	if (num <= 1) return 1
  return num * factorial(num - 1)
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
