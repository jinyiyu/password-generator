// Assignment Code
const generateBtn = document.querySelector("#generate");

// 这是总function,等全部写完了就把}全部括起来
// const generatePassword = () => {};

// main function to generate the random password
const getPasswordLength = () => {
  const passwordLength = prompt("how long would you like your password be?");
  const LengthNum = parseInt(passwordLength);
  console.log(LengthNum);
};

console.log(getPasswordLength());


const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

// const createRandomPassword = () => {
//   return null;
// };


//   get the password criteria
//   const passwordCriteria = getPasswordCriteria();

  // create random password
//   const password = createRandomPassword(passwordLength, passwordCriteria);
//   return password;
// };

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
