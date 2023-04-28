// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//CURRENTLY GENERATING NUMBERS ONLY!!
function generatePassword() {
  //conditional while loop here if input does not fall between 8 and 128
  var passwordLength = prompt("Choose a length for your password. Please choose a value between 8 and 128 characters.");
  while (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a value between 8 and 128.")
    var passwordLength = prompt("Choose a length for your password. Please choose a value between 8 and 128 characters.");
  }
  alert("Next choose the parameters for your password. Click 'OK' for yes and 'Cancel' for no.");
  var includeLower = confirm("Would you like your password to contain lowercase letters?");
  var includeUpper = confirm("Would you like your password to contain uppercase letters?");
  var includeNumeric = confirm("Would you like your password to contain numbers?");
  var includeSpecial = confirm("Would you like your password to contain special characters?");
  

  //setting a variable for a password array - randomly generate first value?
  var passwordArray = [Math.floor(Math.random() * 10)];

  //this loop iterates to create an array with as many random number entries as password length inputed
  for (i=1; i < passwordLength; i++){
    passwordArray.push(Math.floor(Math.random() * 10));
  }

  //join the array into one string and return
  var password = passwordArray.join("");

return password;

}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}