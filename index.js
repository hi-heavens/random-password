const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generateEl = document.getElementById("generate");
let passwordOneEl = document.getElementById("passwordOne");
let passwordTwoEl = document.getElementById("passwordTwo");
let passwordLengthEl = document.getElementById("password-length-el");
let hiddenEl = document.getElementById("hidden");

function generatePassword() {
    passwordOneEl.textContent = randomPassword();
    passwordTwoEl.textContent = randomPassword();
    removeProperty()
}

function randomPassword() {
    let password = "";
    let passwordLength = parseInt(passwordLengthEl.value) || 15;
    console.log(passwordLength);
    
    for (let i = 0; i < passwordLength; i++)
    {
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }
    return password;
}

function removeProperty() {
    hiddenEl.style.setProperty("display", "block");
}

// This will enable the copy on click on the password buttons!
function copyOne() {
    navigator.clipboard.writeText(passwordOneEl.textContent);
}

function copyTwo() {
    navigator.clipboard.writeText(passwordTwoEl.textContent);
}