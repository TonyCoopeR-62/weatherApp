//   openweathermap-api 8a103589621e12d36e9ffd2d7ee39848
//   sample url https://api.openweathermap.org/data/2.5/weather?q=
// 
//   let jsonObject = JSON.parse(response);
//   cityName.innerHTML = jsonObject.name;
//   icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
//   temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
//   humidity.innerHTML = jsonObject.main.humidity + "%";

let searchText = document.getElementById('text').value;
let apikey = "8a103589621e12d36e9ffd2d7ee39848";
let link = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=" + apikey;

document.getElementById('button').addEventListener('click', getWeather);

function getWeather() {
    fetch(link)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
}