// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(member => {
  const name = member[0];
  const age = member[1].age;
  const gender = member[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}`);
})

// Expected pattern for each line of output: 
// => (Name) is a (age)-year-old (male or female).