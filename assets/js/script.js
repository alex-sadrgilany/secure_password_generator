// Global Variables
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLowerCase;
var passwordUpperCase;
var passwordNumbers;
var passwordSpecials;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

// Function used to get the user's desired password length.
var getPasswordLength = function() {

  passwordLength = window.prompt("Please determine the length of your password (no less than 8 characters, no greater than 128 characters): ");

  // Convert user input into a number
  passwordLength = parseFloat(passwordLength);

    // Ensure the user enters a number between 8-128.
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password length must be an integer between 8 and 128");
      getPasswordLength();
    }
    // Ensure the user enters a number and not letters.
    else if (isNaN(passwordLength)) {
      window.alert("Your password length must be an integer between 8 and 128");
      getPasswordLength();
    }
    // Ensure the user enters a whole number enter and not decimals.
    else if (Number.isInteger(passwordLength) === false) {
      window.alert("Your password length must be an integer between 8 and 128");
      getPasswordLength();
    }
    else {
      window.alert("The following prompts will ask you what types of characters you would like in your password. Press 'OK' for YES and 'Cancel' for NO");
      console.log("The user's password is a length of " + passwordLength + " characters.");
    }
    return passwordLength;
    
}

// Function used to ask the user if they want lowercase letters in their password.
var getPasswordLowerCase = function() {

  passwordLowerCase = window.confirm("Would you like your password to contain lowercase letters?");

    if (passwordLowerCase === true) {
      console.log("The user's password will contain lowercase letters.");
      return passwordLowerCase;
    }
    else {
      console.log("The user's password will NOT contain lowercase letters.");
      return passwordLowerCase;
    }
}

// Function used to ask the user if they want uppercase letters in their password.
var getPasswordUpperCase = function() {

  passwordUpperCase = window.confirm("Would you like your password to contain uppercase letters?");

    if (passwordUpperCase === true) {
      console.log("The user's password will contain uppercase letters.");
      return passwordUpperCase;
    }
    else {
      console.log("The user's password will NOT contain uppercase letters.");
      return passwordUpperCase;
    }
}

// Function used to ask the user if they want numbers in their password.
var getPasswordNumbers = function() {

  passwordNumbers = window.confirm("Would you like your password to contain numbers?");

    if (passwordNumbers === true) {
      console.log("The user's password will contain numbers.");
      return passwordNumbers;
    }
    else {
      console.log("The user's password will NOT contain numbers.");
      return passwordNumbers;
    }
}

// Function used to ask the user if they want special characters in their password.
var getPasswordSpecials = function() {

  passwordSpecials = window.confirm("Would you like your password to contain special characters?");

    if (passwordSpecials === true) {
      console.log("The user's password will contain special characters.");
      return passwordSpecials;
    }
    else {
      console.log("The user's password will NOT contain special characters.");
      return passwordSpecials;
    }
}

// Function used to make sure the user selected at least one type of character for their password.
var checkCharacters = function() {

  if (
    passwordLowerCase === false && 
    passwordUpperCase === false && 
    passwordNumbers === false && 
    passwordSpecials === false) {
    window.alert("You must select at least one type of character to be included in your password. Please try again.");
    generatePassword();
  }
}

// Main function that takes all of the user input and converts it into random password.
var generatePassword = function() {
  getPasswordLength();
  getPasswordLowerCase();
  getPasswordUpperCase();
  getPasswordNumbers();
  getPasswordSpecials();
  checkCharacters();

  var totalcharacters = "";
  var password = "";

    // Using if statements for all the different combinations of characters the user may choose for their password.
    if (
      passwordLowerCase === true &&
      passwordUpperCase === true &&
      passwordNumbers === true &&
      passwordSpecials === true) {
        totalcharacters += lowerCase + upperCase + numbers + specials;
        console.log("The password character pool is: " + totalcharacters);
      }
    else if (
      passwordLowerCase === true &&
      passwordUpperCase === true &&
      passwordNumbers === true) {
        totalcharacters += lowerCase + upperCase + numbers;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordLowerCase === true &&
      passwordUpperCase === true &&
      passwordSpecials === true) {
        totalcharacters += lowerCase + upperCase + specials;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordLowerCase === true &&
      passwordNumbers === true &&
      passwordSpecials === true) {
        totalcharacters += lowerCase + numbers + specials;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordUpperCase === true &&
      passwordNumbers === true &&
      passwordSpecials === true) {
        totalcharacters += upperCase + numbers + specials;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordLowerCase === true &&
      passwordUpperCase === true) {
        totalcharacters += lowerCase + upperCase;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordLowerCase === true &&
      passwordNumbers === true) {
        totalcharacters += lowerCase + numbers;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordLowerCase === true &&
      passwordSpecials === true) {
        totalcharacters += lowerCase + specials;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordUpperCase === true &&
      passwordNumbers === true) {
        totalcharacters += upperCase + numbers;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordUpperCase === true &&
      passwordSpecials === true) {
        totalcharacters += upperCase + specials;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (
      passwordNumbers === true &&
      passwordSpecials === true) {
        totalcharacters += numbers + specials;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (passwordLowerCase === true) {
        totalcharacters += lowerCase;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (passwordUpperCase === true) {
        totalcharacters += upperCase;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (passwordNumbers === true) {
        totalcharacters += numbers;
        console.log("The password character pool is: " + totalcharacters);
    }
    else if (passwordSpecials === true) {
        totalcharacters += specials;
        console.log("The password character pool is: " + totalcharacters);
    }

    // creating a for loop to randomly select characters from the totalcharacters variable
    for(var i = 0; i < passwordLength; i++) {
      password += totalcharacters.charAt(Math.floor(Math.random() * totalcharacters.length));
    }
    console.log("The user's generated password is: " + password);
    return password;

}

// Write password to the #password input
function writePassword() {
  var userpassword = "";
  userpassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = userpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
