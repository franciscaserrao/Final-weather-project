function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.country;

  let descriptionElement = document.querySelector("#description");
  let description = response.data.condition.description;
  descriptionElement.innerHTML =
    description.charAt(0).toUpperCase() + description.slice(1);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  let image = response.data.condition.icon;
  let backgroundElement = document.querySelector("#background");
  let headerElement = document.querySelector("#header");
  let footerElement = document.querySelector("#footer");
  let formElement = document.querySelector("#search-form-input");
  let submitElement = document.querySelector("#search-city-button");
  let daysElement = document.querySelector("#days");
  let linkElement = document.querySelector("#link");
  let linkElement2 = document.querySelector("#link2");
  let linkElement3 = document.querySelector("#link3");

  if (image === "clear-sky-day") {
    iconElement.innerHTML =
      '<img src="image-day/clear-sky-day.png" alt="Clear Sky Day Image" id="sun">';
    backgroundElement.style.backgroundColor = `#eae4ca`;
    backgroundElement.style.color = `#1b1c1e`;
    formElement.style.backgroundColor = `#fcf5da`;
    submitElement.style.backgroundColor = `#fcf5da`;
    formElement.style.color = `#1b1c1e`;
    submitElement.style.color = `#1b1c1e`;
    daysElement.style.color = `#1b1c1e`;
    headerElement.style.borderColor = ` #dcd6bdeb`;
    footerElement.style.borderColor = ` #dcd6bdeb`;
    footerElement.style.color = `#757575`;
    linkElement.style.color = `#757575`;
    linkElement2.style.color = `#757575`;
    linkElement3.style.color = `#757575`;
  } else if (image === "clear-sky-night") {
    iconElement.innerHTML =
      '<img src="image-day/clear-sky-night.png" alt="Clear Sky Night Image" id="moon">';
    backgroundElement.style.backgroundColor = `#CEC9B2`;
    backgroundElement.style.color = `#1b1c1e`;
    formElement.style.backgroundColor = `#ddd7be`;
    submitElement.style.backgroundColor = `#ddd7be`;
    formElement.style.color = `#1b1c1e`;
    submitElement.style.color = `#1b1c1e`;
    daysElement.style.color = `#1b1c1e`;
    headerElement.style.borderColor = `ddd7be`;
    footerElement.style.borderColor = `ddd7be`;
    footerElement.style.color = `#757575`;
    linkElement.style.color = `#757575`;
    linkElement2.style.color = `#757575`;
    linkElement3.style.color = `#757575`;
  } else if (image === "few-clouds-day") {
    iconElement.innerHTML =
      '<img src="image-day/few-clouds-day.png" alt="Few Clouds Day Image" id="few-clouds-day">';
    backgroundElement.style.backgroundColor = `#eae4ca`;
    backgroundElement.style.color = `#1b1c1e`;
    formElement.style.backgroundColor = `#fcf5da`;
    submitElement.style.backgroundColor = `#fcf5da`;
    formElement.style.color = `#1b1c1e`;
    submitElement.style.color = `#1b1c1e`;
    daysElement.style.color = `#1b1c1e`;
    headerElement.style.borderColor = ` #dcd6bdeb`;
    footerElement.style.borderColor = ` #dcd6bdeb`;
    footerElement.style.color = `#757575`;
    linkElement.style.color = `#757575`;
    linkElement2.style.color = `#757575`;
    linkElement3.style.color = `#757575`;
  } else if (image === "few-clouds-night") {
    iconElement.innerHTML =
      '<img src="image-day/few-clouds-night.png" alt="Few Clouds Night Image" id="few-clouds-night">';
    backgroundElement.style.backgroundColor = `#CEC9B2`;
    backgroundElement.style.color = `#1b1c1e`;
    formElement.style.backgroundColor = `#ddd7be`;
    submitElement.style.backgroundColor = `#ddd7be`;
    formElement.style.color = `#1b1c1e`;
    submitElement.style.color = `#1b1c1e`;
    daysElement.style.color = `#1b1c1e`;
    headerElement.style.borderColor = `#ddd7be`;
    footerElement.style.borderColor = `#ddd7be`;
    footerElement.style.color = `#757575`;
    linkElement.style.color = `#757575`;
    linkElement2.style.color = `#757575`;
    linkElement3.style.color = `#757575`;
  } else if (image === "scattered-clouds-day") {
    iconElement.innerHTML =
      '<img src="image-day/scattered-clouds-day.png" alt="Scattered Clouds Day Image" id="scattered-clouds-day">';

    backgroundElement.style.backgroundColor = `#D4D9D3`;
    backgroundElement.style.color = `#233948`;
    formElement.style.backgroundColor = `#E3E8E1`;
    submitElement.style.backgroundColor = `#E3E8E1`;
    formElement.style.color = `#233948`;
    submitElement.style.color = `#233948`;
    daysElement.style.color = `#233948`;
    headerElement.style.borderColor = `#E3E8E1`;
    footerElement.style.borderColor = `#E3E8E1`;
    footerElement.style.color = `#233948`;
    linkElement.style.color = `#233948`;
    linkElement2.style.color = `#233948`;
    linkElement3.style.color = `#233948`;
  } else if (image === "scattered-clouds-night") {
    iconElement.innerHTML =
      '<img src="image-day/scattered-clouds-night.png" alt="Scattered Clouds Night Image" id="scattered-clouds-night">';
    backgroundElement.style.backgroundColor = `#B3B7B2`;
    backgroundElement.style.color = `#233948`;
    formElement.style.backgroundColor = `#C4C9C3`;
    submitElement.style.backgroundColor = `#C4C9C3`;
    formElement.style.color = `#233948`;
    submitElement.style.color = `#233948`;
    daysElement.style.color = `#233948`;
    headerElement.style.borderColor = `#C4C9C3`;
    footerElement.style.borderColor = `#C4C9C3`;
    footerElement.style.color = `#233948`;
    linkElement.style.color = `#233948`;
    linkElement2.style.color = `#233948`;
    linkElement3.style.color = `#233948`;
  } else if (image === "broken-clouds-day") {
    iconElement.innerHTML =
      '<img src="image-day/broken-clouds-day.png" alt="Broken Clouds Day Image" id="broken-clouds-day">';

    backgroundElement.style.backgroundColor = `#D4D9D3`;
    backgroundElement.style.color = `#233948`;
    formElement.style.backgroundColor = `#E3E8E1`;
    submitElement.style.backgroundColor = `#E3E8E1`;
    formElement.style.color = `#233948`;
    submitElement.style.color = `#233948`;
    daysElement.style.color = `#233948`;
    headerElement.style.borderColor = `#E3E8E1`;
    footerElement.style.borderColor = `#E3E8E1`;
    footerElement.style.color = `#233948`;
    linkElement.style.color = `#233948`;
    linkElement2.style.color = `#233948`;
    linkElement3.style.color = `#233948`;
  } else if (image === "broken-clouds-night") {
    iconElement.innerHTML =
      '<img src="image-day/broken-clouds-night.png" alt="Broken Clouds Night Image" id="broken-clouds-night">';
    backgroundElement.style.backgroundColor = `#B3B7B2`;
    backgroundElement.style.color = `#233948`;
    formElement.style.backgroundColor = `#C4C9C3`;
    submitElement.style.backgroundColor = `#C4C9C3`;
    formElement.style.color = `#233948`;
    submitElement.style.color = `#233948`;
    daysElement.style.color = `#233948`;
    headerElement.style.borderColor = `#C4C9C3`;
    footerElement.style.borderColor = `#C4C9C3`;
    footerElement.style.color = `#233948`;
    linkElement.style.color = `#233948`;
    linkElement2.style.color = `#233948`;
    linkElement3.style.color = `#233948`;
  } else if (image === "shower-rain-day" || image === "rain-day") {
    iconElement.innerHTML =
      '<img src="image-day/rain-day.png" alt="Rain Day Image" id="rain-day">';
    backgroundElement.style.backgroundColor = `#45718C`;
    backgroundElement.style.color = `#FEEEE1`;
    formElement.style.backgroundColor = `#5287A8`;
    submitElement.style.backgroundColor = `#5287A8`;
    formElement.style.color = `#FEEEE1`;
    submitElement.style.color = `#FEEEE1`;
    daysElement.style.color = `#FEEEE1`;
    headerElement.style.borderColor = `#5287A8`;
    footerElement.style.borderColor = `#5287A8`;
    footerElement.style.color = `#FEEEE1`;
    linkElement.style.color = `#FEEEE1`;
    linkElement2.style.color = `#FEEEE1`;
    linkElement3.style.color = `#FEEEE1`;
  } else if (image === "shower-rain-night" || image === "rain-night") {
    iconElement.innerHTML =
      '<img src="image-day/rain-night.png" alt="Rain Night Image" id="rain-night">';
    backgroundElement.style.backgroundColor = `#233947`;
    backgroundElement.style.color = `#FEEEE1`;
    formElement.style.backgroundColor = `#2C4856`;
    submitElement.style.backgroundColor = `#2C4856`;
    formElement.style.color = `#FEEEE1`;
    submitElement.style.color = `#FEEEE1`;
    daysElement.style.color = `#FEEEE1`;
    headerElement.style.borderColor = `#2C4856`;
    footerElement.style.borderColor = `#2C4856`;
    footerElement.style.color = `#FEEEE1`;
    linkElement.style.color = `#FEEEE1`;
    linkElement2.style.color = `#FEEEE1`;
    linkElement3.style.color = `#FEEEE1`;
  } else if (image === "thunderstorm-day") {
    iconElement.innerHTML =
      '<img src="image-day/thunderstorm-day-night.png" alt="Thunderstorm Image" id="thunderstorm-day">';
    backgroundElement.style.backgroundColor = `#45464A`;
    backgroundElement.style.color = `#EAE4CA`;
    formElement.style.backgroundColor = `#606166`;
    submitElement.style.backgroundColor = `#606166`;
    formElement.style.color = `##EAE4CA`;
    submitElement.style.color = `#EAE4CA`;
    daysElement.style.color = `#EAE4CA`;
    headerElement.style.borderColor = `#606166`;
    footerElement.style.borderColor = `#606166`;
    footerElement.style.color = `#EAE4CA`;
    linkElement.style.color = `#EAE4CA`;
    linkElement2.style.color = `#EAE4CA`;
    linkElement3.style.color = `#EAE4CA`;
  } else if (image === "thunderstorm-night") {
    iconElement.innerHTML =
      '<img src="image-day/thunderstorm-day-night.png" alt="Thunderstorm Image" id="thunderstorm-night">';
    backgroundElement.style.backgroundColor = `#292A2C`;
    backgroundElement.style.color = `#EAE4CA`;
    formElement.style.backgroundColor = `#45464A`;
    submitElement.style.backgroundColor = `#45464A`;
    formElement.style.color = `##EAE4CA`;
    submitElement.style.color = `#EAE4CA`;
    daysElement.style.color = `#EAE4CA`;
    headerElement.style.borderColor = `#45464A`;
    footerElement.style.borderColor = `#45464A`;
    footerElement.style.color = `#EAE4CA`;
    linkElement.style.color = `#EAE4CA`;
    linkElement2.style.color = `#EAE4CA`;
    linkElement3.style.color = `#EAE4CA`;
  } else if (image === "snow-day") {
    iconElement.innerHTML =
      '<img src="image-day/snow-day-night.png" alt="Snow Image" id="snow-day">';
    backgroundElement.style.backgroundColor = `#8FAFC6`;
    backgroundElement.style.color = `#FEEDE0`;
    formElement.style.backgroundColor = `#9BBED2`;
    submitElement.style.backgroundColor = `#9BBED2`;
    formElement.style.color = `#FEEDE0`;
    submitElement.style.color = `#FEEDE0`;
    daysElement.style.color = `#FEEDE0`;
    headerElement.style.borderColor = `#9BBED2`;
    footerElement.style.borderColor = `#9BBED2`;
    footerElement.style.color = `#FEEDE0`;
    linkElement.style.color = `#FEEDE0`;
    linkElement2.style.color = `#FEEDE0`;
    linkElement3.style.color = `#FEEDE0`;
  } else if (image === "snow-night") {
    iconElement.innerHTML =
      '<img src="image-day/snow-day-night.png" alt="Snow Image" id="snow-night">';
    backgroundElement.style.backgroundColor = `#233947`;
    backgroundElement.style.color = `#FEEDE0`;
    formElement.style.backgroundColor = `#2C4856`;
    submitElement.style.backgroundColor = `#2C4856`;
    formElement.style.color = `#FEEDE0`;
    submitElement.style.color = `#FEEDE0`;
    daysElement.style.color = `#FEEDE0`;
    headerElement.style.borderColor = `#2C4856`;
    footerElement.style.borderColor = `#2C4856`;
    footerElement.style.color = `#FEEDE0`;
    linkElement.style.color = `#FEEDE0`;
    linkElement2.style.color = `#FEEDE0`;
    linkElement3.style.color = `#FEEDE0`;
  } else if (image === "mist-day") {
    iconElement.innerHTML =
      '<img src="image-day/mist-day-night.png" alt="Mist Image" id="mist-day">';
    backgroundElement.style.backgroundColor = `#9A585A`;
    backgroundElement.style.color = `#D4D9D4`;
    formElement.style.backgroundColor = `#AA6367`;
    submitElement.style.backgroundColor = `#AA6367`;
    formElement.style.color = `#D4D9D4`;
    submitElement.style.color = `#D4D9D4`;
    daysElement.style.color = `#D4D9D4`;
    headerElement.style.borderColor = `#AA6367`;
    footerElement.style.borderColor = `#AA6367`;
    footerElement.style.color = `#D4D9D4`;
    linkElement.style.color = `#D4D9D4`;
    linkElement2.style.color = `#D4D9D4`;
    linkElement3.style.color = `#D4D9D4`;
  } else if (image === "mist-night") {
    iconElement.innerHTML =
      '<img src="image-day/mist-day-night.png" alt="Mist Image" id="mist-night">';
    backgroundElement.style.backgroundColor = `#764344`;
    backgroundElement.style.color = `#D4D9D4`;
    formElement.style.backgroundColor = `#8a4f4f`;
    submitElement.style.backgroundColor = `#8A4F4F`;
    formElement.style.color = `#D4D9D4`;
    submitElement.style.color = `#D4D9D4`;
    daysElement.style.color = `#D4D9D4`;
    headerElement.style.borderColor = `#8A4F4F`;
    footerElement.style.borderColor = `#8A4F4F`;
    footerElement.style.color = `#D4D9D4`;
    linkElement.style.color = `#D4D9D4`;
    linkElement2.style.color = `#D4D9D4`;
    linkElement3.style.color = `#D4D9D4`;
  }
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let dateMonth = date.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day}, ${dateMonth} ${month}, ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "9tf8b32027ebcbc4fod15cda0efbf2e3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");
