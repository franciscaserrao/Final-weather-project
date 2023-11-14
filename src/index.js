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
  let backgroundElement = document.querySelector("#background");
  let headerElement = document.querySelector("#header");
  let footerElement = document.querySelector("#footer");
  let formElement = document.querySelector("#search-form-input");
  let submitElement = document.querySelector("#search-city-button");
  let daysElement = document.querySelector("#days");
  let linkElement = document.querySelector("#link");
  let linkElement2 = document.querySelector("#link2");
  let linkElement3 = document.querySelector("#link3");

  if (description === "clear sky") {
    iconElement.innerHTML = "<i class='fa-solid fa-circle'></i>";
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
  } else if (
    description === "few clouds" ||
    description === "scattered clouds"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud-sun'></i>";
    backgroundElement.style.backgroundColor = `#D4D9D2`;
    backgroundElement.style.color = `#233847`;
    formElement.style.backgroundColor = `#f1f5ef`;
    submitElement.style.backgroundColor = `#f1f5ef`;
    formElement.style.color = `#233847`;
    submitElement.style.color = `#233847`;
    daysElement.style.color = `#233847`;
    headerElement.style.borderColor = `#f1f5ef`;
    footerElement.style.borderColor = `#f1f5ef`;
    footerElement.style.color = `#233847`;
  } else if (
    description === "broken clouds" ||
    description === "overcast clouds"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud'></i>";
    backgroundElement.style.backgroundColor = `#D4D9D2`;
    backgroundElement.style.color = `#233847`;
    formElement.style.backgroundColor = `#f1f5ef`;
    submitElement.style.backgroundColor = `#f1f5ef`;
    formElement.style.color = `#233847`;
    submitElement.style.color = `#233847`;
    daysElement.style.color = `#233847`;
    headerElement.style.borderColor = `#f1f5ef`;
    footerElement.style.borderColor = `#f1f5ef`;
    footerElement.style.color = `#233847`;
  } else if (
    description === "mist" ||
    description === "haze" ||
    description === "fog"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-smog'></i>";
    backgroundElement.style.backgroundColor = `#9A5859`;
    backgroundElement.style.color = `#D4D9D2`;
    formElement.style.backgroundColor = `#AA6266`;
    submitElement.style.backgroundColor = `#AA6266`;
    formElement.style.color = `#D4D9D2`;
    submitElement.style.color = `#D4D9D2`;
    daysElement.style.color = `#D4D9D2`;
    headerElement.style.borderColor = `#AA6266`;
    footerElement.style.borderColor = `#AA6266`;
    footerElement.style.color = `#D4D9D2`;
  } else if (
    description === "rain" ||
    description === "light rain" ||
    description === "moderate rain" ||
    description === "heavy rain" ||
    description === "shower rain"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
    backgroundElement.style.backgroundColor = `#233847`;
    backgroundElement.style.color = `#FDEEE1`;
    formElement.style.backgroundColor = `#2C4856`;
    submitElement.style.backgroundColor = `#2C4856`;
    formElement.style.color = `#FDEEE1`;
    submitElement.style.color = `#FDEEE1`;
    daysElement.style.color = `#FDEEE1`;
    headerElement.style.borderColor = `#2C4856`;
    footerElement.style.borderColor = `#2C4856`;
    footerElement.style.color = `#FDEEE1`;
    linkElement.style.color = `#FDEEE1`;
    linkElement2.style.color = `#FDEEE1`;
    linkElement3.style.color = `#FDEEE1`;
  } else if (
    description === "thunderstorm" ||
    description === "thunderstorm with light rain"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud-bolt'></i>";
    backgroundElement.style.backgroundColor = `#1B1C1E`;
    backgroundElement.style.color = `#EAE5CA`;
    formElement.style.backgroundColor = `#292A2C`;
    submitElement.style.backgroundColor = `#292A2C`;
    formElement.style.color = `#EAE5CA`;
    submitElement.style.color = `#EAE5CA`;
    daysElement.style.color = `#EAE5CA`;
    headerElement.style.borderColor = `#292A2C`;
    footerElement.style.borderColor = `#292A2C`;
    footerElement.style.color = `#EAE5CA`;
    linkElement.style.color = `#EAE5CA`;
    linkElement2.style.color = `#EAE5CA`;
    linkElement3.style.color = `#EAE5CA`;
  } else if (description === "snow" || description === "light snow") {
    iconElement.innerHTML = "<i class='fa-regular fa-snowflake'></i>";
    backgroundElement.style.backgroundColor = `#8EAFC6`;
    backgroundElement.style.color = `#233847`;
    formElement.style.backgroundColor = `#9BBED2`;
    submitElement.style.backgroundColor = `#9BBED2`;
    formElement.style.color = `#233847`;
    submitElement.style.color = `#233847`;
    daysElement.style.color = `#233847`;
    headerElement.style.borderColor = `#9BBED2`;
    footerElement.style.borderColor = `#9BBED2`;
    footerElement.style.color = `#233847`;
    linkElement.style.color = `#233847`;
    linkElement2.style.color = `#233847`;
    linkElement3.style.color = `#233847`;
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
