// Global Variables
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumbers;
var passwordSpecials;
var userPassword = "";
var characterPool = "";

// Global Arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specials = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","\\","|",";",":","'","\"",",","<",".",">","/","?"];

// Function used to get the user's desired password length.
var getPasswordTotalCharacters = function() {

  passwordLength = prompt("Please determine the length of your password (no less than 8 characters, no greater than 128 characters): ");

  // Convert user input into a number
  passwordLength = parseFloat(passwordLength);

    // Ensure the user enters a number between 8-128.
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password length must be an integer between 8 and 128");
      getPasswordTotalCharacters();
    }
    // Ensure the user enters a number and not letters.
    else if (isNaN(passwordLength)) {
      alert("Your password length must be an integer between 8 and 128");
      getPasswordTotalCharacters();
    }
    // Ensure the user enters a whole number integer and not decimals.
    else if (!Number.isInteger(passwordLength)) {
      alert("Your password length must be an integer between 8 and 128");
      getPasswordTotalCharacters();
    }
    else {
      alert("The following prompts will ask you what types of characters you would like in your password. Press 'OK' for YES and 'Cancel' for NO");
      console.log("The user's password is a length of " + passwordLength + " characters.");
    }
}

// Function used to ask the user if they want lowercase letters in their password.
var getPasswordLowerCase = function() {

  passwordLowerCase = confirm("Would you like your password to contain lowercase letters?");

    if (passwordLowerCase) {
      console.log("The user's password will contain lowercase letters.");
      // Add all the strings in the lowerCase array to the character pool since the user wants lower case letters.
      for(var i = 0; i < lowerCase.length; i++) {
        characterPool += lowerCase[i];
      }
    }
    else {
      console.log("The user's password will NOT contain lowercase letters.");
    }
}

// Function used to ask the user if they want uppercase letters in their password.
var getPasswordUpperCase = function() {

  passwordUpperCase = confirm("Would you like your password to contain uppercase letters?");

    if (passwordUpperCase) {
      console.log("The user's password will contain uppercase letters.");
      // Add all the strings in the upperCase array to the character pool since the user wants upper case letters.
      for(var i = 0; i < upperCase.length; i++) {
        characterPool += upperCase[i];
      }
    }
    else {
      console.log("The user's password will NOT contain uppercase letters.");
    }
}

// Function used to ask the user if they want numbers in their password.
var getPasswordNumbers = function() {

  passwordNumbers = confirm("Would you like your password to contain numbers?");

    if (passwordNumbers) {
      console.log("The user's password will contain numbers.");
      // Add all the strings in the numbers array to the character pool since the user wants numbers.
      for(var i = 0; i < numbers.length; i++) {
        characterPool += numbers[i];
      }
    }
    else {
      console.log("The user's password will NOT contain numbers.");
    }
}

// Function used to ask the user if they want special characters in their password.
var getPasswordSpecials = function() {

  passwordSpecials = confirm("Would you like your password to contain special characters?");

    if (passwordSpecials) {
      console.log("The user's password will contain special characters.");
      // Add all the strings in the specials array to the character pool since the user wants specials.
      for(var i = 0; i < specials.length; i++) {
        characterPool += specials[i];
      }
    }
    else {
      console.log("The user's password will NOT contain special characters.");
    }
}

// Function used to make sure the user selected at least one type of character for their password.
var checkCharacters = function() {

  if (
    !passwordLowerCase && 
    !passwordUpperCase && 
    !passwordNumbers && 
    !passwordSpecials) {
      console.log("The user did not select at least one type of character. Asking the user again.");
      alert("You must select at least one type of character to be included in your password. Please try again.");
      getUserInput();
    }
  else {
    console.log("The password character pool is: " + characterPool);
  }
}

// Function used to randomly create a password within the confines of the user's selected character pool.
var createPassword = function() {
  
  for(var i = 0; i < passwordLength; i++) {
    // Choosing a character at a random location of characterPool using the Math.floor and Math.random
    userPassword += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }
  
  // the following if statements ensure that the password meets the user's criteria based on their character type selections.
  if (passwordLowerCase) {
    if (!/[a-z]/.test(userPassword)) {
      console.log("The generated password ( " + userPassword + " ) did not contain a lower case letter when user wanted lower case letters. Running again.");
      // Emptying the generated password before it goes back through the createPassword function again.
      userPassword = "";
      createPassword();
    }
  }
  if (passwordUpperCase) {
    if (!/[A-Z]/.test(userPassword)) {
      console.log("The generated password ( " + userPassword + " ) did not contain an upper case letter when user wanted upper case letters. Running again.");
      userPassword = "";
      createPassword();
    }
  }
  if (passwordNumbers) {
    if (!/[0-9]/.test(userPassword)) {
      console.log("The generated password ( " + userPassword + " ) did not contain a number when user wanted numbers. Running again.");
      userPassword = "";
      createPassword();
    }
  }
  if (passwordSpecials) {
    if (!/[`~!@#$%^&*()-_=+[{\]}\\|;:'",<.>/?]/.test(userPassword)) {
      console.log("The generated password ( " + userPassword + " ) did not contain a special character when user wanted special characters. Running again.");
      userPassword = "";
      createPassword();
    } 
  }
}

// Main function that takes all of the user input and converts it into random password.
var getUserInput = function() {
  getPasswordLowerCase();
  getPasswordUpperCase();
  getPasswordNumbers();
  getPasswordSpecials();
  checkCharacters();
}

// Write password to the #password input
function writePassword() {
  getPasswordTotalCharacters();
  getUserInput();
  createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = userPassword;
  console.log("The user's generated password is: " + userPassword);
  //Reset userPassword and characterPool back to empty if the user wants to create another password.
  userPassword = "";
  characterPool = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);