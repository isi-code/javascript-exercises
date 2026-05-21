const permutations = function(arr) {
  if(!arr.length) return [arr]

  const permNum = arr.reduce((acc,cur) => acc * cur );
  const permArr = getPermutations([arr], permNum);

  return permArr
};

function getPermutations(finalArr, permNum){
    if(finalArr.length === permNum)
        return finalArr

    const ranArr = randomArr(finalArr[0]);
    
    const isInArray = (endArray, arr) => {
        return endArray.some(
            (elem) => elem.every((el, idx) => el === arr[idx] )
        );
    };

    if(!isInArray(finalArr, ranArr))
        finalArr.push(ranArr);

    return getPermutations(finalArr, permNum)
}

function randomArr(arr){
    const newArr = [];
    let randomIdx, value;
    
    while(newArr.length !== arr.length){
        randomIdx = Math.floor(Math.random() * arr.length);
        value = arr[randomIdx];

        if (!newArr.includes(value))
            newArr.push(value);
    }

    return newArr
}
  
// Do not edit below this line
module.exports = permutations;