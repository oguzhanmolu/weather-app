'strict mode';

// Get weather data from API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f4507264ae2d4096a6d124819231902 &q=${location}`
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch {
    alert('City not found');
  }
}

getWeatherData('turkey');
