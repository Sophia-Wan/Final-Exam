const { copyFileSync } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.

planning:
ask users which color they want to add, if its no red, green, blue, yellow or orange, dont allow them to add it.
ask users what color they want to toggle (all should be true for default) then let them toggle
make sure all colours are displayed after colours are added and toggle is done


*/

let userColors = [];
let theme = {
  red: true,
  green: true,
  blue: true,
  yellow: true,
  orange: true
  //the 5 color and their boolean value goes here
};

//rename this to AddUserColor
function AddUserColor(){
  readline.question("what colour would you like to add to the theme?", colour => {
    if(colour !== "red" && colour !== "green" && colour !== "blue" && colour !== "yellow" && colour !== "orange"){
      console.log("sorry you cant add this colour!");
    } else {
      console.log(`${colour} has been added to your theme colours!`);
      userColors.push(colour)
    }
    StartApp();
  })  //add a color to userColors
}

//rename this to DisplayUserColors
function DisplayUserColors(){
  console.log("Here are all the colours you have added:");
  console.log(userColors);
  StartApp();
  //add a color to userColors
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  readline.question(`What colour do you want to toggle?( ${userColors} ) `, toggle => {
      userColors[toggle] = !userColors[toggle]
      console.log(`${toggle} has been set to false`);
      userColors.shift(toggle)
    StartApp();
  })
}
  //ask for a color to toggle



function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "add") {
      AddUserColor();
    } else if (_command === "list") {
      DisplayUserColors();
    } else if (_command === "toggle") {
      ToggleThemeColor();
    } else{
      StartApp();
    }
  })
}

StartApp();