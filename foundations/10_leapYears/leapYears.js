const leapYears = function(yr) {
    if (yr % 4 === 0)
        if (yr % 100 !== 0 || yr % 400 === 0)
            return true
        
    return false
};

// Do not edit below this line
module.exports = leapYears;
