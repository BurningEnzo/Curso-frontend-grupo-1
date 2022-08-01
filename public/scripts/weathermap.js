async function getMyData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=41.3879&lon=2.16992&units=metric&lang=ca&appid=98c5a609f513ca79bdbd1c97df82d17e"
  );
  const data = await response.json();

  const name = data.name;
  const tempMin = data.main.temp_min;
  const tempMax = data.main.temp_max;
  const humidity = data.main.humidity;

  const divWeather = document.getElementById("apiWeather"); 

  divWeather.textContent = `${name} Temperatura mínima ${tempMin} Temperatura máxima ${tempMax} Humedad ${humidity}%` ;

  console.log("data ", data);
}

getMyData();

document.addEventListener("DOMContentLoaded", function (event) {
  const divWeather = document.getElementById("apiWeather");

  console.log("divWeather ", divWeather);

  console.log("weather.data2");

  //divWeather.innerHTML = weather.data;
});
