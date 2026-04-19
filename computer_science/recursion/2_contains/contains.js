const contains = function(obj, findV) {
    const values = Object.values(obj);

    if (values.includes(findV)) return true
    const valObj = values.filter(val => { return typeof val === "object" && val !== null });

    // if (valObj.length)
    //     for (const val of valObj) 
    //         if (contains(val, findV)) return true;
    
    // return false
    
    return valObj.some((nestedObject) =>
    contains(nestedObject, findV)
  );
};
  
// Do not edit below this line
module.exports = contains;
