const convertUserInputToDateTime = userInput => {
	const date = new Date();
	const hours = Number(userInput.split(':')[0]);

   const minutes = Number(userInput.split(':')[ 1 ]);
   
   
	if (!isNaN(hours) && hours < 25) {
		date.setHours(hours);
	}

	if (!isNaN(minutes) && minutes < 60) {
		date.setMinutes(minutes);
	}

	return date;
};
module.exports = convertUserInputToDateTime;