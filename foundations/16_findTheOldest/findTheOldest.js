const findTheOldest = function(arr) {
    const oldestPerson = arr.reduce((finalV, elem) => {

        const oldestAge = (finalV.yearOfDeath || new Date().getFullYear()) - finalV.yearOfBirth;
        const age = (elem.yearOfDeath || new Date().getFullYear()) - elem.yearOfBirth;
        
        if(oldestAge < age) return elem
        return finalV
    })

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
