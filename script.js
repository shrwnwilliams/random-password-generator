// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "~"];
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword() {
var selectedParameters = []
var finalPassword = []
var passwordLength = prompt("Choose a number between 8 and 128 for the length of your password.");
if (passwordLength < 8 || passwordLength > 128){
alert("This number needs to be between 8 and 128! Try again.");
return generatePassword();

} if (!passwordLength){
  alert("This number must be included and must be between 8 and 128.");
return generatePassword();
} else chooseParameters();

function chooseParameters(){
var lowercaseOption = confirm("Do you want to use lowercase letters in your password?");
 if (lowercaseOption){
   selectedParameters = selectedParameters.concat(lowercaseLetters);
  //  console.log(selectedParameters);
 }
var uppercaseOption = confirm("Do you want to use uppercase letters in your password?");
if (uppercaseOption){
  selectedParameters = selectedParameters.concat(uppercaseLetters);
  // console.log(selectedParameters);
}
var specialOption = confirm("Do you want to use special characters in your password?");
if (specialOption){
  selectedParameters = selectedParameters.concat(specialCharacters);
  // console.log(selectedParameters);
}
var numericOption = confirm("Do you want to use numbers in your password?");
if (numericOption){
  selectedParameters = selectedParameters.concat(specialCharacters);
  // console.log(selectedParameters);
}
}
if (selectedParameters.length === 0){
  alert("You must select at least one parameter for your password.");
  return chooseParameters()
} else randomizePassword();
// console.log(selectedParameters);

function randomizePassword () {
  for (var i = 0; i < passwordLength; i++) {
  var randomizedPassword = selectedParameters[Math.floor(Math.random() * selectedParameters.length)];
  finalPassword = randomizedPassword + finalPassword;
}
}
return finalPassword;
}


generateBtn.addEventListener("click", writePassword);