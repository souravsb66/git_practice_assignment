let string = "roger";


for(let index = 0, index2 = string.length-1 ; index <= index2; index++, index2--) {
    if(string[index] != string[index2]) {
        console.log("Not Palindrome");
    }
}

console.log("Palindrome");