const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "4370962faffa131f1b9e9d7f27862ecb";

weatherForm.addEventListener('submit',async event => {
    event.preventDefault(); // Prevent the default form submission behavior
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("please enter a city name");
    }
});

async function getWeatherData(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data. Please check the city name.");
    }
    
    return await response.json();

}

function displayWeatherInfo(data){
    const {name: city, main:{temp,humidity},weather:[{description,id}]} = data;
    card.textContent = ""; // Clear previous content
    card.style.display= "flex"; // Ensure the card is visible

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(2)} °C`; // Convert Kelvin to Celsius
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.textContent = `${description}`;
    descDisplay.classList.add('descDisplay');
    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add('weatherEmoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    if(weatherId >= 200 && weatherId < 300){
        return "🌩️"; // Thunderstorm
    }
    else if(weatherId >= 300 && weatherId < 400){
        return "🌧️"; // Drizzle
    }
    else if(weatherId >= 500 && weatherId < 600){
        return "🌧️"; // Rain
    }
    else if(weatherId >= 600 && weatherId < 700){
        return "❄️"; // Snow
    }
    else if(weatherId >= 700 && weatherId < 800){
        return "🌫️"; // Atmosphere
    }
    else if(weatherId === 800){
        return "☀️"; // Clear
    }
    else if(weatherId > 800){
        return "☁️"; // Clouds
    }
    return ""; // Default case

}
function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');
    card.textContent=""; // Clear previous content
    card.style.display="flex";// Ensure the card is visible
    card.appendChild(errorDisplay);
    
}