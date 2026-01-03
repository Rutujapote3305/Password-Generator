function generatepassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*?/~*";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`
    }

    if(allowedChars.length === 0){
        return `(at least 1 set of characters needs to be selected)`;
    }
    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random()* allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}


function generate(){
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = true;


let  password = generatepassword(passwordLength, includeLowercase, 
                                 includeUppercase, includeNumber, 
                                 includeSymbol) ;

let result = document.getElementById("result");

result.textContent = password; }



/* we created two function generate() and generatepassword()
generatepassword() has all the necessary code and it contains parameters 
generate() doesn't contain any parameter and is used in html file to call
the function when clicked on the button it contains generatepassword()
function call and variable declaration 

we can use generatepassword() in html bcuz it contains parameters and in 
the html file we cannot call the function with parameter becuz all the
elements are undefined in the html file */





