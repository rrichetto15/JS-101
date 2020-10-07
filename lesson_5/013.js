// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// => [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let sumA = 0;
  let sumB = 0;

  a.forEach(num => {
    if (num % 2 !== 0) {
      sumA += num;
    }
  })

  b.forEach(num => {
    if (num % 2 !== 0) {
      sumB += num;
    }
  })

  if (sumA < sumB) {
    return -1;
  } else if (sumA > sumB) {
    return 1;
  } else {
    return 0;
  }
})

console.log(arr);