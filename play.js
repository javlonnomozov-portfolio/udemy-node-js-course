const name = "Javlon";
let age = 21;
const hasHobbies = true;

age = 22;

function summeriseUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summeriseUser(name, age, hasHobbies));
