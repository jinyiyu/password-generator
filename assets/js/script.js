// Assignment Code
const generateBtn = document.querySelector("#generate");

// get the password length function
const getPasswordLength = () => {
  const passwordLength = prompt("how long would you like your password to be?");
  const passwordLengthNum = parseInt(passwordLength, 10);
  if (passwordLengthNum >= 8 && passwordLengthNum <= 128) {
    return passwordLengthNum;
  } else {
    // This is when the users' input is not right
    alert("please enter the password again.");
    window.location.reload(true);
    document.getElementById("password").reset();
  }
};

//   get the password criteria function
const getPasswordCriteria = () => {
  const lowercase = confirm(
    "Would you like to include lowercases in your password?"
  );
  const uppercase = confirm(
    "Would you like to include uppercases in your password?"
  );
  const numeric = confirm(
    "Would you like to include numbers in your password?"
  );
  const specialChar = confirm(
    "Would you like to include special characters in your password?"
  );
  const passwordCriteriaArray = [];
  if (lowercase) {
    passwordCriteriaArray.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (uppercase) {
    passwordCriteriaArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (numeric) {
    passwordCriteriaArray.push("0123456789");
  }
  if (specialChar) {
    passwordCriteriaArray.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }
  return passwordCriteriaArray;
};

// create random password function
const getRandomPassword = (passwordLength, passwordCriteria) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i += 1) {
    // select random catogoeies from the array
    const randomCategoryIndex = Math.floor(
      Math.random() * passwordCriteria.length
    );
    // get random cetegories
    const randomCategory = passwordCriteria[randomCategoryIndex];
    // get random index
    const randomIndex = Math.floor(Math.random() * randomCategory.length);
    // get random character
    const randomCharacter = randomCategory.charAt(randomIndex);
    passwordArray.push(randomCharacter);
  }
  return passwordArray.join("");
};

// main function to generate the random password
const generatePassword = () => {
  // calling the password length function
  const passwordLength = getPasswordLength();

  if (passwordLength) {
    console.log("hello");
    // calling the password Criteria function
    const passwordCriteria = getPasswordCriteria();

    if (passwordCriteria.length === 0) {
      alert(
        "please at least choose one characters to include in your random generated password, please click ok to start again"
      );
      window.location.reload(true);
      document.getElementById("password").reset();
    } else {
      // calling the random password generation function
      const randomPassword = getRandomPassword(
        passwordLength,
        passwordCriteria
      );
      return randomPassword;
    }
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
