// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';
var isLowercase = true;
var isUppercase = true;
var isNumberic = true;
var isSpecial = true;

function generatePassword () {
  password_length = prompt("Please enter the length of Password from 8 to 128");
  if (password_length >=8 && password_length<= 128){
  }
  else{
    alert ("Please enter the length of Password from 8 to 128")
  }

    isLowercase = confirm("Password includes lowercase");
		isUppercase = confirm("Password includes uppercase");
		isNumberic = confirm("Password includes numbers");
		isSpecial = confirm("Password includes special characters");





}
















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
