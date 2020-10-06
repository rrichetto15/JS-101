// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAgeMales = 0;

// Option 1
// Object.values(munsters).forEach(person => {
//   if (person.gender === 'male') {
//     totalAgeMales += person.age;
//   }
// });

// Option 2
for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalAgeMales += munsters[member].age;
  }
}

console.log(totalAgeMales);