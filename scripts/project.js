document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const weatherInfo = document.getElementById('weather-info');

    searchBtn.addEventListener('click', () => {
        const cityName = cityInput.value.trim();
        if (cityName !== '') {
            getWeather(cityName);
        } else {
            alert('Please enter a city name.');
        }
    });

    async function getWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f2db73c55d04a213c449b93e2df1ab8&units=metric`);
            const data = await response.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data. Please try again later.');
        }
    }

    function displayWeather(data) {
        const weatherHTML = `
            <div class="weather-card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" class="weather-icon">
                <p class="weather-description">${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Feels like: ${data.main.feels_like} °C</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        `;
        weatherInfo.innerHTML = weatherHTML;
    }
});