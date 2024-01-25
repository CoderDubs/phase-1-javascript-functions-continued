/*
Functions can be passed arguments, given default arguments, etc. Here's a brief code synopsis:

function razzle(lawyer = "Billy", target = "'em") {
  console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle(); //=> Billy razzle-dazzles 'em!
razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!

LAB: Implement a function called saturdayFun. It should return a 
String like "This Saturday, I want to ....!"
Fill in the ... with the activity that's passed in as the first parameter. 
If nothing is passed in, default to "roller-skate". 

Run npm test to verify you've gotten the first set of tests passing 
***before continuing with the lesson***.

*/

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let resultSaturday = saturdayFun();
console.log(resultSaturday);

function mondayWork(defString = 'go to the office') {
    return `This Monday, I will ${defString}.`;
}

let resultMonday = mondayWork();
console.log(resultMonday);

function wrapAdjective(highlight = '*') {
    // Return a function that wraps the adjective in the specified highlight
    return function (adjective) {
        return `You are ${highlight}${adjective}${highlight}!`;
    };
}