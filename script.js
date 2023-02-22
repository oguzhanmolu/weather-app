'strict mode';
// Variables
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.querySelector('.icon-search');
const weatherCondition = document.getElementById('weather-condition');
const locationInfo = document.getElementById('location-info');
const temperatureInfo = document.getElementById('temperature-info');
const iconWeatherCondition = document.getElementById('icon-weather-condition');
const feelsLikeInfo = document.getElementById('feels-like-info');
const humidityInfo = document.getElementById('humidity-info');
const windInfo = document.getElementById('wind-info');

// Get weather data from API,
// then create&display a new object with
async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=f4507264ae2d4096a6d124819231902 &q=${location}`,
    { mode: 'cors' }
  );
  if (response.status == 400 || !location) return alert('Location not found');

  const data = processWeatherData(await response.json());
  return displayWeatherData(data);
}

// Create a new object with the input location
function processWeatherData(object) {
  const weatherObject = {
    condition: object.current.condition.text,
    iconSrc: object.current.condition.icon,
    cityName: object.location.name,
    countryName: object.location.country,
    temperature: object.current.temp_c,
    feelsLike: object.current.feelslike_c,
    humidity: object.current.humidity,
    windSpeed: object.current.wind_kph,
  };
  return weatherObject;
}

// Display the processed data in HTML
function displayWeatherData(object) {
  iconWeatherCondition.src = object.iconSrc;
  weatherCondition.textContent = object.condition;
  locationInfo.textContent = `${object.cityName}, ${object.countryName}`;
  temperatureInfo.textContent = object.temperature;
  feelsLikeInfo.textContent = `Feels Like: ${object.feelsLike}°C`;
  humidityInfo.textContent = `Humidity: ${object.humidity}%`;
  windInfo.textContent = `Wind Speed: ${object.windSpeed} km/h`;
  inputSearch.value = '';
}

// Searchbar event listener
buttonSearch.addEventListener('click', () => {
  e.preventDefault();
  getWeatherData(inputSearch.value);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') getWeatherData(inputSearch.value);
});

// Placeholder display
getWeatherData('istanbul');
