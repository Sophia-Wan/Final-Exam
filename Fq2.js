const { toASCII } = require("punycode");
const { start } = require("repl");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest

Planning:
making a badge system with mode (new/easy/medium/hardest/apocalypse)
if users type add, ask users where they want to add the point into in addpoints
show status will show all points accumulated per category
Challenge 1:
start by doing a let totalPoints= 0
totalPoints += badge[point].length; to add all the things in badges together
if points < 10 "horrible"
points 10-20 "adventurer"
points 20-30 "slayer"
points 30-40 "divined"
points > 40 "eternal"
Challenge 2:
use badge[point] to call on the things inside badge to multiply
*/

let badge = {
  //modes go here
  new: [],
  easy: [],
  medium: [],
  hardest: [],
  apocalypse: []
};

//rename this to ShowStatus
function ShowStatus(){
  console.log('Here are all your badges:');
  console.log(badge);
  StartApp();
  //loop through the badge and log all the mode and all their corresponding points
}

//rename this to AddPoints
function AddPoints(){
  readline.question("Where would you like to add a point into? ", point => {
    if (point in badge) {
      readline.question(`To confirm adding to ${point}, Please type 1 `, reply =>
      {
        badge[point].push(reply);
        console.log(`A point has been added to ${point}`);
        StartApp();
      })
      
    }
})
  //Add the point to the correct mode by capturing the readline
}

function pointSummary(){
  let totalPoints = 0
  for (let point in badge) {
totalPoints += badge[point].length * point.length;
  }
  if (totalPoints < 10) {
    console.log("You suck");
  } else if (totalPoints >= 10 && totalPoints <= 20) {
    console.log("adventurer");
  } else if (totalPoints > 20 && totalPoints <= 30) {
    console.log("slayy"); 
  } else if (totalPoints > 30 && totalPoints <= 40) {
    console.log("divine");
  } else if (totalPoints > 40) {
    console.log("eternal");
  }
StartApp();
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "add") {
      AddPoints();
    } else if (_command === "status") {
   ShowStatus(); 
    } else if (_command === "summary") {
      pointSummary();
    }else{
      StartApp();
    }
  })
}

StartApp();