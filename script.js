// Assignment Code
var generateBtn = document.querySelector("#generate");

//var passwordLength = prompt: password length 8-128 characters; if password length <8 or >128 characters, alert 'Please enter a number between 8 and 128'
var passwordLength = prompt('Please specify a password length between 8 and 128 characters.');
var pwdLength = parseInt(passwordLength);
//console.log to confirm pwdLength
console.log(pwdLength);

while (pwdLength < 8 && !null || pwdLength > 128 && !null) {
  alert('Please enter a number between 8 and 128.');
  passwordLength = prompt ('Please specify a password length between 8 and 128 characters.');
  // pwdLength = parseInt(passwordLength);
}

//define arrays, do I need new var names? lowerCase = [a-z]; upperCase = [A-Z], number = [0-9]; special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+']
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var specialChar = '!@#$%^&*()+';
//var lowerCase = confirm: include lowercase characters?
var lower = confirm('Should the password include lower case letters?');
//var upperCase = confirm: include uppercase characters?
var upper = confirm('Should the password include upper case letters?');
//var number = confirm: include numbers?
var number = confirm('Should the password include numbers?');
//var special = confirm: include special characters?
var special = confirm('Should the password include special characters?');
 

//add selected arrays to characters array
var characters = [];
lower ? characters.push(...lowerCase) : '';
upper ? characters.push(...upperCase) : '';
number ? characters.push(...num) : '';
special ? characters.push(...specialChar) : '';
//console.log full array
console.log(characters);


function generatePassword() {
  for (i=0; i<pwdLength.value; i++) {
    var password = '';
    var createdPassword = password + characters[Math.floor(Math.random()*characters.length)]
    console.log(createdPassword);
  }
  return createdPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//if lowerCase = true && upperCase = false && number = false && special = false {return [a-z]*passwordLength;} 
//else if lowerCase = true && upperCase = true && number = false && special = false {var lowerUpper = [a-z].concat([A-Z]); return lowerUpper * passwordLength;}
//else if lowerCase = true && upperCase = true && number = true && special = false {var lowerUpperNumber = [a-z].concat([A-Z], [0-9]); return lowerUpperNumber * passwordLength;}
//else if lowerCase = true && upperCase = true && number = true && special = true {var all = [a-z].concat([A-Z], [0-9], [special]); return all * passwordLength}