// RANDOM PASSWORD GENERATOR

function generatePasswords(passwordLength,includeLowerCase,includeNumbers,includeSymbols,includeUpperCase){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allowedChars = "";
    let password = ""
    allowedChars += includeLowerCase?lowercaseChars:"";
    allowedChars+= includeUpperCase?uppercaseChars:"";
    allowedChars+=includeNumbers?numberChars:"";
    allowedChars+=includeSymbols?symbolChars: "";

    if (passwordLength <=0){
        return `password length must be atleast 1`;
    }
    if(allowedChars.length===0){
        return `At least 1 set of charcter needs to be selected`
    }

    for(let i=0;i<passwordLength;i++){

        const randomIndex= Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
        
    }
    console.log(allowedChars);
    return password;
}
const passwordLength = 12;
const includeLowerCase = false;
const includeUpperCase =true;
const includeNumbers = false;
const includeSymbols=true;

const password= generatePasswords(passwordLength,includeLowerCase,includeNumbers,includeSymbols, includeUpperCase)

console.log(`Generated password ; ${password}`)