// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [8, 13, 11], ['blue', 'black', 'green']];

let newArr = arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort().reverse();
  } else {
    return subArray.slice().sort((a, b) => b - a);
  }
})

console.log(newArr);