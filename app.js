// ========== Q No 1 ===========

// var userinp = prompt("Enter any Number :")
// document.write("The Entered value is"+ " " + userinp+ "<br>")
// document.write("The round value is"+ " " + Math.round(userinp) + "<br>")
// document.write("The round floor is"+ " " + Math.floor(userinp)+ "<br>")
// document.write("The round ciel is"+ " " + Math.ceil(userinp))


// ========== Q No 2 ===========

// var userinp = prompt("Enter any Negative Number :")
// document.write("The Entered value is"+ " " + userinp+ "<br>")
// document.write("The round value is"+ " " + Math.round(userinp) + "<br>")
// document.write("The round floor is"+ " " + Math.floor(userinp)+ "<br>")
// document.write("The round ciel is"+ " " + Math.ceil(userinp))

// ========== Q No 3 ===========

// var userinp = prompt("Enter any decimal Number :")
// document.write("The Entered value is"+ " " + userinp+ "<br>")
// document.write("The round value is"+ " " + Math.round(userinp) + "<br>")
// document.write("The round floor is"+ " " + Math.floor(userinp)+ "<br>")
// document.write("The round ciel is"+ " " + Math.ceil(userinp))

// ========== Q No 4 ===========

// var userinp = prompt("Enter any Negative decimal Number :")
// document.write("The Entered value is"+ " " + userinp+ "<br>")
// document.write("The round value is"+ " " + Math.round(userinp) + "<br>")
// document.write("The round floor is"+ " " + Math.floor(userinp)+ "<br>")
// document.write("The round ciel is"+ " " + Math.ceil(userinp))

// ========== Q No 5 ===========

// let num = prompt("enter number to find it's absolute : ")
// let absoluteValue = Math.abs(num)
// document.write(`The Absolute value of ${num} is ${absoluteValue}`) 

// ========== Q No 6 ===========


// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`
// <p>Random Dice Value: ${diceValue}</p>
// `);

// ========== Q No 7 ===========

// var randomValue = Math.floor(Math.random() * 2);

// var coinResult = (randomValue === 0) ? 'Head' : 'Tails';

// document.write(`
// <p>Random Coin Value: ${coinResult}</p>
// `);

// ========== Q No 8 ===========

// let randomValue = Math.floor(Math.random() * 100) + 1;

// document.write(`
// <p>Random Number Between 1 and 100: ${randomValue}</p>
// `);

// ========== Q No 9 ===========


// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// var numericValue = parseFloat(userInput.replace(/[^\d.]/g, ""));

// if (!isNaN(numericValue)) {
//   document.write("<p>Your weight is: " + numericValue + " kilograms</p>");
// } else {
//   document.write("<p>Invalid input.</p>");
// }

// ========== Q No 10 ===========

// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var inputNum = prompt("Please guess a number between 1 to 10: ");

// if (randomNumber == inputNum) {
//     alert("Congratulations, you have won")
// } else {
//     alert("Sorry, you lose.")
// }

// ========== Q No 11 ===========

// var currentDate = new Date();
// document.write("Current Date : " + " " + currentDate)

// ========== Q No 12 ===========

// var currentDate = new Date();

// var monthNames = [
//   "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ];

// var currentMonthNumber = currentDate.getMonth();

// var currentMonthName = monthNames[currentMonthNumber];

// alert("Current Month: " + currentMonthName);

// ========== Q No 13 ===========

// var currentDate = new Date();

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentDayNumber = currentDate.getDay();

// var currentDayName = dayNames[currentDayNumber];


// var currentDayAbbreviation = currentDayName.slice(0, 3);


// alert("Today is: " + currentDayAbbreviation);


// ************* Question : 14 *****************

// var currentDate = new Date();

// var currentDayNumber = currentDate.getDay();


// if (currentDayNumber === 6 || currentDayNumber === 0) {
//   alert("It's Fun day");
// } else {
//   alert("It's a regular day");
// }


// ************* Question : 15 *****************

// var currentDate = new Date();

// var currentDayOfMonth = currentDate.getDate();

// if (currentDayOfMonth < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }
