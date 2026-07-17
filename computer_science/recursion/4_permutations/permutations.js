const permutations = function(array) {
  if (array.length <= 1) return [array]
  
  return array.reduce((result, num) => {
    const arrs = array.filter(number => number !== num);
    const subPermutations = permutations(arrs);

    for (let arr of subPermutations)
      result.push([num, ...arr])

    return result
  },[]);
}

// Do not edit below this line
module.exports = permutations;