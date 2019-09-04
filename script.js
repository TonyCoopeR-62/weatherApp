//   openweathermap-api 8a103589621e12d36e9ffd2d7ee39848

let apiKey = "8a103589621e12d36e9ffd2d7ee39848";
let searchButton = document.getElementById("button");
let searchInput = document.getElementById("text");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temper");
let humidity = document.getElementById("humidity");

searchButton.addEventListener('click', getWeather);
searchInput.addEventListener('keyup', enterPressed);

function enterPressed (event) {
    if (event.key === "Enter") {
        getWeather();
    }
}

function getWeather () {
    if (searchInput.value === "") {
        alert('input city to search')
    } else {
        let link = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}`;
    httpRequestAsync(link, theResponse);
    }
}

function theResponse (response) {
    let dataJson = JSON.parse(response);
    cityName.innerHTML = dataJson.name;
    icon.src = "http://openweathermap.org/img/w/" + dataJson.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(dataJson.main.temp - 273) + "&deg";
    humidity.innerHTML = dataJson.main.humidity + "%";
}

function httpRequestAsync(url, callback) {
    console.log("start req");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); 
    httpRequest.send();
}
