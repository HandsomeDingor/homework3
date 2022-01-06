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

  do{
    var password_length = prompt("Please enter the length of Password");
    //check if hit cancel
    if(password_length === null){
      alert ("Please enter number form 8 to 128 or close window");
    } else if (isNaN(password_length)){ //check string or number
      alert ("Please enter number only");
    } else if (password_length < 8 || password_length > 128){ //check number interval 
      alert ("number from 8 to 128");
    }
  }while(!(!(isNaN(password_length)) && password_length >=8 && password_length <= 128))

  do{
    //check if true or false
    isLowercase = confirm("Password includes lowercase");
    isUppercase = confirm("Password includes uppercase");
    isNumberic = confirm("Password includes numbers");
    isSpecial = confirm("Password includes special characters");

    if(!isLowercase&&!isUppercase&&!isNumberic&&!isSpecial){
			alert("at least one character type should be selected");
		}

    var chars = "";
    var pw = ""

    //check and add up the chars string
    if (isLowercase){
      chars = chars + lowerLetters ;
    }
    if (isUppercase){
      chars = chars + upperLetters;
    }
    if (isNumberic){
      chars = chars + numbers;
    }
    if (isSpecial){
      chars = chars + symbols;
    }
  }while (!isLowercase && !isUppercase && !isNumberic && !isSpecial)

  // using for loop to random select letter for "chars string"
  for (var i=0; i< password_length; i++){
    pw += chars.charAt(Math.floor(Math.random() * chars.length));
  } 

  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);