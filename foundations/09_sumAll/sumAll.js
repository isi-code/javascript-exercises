const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR"
    else if (!(Number.isInteger(num1) && Number.isInteger(num2)))
        return "ERROR"

    const greaterNum = num1 > num2 ? num1 : num2;
    const lesserNum = num1 < num2 ? num1 : num2;
    let result = 0;

    for (let num = lesserNum; num <= greaterNum; num++) {
        result += num;
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
