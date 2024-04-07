
// Function to fetch weather data frpm the API
async function getWeather(){
    
    const apiKey = "82e58c1d66e46c56eb606842b7fd086d";
// Replace with actual API key
    const location = document.getElementById('locationInput').Value;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
// Extract relevant weather data
        const temperature = Math.round(data.main.temp - 273.15);

// Convert to Celcius        const condition = data.weather[0].description;

        const weatherMeassage = `Today's weather in ${location}: ${condition}. zthe temperature is ${temperature}°C`;
// Display weather information
        console.log(weatherMessage);

    } catch (error) {
        console.error ('Error fetching data:', error);
    }

}