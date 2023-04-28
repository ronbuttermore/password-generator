// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
//runs writePassword function when 'generate' button is clicked, which will trigger generatePassword function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function generatePassword() {
  //conditional while loop here if input does not fall between 8 and 128 - will force user to choose an acceptable value
  var passwordLength = prompt("Choose a length for your password. Please choose a value between 8 and 128 characters.");

  while (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a value between 8 and 128.")
    var passwordLength = prompt("Choose a length for your password. Please choose a value between 8 and 128 characters.");
  }

  //create variables to store boolean values for which parameters are selected
  alert("Next choose the parameters for your password. Click 'OK' for yes and 'Cancel' for no.");
  var includeLower = confirm("Would you like your password to contain lowercase letters?");
  var includeUpper = confirm("Would you like your password to contain uppercase letters?");
  var includeNumeric = confirm("Would you like your password to contain numbers?");
  var includeSpecial = confirm("Would you like your password to contain special characters?");
  
  //if all types were declined, start over and force user to select at least one type to proceed
  while (!includeLower && !includeUpper && !includeNumeric && !includeSpecial){
    alert("You must choose at least one parameter to include in your password.")
    var includeLower = confirm("Would you like your password to contain lowercase letters?");
    var includeUpper = confirm("Would you like your password to contain uppercase letters?");
    var includeNumeric = confirm("Would you like your password to contain numbers?");
    var includeSpecial = confirm("Would you like your password to contain special characters?");
  } 

  //conditional logic to let user know what properties they selected
  //easier way to do this: alert user for each property selected with a loop! change if time
  var allChoices = [includeLower, includeUpper, includeNumeric, includeSpecial];
  if (includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("Your password of " + passwordLength + " characters will now be generated using only lowercase letters.");
  } else if (!includeLower && includeUpper && !includeNumeric && !includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using only uppercase letters.");
  } else if (!includeLower && !includeUpper && includeNumeric && !includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using only numbers.");
  } else if (!includeLower && !includeUpper && !includeNumeric && includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using only special characters.");
  } else if (includeLower && includeUpper && !includeNumeric && !includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using lowercase and uppercase letters.");
  } else if (includeLower && !includeUpper && includeNumeric && !includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using lowercase letters and numbers.");
  } else if (includeLower && !includeUpper && !includeNumeric && includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using lowercase letters and special characters.");
  } else if (!includeLower && includeUpper && includeNumeric && !includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using uppercase letters and numbers.");
  } else if (!includeLower && includeUpper && !includeNumeric && includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using uppercase letters and special characters.");
  } else if (!includeLower && !includeUpper && includeNumeric && includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using numbers and special characters.");
  } else if (includeLower && includeUpper && includeNumeric && !includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using lowercase letter, uppercase letters, and numbers.");
  } else if (includeLower && includeUpper && !includeNumeric && includeSpecial){
    alert("Your password of " + passwordLength + " characters will now be generated using lowercase letters, uppercase letters, and special characters.");
  } else if (!includeLower && includeUpper && includeNumeric && includeSpecial) {
    alert("Your password of " + passwordLength + " characters will now be generated using uppercase letters, numbers and special characters.");
  } else {
    alert("Your password of " + passwordLength + " characters will now be generated using lowercase letters, uppercase letters, numbers and special characters.")
  }

  //Functions for generating random lower/upper/special characters
  function randomLower(){
    var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomLowerPicker = Math.floor(Math.random() * 26);
    var randomLowercase = alphabetLower[randomLowerPicker];
    return randomLowercase;
  }
  function randomUpper(){
    var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randomUpperPicker = Math.floor(Math.random() * 26);
    var randomUppercase = alphabetUpper[randomUpperPicker];
    return randomUppercase;
  }
  function randomNumber(){
    var randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }
  function randomChar(){
    var specialCharacterSet = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"];
    var randomCharPicker = Math.floor(Math.random() * 32);
    var randomSpecialChar = specialCharacterSet[randomCharPicker];
    return randomSpecialChar;
  }

  var passwordArray = [0,0,0,0];

  function generateRandoms() {
  passwordArray = [0,0,0,0];
  if (includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
      passwordArray[0] = randomLower();
      passwordArray.pop();
      passwordArray.pop();
      passwordArray.pop();
  } else if (!includeLower && includeUpper && !includeNumeric && !includeSpecial){
      passwordArray[0] = randomNumber();
      passwordArray.pop();
      passwordArray.pop();
      passwordArray.pop();
  } else if (!includeLower && !includeUpper && includeNumeric && !includeSpecial){
      passwordArray[0] = randomNumber();
      passwordArray.pop();
      passwordArray.pop();
      passwordArray.pop();
  } else if (!includeLower && !includeUpper && !includeNumeric && includeSpecial){
      passwordArray[0] = randomChar();
      passwordArray.pop();
      passwordArray.pop();
      passwordArray.pop();
  } else if (includeLower && includeUpper && !includeNumeric && !includeSpecial){
      passwordArray[0] = randomLower();
      passwordArray[1] = randomUpper();
      passwordArray.pop();
      passwordArray.pop();
  } else if (includeLower && !includeUpper && includeNumeric && !includeSpecial){
      passwordArray[0] = randomLower();
      passwordArray[1] = randomNumber();
      passwordArray.pop();
      passwordArray.pop();
  } else if (includeLower && !includeUpper && !includeNumeric && includeSpecial){
      passwordArray[0] = randomLower();
      passwordArray[1] = randomChar();
      passwordArray.pop();
      passwordArray.pop();
  } else if (!includeLower && includeUpper && includeNumeric && !includeSpecial){
      passwordArray[0] = randomUpper();
      passwordArray[1] = randomNumber();
      passwordArray.pop();
      passwordArray.pop();
  } else if (!includeLower && includeUpper && !includeNumeric && includeSpecial){
      passwordArray[0] = randomUpper();
      passwordArray[1] = randomChar();
      passwordArray.pop();
      passwordArray.pop();
  } else if (!includeLower && !includeUpper && includeNumeric && includeSpecial){
      passwordArray[0] = randomNumber();
      passwordArray[1] = randomChar();
      passwordArray.pop();
      passwordArray.pop();
  } else if (includeLower && includeUpper && includeNumeric && !includeSpecial){
      passwordArray[0] = randomLower();
      passwordArray[1] = randomUpper();
      passwordArray[2] = randomNumber();
      passwordArray.pop();
      passwordArray.pop();
  } else if (includeLower && includeUpper && !includeNumeric && includeSpecial){
      passwordArray[0] = randomLower();
      passwordArray[1] = randomUpper();
      passwordArray[2] = randomChar();
      passwordArray.pop();
  } else if (!includeLower && includeUpper && includeNumeric && includeSpecial) {
      passwordArray[0] = randomUpper();
      passwordArray[1] = randomNumber();
      passwordArray[2] = randomChar();
      passwordArray.pop();
  } else {
      passwordArray[0] = randomLower();
      passwordArray[1] = randomUpper();
      passwordArray[2] = randomNumber();
      passwordArray[3] = randomChar();
  }
  return passwordArray;
  }

  var charContainer = [];
  for (i=0; i<passwordLength; i++){
    charContainer[i] = "placeholder";
  }

  for (i=0; i<passwordLength; i++){
    generateRandoms();
    var pickone = Math.floor(Math.random() * passwordArray.length);
    charContainer[i] = passwordArray[pickone];
  }

  var password = charContainer.join("");

return password;

}

//places return from generatePassword function into html element 'password'
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}