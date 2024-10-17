const name = "Javlon";
let age = 21;
const hasHobbies = true;

age = 22;

const summeriseUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

console.log(summeriseUser(name, age, hasHobbies));

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;
