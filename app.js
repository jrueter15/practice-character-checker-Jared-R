const readline = require('readline-sync'); // Import the readline-sync module

let userName = readline.question("What is your name? "); 
// Ask the user their name, next line to test
// console.log("Hello " + userName + ", welcome!");

console.log("Your first initial is: " + userName[0] + "! Give me a character location, and I will tell you the character"); 
// Output the first letter of the user's name and ask for an index location

let letterLocation = readline.question("What is the location of the character you want to know? "); 
letterLocation = Number(letterLocation);
// Turn the user's response into a number

if (letterLocation < 0){
  console.log("That is not a valid index location.");
}
else if (isNaN(letterLocation)){
    console.log("That is not a valid index location.");
    }
else if (letterLocation > userName.length - 1){
    console.log("Your name is not that long!");
    }
    else{
        console.log("The letter at index location " + letterLocation + " is: " + userName[letterLocation]);
    }

