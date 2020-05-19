// Assignment Code
var generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]

var confirmLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecialCharacter;

function generatePassword() {
  var confirmLength = (prompt("How long will your password be"));


while(confirmLength <= 8 || confirmLength >=128) {
  alert("Minimun lenght must be 8 characters");
  var confirmLength= (prompt("How long will your password be"))
}

alert(`Password will be ${confirmLength} characters long`);

var confirmUppercase = confirm("Include Uppercase");
var confirmLowercase = confirm("Include Lowercase");
var confirmNumbers = confirm("Include Numbers");
var confirmSpecialCharacter = confirm("Include Special Characters");

while(confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSpecialCharacter === false) {
  alert("Choose at least one");
  var confirmUppercase = confirm("Include Uppercase");
  var confirmLowercase = confirm("Include Lowercase");
  var confirmNumbers = confirm("Include Numbers");
  var confirmSpecialCharacter = confirm("Include Special Characters")

}

var Includepassword = []

if (confirmUppercase) {
  Includepassword = Includepassword.concat(Uppercase)
}
if (confirmSpecialCharacter) {
  Includepassword = Includepassword.concat(Lowercase)
}
if (confirmNumbers) {
  Includepassword = Includepassword.concat(numbers)
}
if (confirmSpecialCharacter) {
  Includepassword = Includepassword.concat(specialChar)
}

console.log(Includepassword)

var randomPassword = ""

for (var i = 0; i < confirmLength; i ++) {
  randomPassword = randomPassword + Includepassword[Math.floor(Math.random() * Includepassword.length)];
  console.log(randomPassword)
}
return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




