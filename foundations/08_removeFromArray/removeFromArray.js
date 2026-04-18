const removeFromArray = function(arr, ...rm) {
    return arr.filter(elem => { return !rm.includes(elem) });
};

// Do not edit below this line
module.exports = removeFromArray;
