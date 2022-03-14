const convertUserInputToDateTime = (userInput) => {
  const date = new Date();
  if (!userInput) {
    return date;
  }
  const hoursFromdate = userInput.split(":")[0];
  let hours = Number(hoursFromdate);
  if (hours === 0 && ["0", "00"].includes(hoursFromdate)) {
    //it's midnight
    hours = 0;
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
