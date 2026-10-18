const weatherForm = document.getElementById("weatherForm")
const cityInput = document.getElementById("cityInput")
const card = document.getElementById("card")
const apiKey = "2f97e1866a9a70fc61da444e472eda7c"

weatherForm.addEventListener("submit", async event => {
    event.preventDefault()
    const city = cityInput.value
    if (city) {
        try {
            const weatherData = await getData(city)
            displayWeather(weatherData)
        }
        catch(error) {
            displayError(error) 
        }
    }
    else {
        displayError("Please input a city")
    }
})

async function getData(city) {
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${apiKey}`;
    const geoResponse = await fetch(geoApiUrl)
    if (!geoResponse.ok) {
        errorDisplay("Cannot pull Geo Data")
    }
    const geoData = await geoResponse.json();

    const {lat, lon} = geoData[0]
    //const lat = geoData[0].lat
    //const lon = geoData[0].lon
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherApiUrl)

    if (!weatherResponse.ok) {
        errorDisplay("Cannont pull city Data")
    }

    return await weatherResponse.json()
}

function displayWeather(data) {
    const {name:city,
           main: {temp, humidity}, 
           weather: [{description, id}]} = data
    card.textContent = ""
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const humidityDisplay = document.createElement("p")
    const tempDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")

    cityDisplay.textContent = city;
    descDisplay.textContent = description
    tempDisplay.textContent = ((temp - 273.15) * (9/5) + 32).toFixed(2) + " F"
    humidityDisplay.textContent = humidity + "%"
    
    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
}

function displayError(message) {
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")
    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)
}
