const convertNumberToWord = require("./convertNumberToWord");

const getBritishFriendlyTime = (date) => {
  let currentHour = date.getHours();
  let nextHour = currentHour + 1;
  const minutes = date.getMinutes();
  const d = new Date();
  d.setHours(0);
  d.setMinutes(0);
  const diffFromMidnightToHour = date.getTime() - d.getTime();
  console.log(nextHour);
  console.log(d);
  console.log(date);
  console.log(currentHour);

  if (currentHour === 0) {
    if (diffFromMidnightToHour > 12 * 60 * 60 * 1000) {
      currentHour = "Midnight";
    } else {
      currentHour = convertNumberToWord(currentHour);
    }
  } else if (currentHour > 12) {
    currentHour -= 12;
    currentHour = convertNumberToWord(currentHour);
  }

  if (nextHour === 24) {
    nextHour = "Midnight";
  } else {
    nextHour = convertNumberToWord(nextHour);
  }

  if (minutes === 0) {
    return `${convertNumberToWord(currentHour)} o' clock`;
  }
  if (minutes === 15) {
    return `${convertNumberToWord(minutes)} past ${currentHour}`;
  }
  if (minutes === 30) {
    return `half past ${currentHour}`;
  }
  if (minutes === 45) {
    return `quarter to ${nextHour}`;
  }
  if (minutes < 30) {
    return `${convertNumberToWord(minutes)} past ${currentHour}`;
  }

  return `${convertNumberToWord(60 - minutes)} to ${nextHour}`;
};

module.exports = getBritishFriendlyTime;
