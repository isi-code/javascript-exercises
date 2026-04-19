const totalIntegers = function(obj) {
    if(typeof obj !== 'object' || obj === null) return 

    return Object.values(obj).reduce((acc, val) => {
      if (Number.isInteger(val)) return acc + 1;

      else if(typeof val === "object" && val !== null) 
        return acc + totalIntegers(val);

      return acc
    }, 0);
};
  

// Do not edit below this line
module.exports = totalIntegers;
