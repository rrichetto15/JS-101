// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// The return value should look like this:
// => [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let newArr = Object.values(obj).map(subObj => {
  if (subObj.type === 'fruit') {

    let colorsArr = [];

    subObj.colors.forEach(color => {
      colorsArr.push(color.charAt(0).toUpperCase() + color.slice(1));
    })
    
    return colorsArr;
  } else {
    return subObj.size.toUpperCase();
  }
})

console.log(newArr);