// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [8, 13, 11], ['blue', 'black', 'green']];

let newArr = arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort();
  } else {
    return subArray.slice().sort((a, b) => a - b);
  }
})

console.log(newArr);