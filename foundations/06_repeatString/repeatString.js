const repeatString = function(string, num) {
   if(num >= 0) {
        let printString = '';
        for(let i = 0; i < num; i++) printString += string;
        return printString
   }
    return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
