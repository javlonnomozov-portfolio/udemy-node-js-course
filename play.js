var name = "Javlon";
var age = 22;
var hasHobbies = true;

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
