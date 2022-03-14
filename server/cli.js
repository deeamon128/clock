const readline = require('readline');
const getBritishFriendlyTime = require('./utils/getBritishFriendlyTime');
const convertUserInputToDateTime = require('./utils/convertUserInputToDateTime');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});


const askInput = () =>
	rl.question('Input a time in the format hh:mm or press enter to see the current time ', handleUserInput);


function handleUserInput  (userInput) {
	const dateFromUserInput = convertUserInputToDateTime(userInput);
	const friendlyTime = getBritishFriendlyTime(dateFromUserInput);
	console.log(friendlyTime);
	askInput();
};


askInput();