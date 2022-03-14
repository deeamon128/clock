const convertNumberToWord = require('./convertNumberToWord')

const getBritishFriendlyTime = date => {
	const currentHour = date.getHours();
	const nextHour = currentHour + 1;
	const minutes = date.getMinutes();

	if (minutes === 0) {
		return `${convertNumberToWord(currentHour)} o' Clock`;
	}
	 if (minutes === 15) {
		return `${minutes} past ${currentHour}`;
	}
	if (minutes === 30) {
		return `half past ${currentHour}`;
	}
	if (minutes === 45) {
		return `Quarter to ${nextHour}`;
	}
	if (minutes < 30) {
		return `${minutes} past ${currentHour}`;
	}

	return `${60 - minutes} to ${nextHour}`;
};

module.exports=  getBritishFriendlyTime;