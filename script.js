let arr = [];
('strict mode');
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.querySelector('.icon-search');
const weatherCondition = document.getElementById('weather-condition');
const locationInfo = document.getElementById('location-info');
const temperatureInfo = document.getElementById('temperature-info');
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
    processWeatherData(weatherData);
  } catch {
    alert('City not found');
  }
}

// Process the data
function processWeatherData(data) {
  console.log(data);
}

// Display the data
function displayWeatherData() {}

// Search bar events
buttonSearch.addEventListener('click', () => {
  getWeatherData(inputSearch.value);
});
