let arr = [];
('strict mode');
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.querySelector('.icon-search');
const weatherCondition = document.getElementById('weather-condition');
const locationInfo = document.getElementById('location-info');
const temperatureInfo = document.getElementById('temperature-info');
const groupWeatherCondition = document.getElementById(
  'group-weather-condition'
);
const iconWeatherCondition = document.getElementById('icon-weather-condition');

// Get weather data from API,
// then process the data with "processWeatherData" function
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f4507264ae2d4096a6d124819231902 &q=${location}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    displayWeatherData(processWeatherData(weatherData));
  } catch {
    alert('City not found');
  }
}

// Process the data, create a new object with the input data(city name)
function processWeatherData(object) {
  const weatherObject = {
    condition: object.current.condition.text,
    conditionSrc: object.current.condition.icon,
    cityName: object.location.name,
    countryName: object.location.country,
    temperature: object.current.temp_c,
  };
  return weatherObject;
}

// Display the data in text content
function displayWeatherData(object) {
  iconWeatherCondition.src = object.conditionSrc;
  weatherCondition.textContent = object.condition;
  locationInfo.textContent = `${object.cityName}, ${object.countryName}`;
  temperatureInfo.textContent = object.temperature;
  groupWeatherCondition.style.display = 'flex';
  groupWeatherCondition.style.alignItems = 'center';
  inputSearch.textContent = '';
}

// Searchbar event listener
buttonSearch.addEventListener('click', (e) => {
  e.preventDefault();
  getWeatherData(inputSearch.value);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') getWeatherData(inputSearch.value);
});

// Placeholder display for start
getWeatherData('Istanbul');
