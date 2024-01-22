
const checkButton = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input");
const result = document.querySelector("#result");
const regex = /^[A-Za-z0-9]+$/;

function isPalindrome(text){
    let word = "";
    let reverseWord;
    let reverseWordArray = [];
    for (let i = 0; i < text.length; i++){
        if (text[i].match(regex)){
            word += text[i];
            reverseWordArray.unshift(text[i]);
        } 
    }
    reverseWord = reverseWordArray.join("");

    if (reverseWord.toLowerCase() === word.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

function checkValue(){
    let inputValue = inputText.value;
    if (inputValue.length < 1){
        alert("Please input a value");
    } else if (isPalindrome(inputValue)) {
        return result.innerText = inputValue + " is a palindrome";
    } else {
        return result.innerText = inputValue + " is not a palindrome";
    }
} 
