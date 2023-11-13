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
  if (description === "clear sky") {
    iconElement.innerHTML = "<i class='fa-solid fa-circle'></i>";
  } else if (
    description === "few clouds" ||
    description === "scattered clouds"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud-sun'></i>";
  } else if (
    description === "broken clouds" ||
    description === "overcast clouds"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud'></i>";
  } else if (
    description === "mist" ||
    description === "haze" ||
    description === "fog"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-smog'></i>";
  } else if (
    description === "rain" ||
    description === "light rain" ||
    description === "moderate rain" ||
    description === "heavy rain" ||
    description === "shower rain"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
  } else if (
    description === "thunderstorm" ||
    description === "thunderstorm with light rain"
  ) {
    iconElement.innerHTML = "<i class='fa-solid fa-cloud-bolt'></i>";
  } else if (description === "snow") {
    iconElement.innerHTML = "<i class='fa-regular fa-snowflake'></i>";
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
