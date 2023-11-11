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
