const reverseString = function(string) {
   let reverseStr = '';

   for (let c = string.length - 1; c >= 0; c--) {
      const char = string[c];
      reverseStr += char;
   }

   return reverseStr
};

// Do not edit below this line
module.exports = reverseString;
