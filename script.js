// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//var passwordLength = prompt: password length 8-128 characters; if password length <8 or >128 characters, alert 'Please enter a number between 8 and 128'
var passwordLength = prompt('Please specify a password length between 8 and 128 characters.') {
  var pwdLength = parseInt(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    alert='Please enter a number between 8 and 128.'
  }
}

//define arrays, do I need new var names? lowerCase = [a-z]; upperCase = [A-Z], number = [0-9]; special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+']
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var specialChar = '!@#$%^&*()+';
//var lowerCase = confirm: include lowercase characters?
var lower = confirm('Should the password include lower case letters?');
//var upperCase = confirm: include uppercase characters?
var upperCase = confirm('Should the password include upper case letters?');
//var number = confirm: include numbers?
var number = confirm('Should the password include numbers?');
//var special = confirm: include special characters?
var special = confirm('Should the password include special characters?');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  var characters = '';
  (lowerCase.true) ? characters.push(...lower) : '';
  (upperCase.true) ? characters.push(...upper) : '';
  (number.true) ? characters.push(...num) : '';
  (special.true) ? characters.push(...specialChar) : '';
  passwordText.value = password(pwdLength.value, characters);
}

//if lowerCase = true && upperCase = false && number = false && special = false {return [a-z]*passwordLength;} 
//else if lowerCase = true && upperCase = true && number = false && special = false {var lowerUpper = [a-z].concat([A-Z]); return lowerUpper * passwordLength;}
//else if lowerCase = true && upperCase = true && number = true && special = false {var lowerUpperNumber = [a-z].concat([A-Z], [0-9]); return lowerUpperNumber * passwordLength;}
//else if lowerCase = true && upperCase = true && number = true && special = true {var all = [a-z].concat([A-Z], [0-9], [special]); return all * passwordLength}