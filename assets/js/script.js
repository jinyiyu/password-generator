// Assignment Code
const generateBtn = document.querySelector("#generate");

// 这是总function,等全部写完了就把}全部括起来
const generatePassword = () => {
  const passwordLength = getPasswordLength();
  if(passwordLength){
    const passwordCriteria = getPasswordCriteria();
    console.log(passwordCriteria);
    if(passwordCriteria.length === 0){
      alert("please at least choose one")
    }else{
      console.log("keep going!")
    };
  }else{
    alert("please enter the password again.")
  }
};

// main function to generate the random password
const getPasswordLength = () => {
  const passwordLength = prompt("how long would you like your password to be?");
  const passwordLengthNum = parseInt(passwordLength,10);
  if (passwordLengthNum>=8 && passwordLengthNum<=128){
    return passwordLengthNum;
  }
};

const getPasswordCriteria = () => {
  const lowercase=confirm("Would you like to include lowercases in your password?");
  const uppercase=confirm("Would you like to include uppercases in your password?");
  const numeric=confirm("Would you like to include numbers in your password?");
  const specialChar=confirm("Would you like to include special characters in your password?");
  const passwordCriteriaArray = [];
  if(lowercase){
    passwordCriteriaArray.push("abcdefghijklmnopqrstuvwxyz");
  };
  if(uppercase){
    passwordCriteriaArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  };
  if(numeric){
    passwordCriteriaArray.push("0123456789");
  };
  if(specialChar){
    passwordCriteriaArray.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  };
  return passwordCriteriaArray;
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
