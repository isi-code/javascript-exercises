const pascal = function(rows, arr = [1]) {
  if (rows === 1)
    return arr

  const newValuesArr = arr.map((num, idx) => {
    const nextNum = (arr[idx+1] in arr) ? arr[idx+1] : 0;
    return num + nextNum;
  });

  const result = [1, ...newValuesArr];

  return pascal(rows-1, result)
};

// Do not edit below this line
module.exports = pascal;
