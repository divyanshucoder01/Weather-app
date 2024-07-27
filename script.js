// const apiKey = '02248184cfdb8e52a5e694af180025eb';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    // const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=02248184cfdb8e52a5e694af180025eb&units=metric`
    https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=02248184cfdb8e52a5e694af180025eb&units=metric
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
