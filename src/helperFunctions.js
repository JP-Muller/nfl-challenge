import React from "react";

export const getWeatherIcon = weatherDescription => {
  if (weatherDescription === null) {
    return <i className="far fa-sad-tear" title="Unknown" />;
  } else if (weatherDescription.toLowerCase() === "clear sky") {
    return <i className="far fa-sun" title="Clear Skies" />;
  } else if (weatherDescription.toLowerCase() === "few clouds") {
    return <i className="fas fa-cloud-sun" title="Few Clouds" />;
  } else if (weatherDescription.toLowerCase() === "scattered clouds") {
    return <i className="fas fa-cloud" title="Scattered Clouds" />;
  } else if (weatherDescription.toLowerCase() === "broken clouds") {
    return <i className="fas fa-cloud" title="Broken Clouds" />;
  } else if (weatherDescription.toLowerCase() === "overcast clouds") {
    return <i className="fas fa-cloud" title="Overcast Clouds" />;
  } else if (weatherDescription.toLowerCase() === "shower rain") {
    return <i className="fas fa-cloud-showers-heavy" title="Shower Rain" />;
  } else if (weatherDescription.toLowerCase() === "heavy intensity rain") {
    return <i className="fas fa-cloud-showers-heavy" title="High Intensity Rain" />;
  } else if (weatherDescription.toLowerCase() === "rain") {
    return <i className="fas fa-cloud-rain" title="Rain" />;
  } else if (weatherDescription.toLowerCase() === "light rain") {
    return <i className="fas fa-cloud-rain" title="Light Rain" />;
  } else if (weatherDescription.toLowerCase() === "moderate rain") {
    return <i className="fas fa-cloud-rain" title="Moderate Rain" />;
  } else if (weatherDescription.toLowerCase() === "thunderstorm") {
    return <i className="fas fa-poo-storm" title="Thunderstorm" />;
  } else if (weatherDescription.toLowerCase() === "snow") {
    return <i className="far fa-snowflake" title="Snow" />;
  } else if (weatherDescription.toLowerCase() === "light snow") {
    return <i className="far fa-snowflake" title="Light Snow" />;
  } else if (weatherDescription.toLowerCase() === "mist") {
    return <i className="fas fa-smog" title="Misty" />;
  } else if (weatherDescription.toLowerCase() === "haze") {
    return <i className="fas fa-smog" title="Hazy" />;
  } else if (weatherDescription.toLowerCase() === "smoke") {
    return <i className="fas fa-smog" />;
  } else {
    return <i className="far fa-sad-tear" title="Unknown" />;
  }
};

export const getStandardTime = givenDateTime => {
  let standardTime;
  let timeArray = new Date(givenDateTime)
    .toString()
    .split(" ")[4]
    .split(":");
  if (timeArray[0] >= "13") {
    standardTime = `${parseInt(timeArray[0]) - 12}:${timeArray[1]} PM`;
  } else if (timeArray[0] >= "12") {
    standardTime = `${timeArray[0]}:${timeArray[1]} PM`;
  } else if (timeArray[0] < "12" && timeArray[0] >= "10") {
    standardTime = `${timeArray[0]}:${timeArray[1]} AM`;
  } else if (timeArray[0] === "00") {
    standardTime = `12:${timeArray[1]} AM`;
  } else if (timeArray[0].startsWith("0")) {
    standardTime = `${timeArray[0].split("")[1]}:${timeArray[1]} AM`;
  }
  return standardTime;
};

export const getGameDays = gameData => {
  let gameDays = gameData.map(game => {
    return new Date(game.DateTime).toString().split(" ")[0];
  });
  return [...new Set(gameDays)];
};
