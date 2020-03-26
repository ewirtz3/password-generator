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
//var passwordLength = prompt: password length 8-128 characters; if password length <8 or >128 characters, return 'Please enter a number between 8 and 128'
//var lowerCase = confirm: include lowercase characters? 
//var upperCase = confirm: include uppercase characters?
//var number = confirm: include numbers?
//var special = confirm: include special characters?
//define arrays, do I need new var names? lowerCase = [a-z]; upperCase = [A-Z], number = [0-9]; special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+']
//if lowerCase = true && upperCase = false && number = false && special = false {return [a-z]*passwordLength;} 
//else if lowerCase = true && upperCase = true && number = false && special = false {var lowerUpper = [a-z].concat([A-Z]); return lowerUpper * passwordLength;}
//else if lowerCase = true && upperCase = true && number = true && special = false {var lowerUpperNumber = [a-z].concat([A-Z], [0-9]); return lowerUpperNumber * passwordLength;}
//else if lowerCase = true && upperCase = true && number = true && special = true {var all = [a-z].concat([A-Z], [0-9], [special]); return all * passwordLength}