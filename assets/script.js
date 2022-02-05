// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let userConfirms = ""; //make this a string instead
  let userRejects = "";

  let passwordLength = parseInt(prompt("How long would you like your password? Please choose between 8 - 128 characters")) ;

    while (!passwordLength || passwordLength < 8 || passwordLength >128 || passwordLength == NaN) {
      passwordLength = parseInt(prompt("Please choose a valid password length")) ;  
    }

    alert("You choose " + passwordLength + ".")
    alert("Please select at least one of the following criteria prompts for your password.")
  
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let confirmUppercase = confirm("Do you want your password to have uppercase letters?");

  if (confirmUppercase === true){
    alert("Your password will have uppercase letters.")
    userConfirms += uppercase
  }else if (confirmUppercase === false){
    alert("WHAT!!! You to good for UPPERCASE letters?")
    userRejects += uppercase
  }

  let lowercase = "abcdefghijklmnopqrstuvwxyuz"
  let confirmLowercase = confirm("Do you want your password to have lowercase letters?");

  if (confirmLowercase === true){
    alert("Your password will have lowercase letters.")
    userConfirms += lowercase
  }else if (confirmLowercase === false){
    alert("OH!! you like the big ones.")
    userRejects += lowercase
  }
 
  let numbers = "0123456789"
  let confirmNumbers = confirm("Do you want your password to have numbers?");

  if (confirmNumbers === true){
    alert("Your password will have numbers.")
    userConfirms += numbers
  }else if (confirmNumbers === false){
    alert("No one likes numbers anyways")
    userRejects += numbers
  }

  let characters = "!@#$%^&*"
  let confirmCharacters = confirm("Do you want your password to have special characters?");

  if (confirmCharacters === true){
    alert("Your password will have special characters.")
    userConfirms += characters 
  }else if (confirmCharacters === false){
    alert("WHAT!!! Now you have something against special characters too?")
    userRejects += characters
  }

  var newPassword = "";

  if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmCharacters) {
    return "Unable to generate password due to lack of valid criteria. Please try again.";
    //location.reload();
  } else {
    for (i = 0; i<passwordLength; i++) {
      const randNum = Math.floor(Math.random() * userConfirms.length)
      newPassword = newPassword + userConfirms[randNum]
    }

    return(newPassword)

  }

};




    
  