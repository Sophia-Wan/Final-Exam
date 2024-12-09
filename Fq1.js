const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."

PLanning:
make a boolean in settings if alcohol = true; only 19+ should drink 
if they are under 19 they should be kicked
is setting = false console.log("Everyone can drink"); 
Challenge 1:
in settings add age, set it to 19, let a command be change age and let users change the age
Challenge 2: 
create VIP settings, vip= false, if users type "make Vip" let Vip be toggled on
to turn vip false user must type cancel VIP notify function will only work for VIP if not VIP console.log("sorry the store isnt availible today")
*/

let registry = [];
let settings = {
  alcohol: false,
  age: 19
  //alcohol setting goes here
};
let special = {
  VIP: false
}

//rename this to RegisterUser
function RegisterUser(){
  if (settings.alcohol === true) {
  readline.question("What is your age?", age => {
if(age >= 19) {
  console.log("You are allowed to drink here");
} else if (age < 19) {
  console.log("Sorry, Youre not of age!");
} 
StartApp();
  }) 
} else {
    console.log("Everyone is welcome!");
  }
  StartApp();
//ask for the age with readline
}

//rename this to ToggleAlcohol
function ToggleAlcohol(){
  settings.alcohol = !settings.alcohol;
  StartApp();
  //toggle alcohol setting
}

//rename this to NotifyAll
function NotifyAll(){
  if(special.VIP === true) {
    console.log("welcome VIP, you have been notfied of a new event");
  } else if(special.VIP === false) {
    console.log("Sorry the store isnt open today");
  }
  StartApp();
  //go through the array to notify everyone
}

function Guests() {
readline.question("Would you like to become VIP:", answer => {  
  if (answer === "make VIP") {
    special.VIP === true
    console.log("VIP has been turned on");
   } 
else if (answer === "cancel VIP") {
  special.VIP === false
  console.log("VIP has been turned off");
}
StartApp();
})
}
function changeAge(){
  readline.question("What is your age you would like to change to?", newage => {
    if (newage >= 19) {
      console.log(`you have now set your age to ${newage}`)
    } else if(newage < 19) {
      console.log(`you're still ${newage}, thats too young!`)
    }
    StartApp();
  })
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "age"){
      RegisterUser();
    } else if(_command === "toggle") {
      ToggleAlcohol();
    } else if(_command === "VIP") {
      Guests();
    } else if (_command === "notify") {
      NotifyAll();
    } else if (_command === "change age") {
      changeAge();
    }
       else{
      StartApp();
    }
  })
}

StartApp();