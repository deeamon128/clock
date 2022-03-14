const convertUserInputToDateTime = (userInput) => {
  const date = new Date();
  let hours = Number(userInput.split(":")[0]);
  if (hours === 0 && !userInput.split(":")[0].includes("0")) {
    //midday
    hours = 12;
  }

  const minutes = Number(userInput.split(":")[1]);

  if (!isNaN(hours) && hours < 25) {
    date.setHours(hours);
  }

  if (!isNaN(minutes) && minutes < 60) {
    date.setMinutes(minutes);
  }

  return date;
};
module.exports = convertUserInputToDateTime;
