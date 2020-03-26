// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//prompt: password length 8-128 characters; if password length <8 or >128 characters, return 'Please enter a number between 8 and 128
//prompt: include lowercase characters?
//prompt: include uppercase characters?
//prompt: include numbers?
//prompt: include special characters?
//