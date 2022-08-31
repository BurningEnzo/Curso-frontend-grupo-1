async function getMyData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=41.3879&lon=2.16992&units=metric&lang=ca&appid=98c5a609f513ca79bdbd1c97df82d17e"
  );
  const data = await response.json();
  console.log("datos json", data);

  const name = data.name;
  console.log("name", name);
  const tempMin = data.main.temp_min;
  console.log(tempMin);
  const tempMax = data.main.temp_max;
  console.log(tempMax);
  const humidity = data.main.humidity;
  console.log(humidity);
  const weather = data.weather;
  console.log("weather: ", weather);

  const pWeather = document.getElementById("pWeather");

  const divLocation = document.getElementById("divLocation");

  const divTempMin = document.getElementById("tempMin");

  const divTempMax = document.getElementById("tempMax");

  const divHumidity = document.getElementById("humidity");

  const divWeatherMain = document.getElementById("weatherMain");

  if (name !== null) divLocation.textContent = name;

  if (tempMin !== null) divTempMin.textContent = `Min temp.  ${tempMin} ºC`;

  if (tempMax !== null) divTempMax.textContent = `Max temp.   ${tempMax} ºC`;

  if (humidity !== null) divHumidity.textContent = `Humidity ${humidity} %`;


  if (weather[0].main !== null) divWeatherMain.textContent = weather[0].main;

  console.log("data ", data);
}

document.addEventListener("DOMContentLoaded", function (event) {
  const pWeather = document.getElementById("weather");
  getMyData();

  //console.log("pWeather ", pWeather);

  //console.log("weather.data2");

  //pWeather.innerHTML = weather.data;
});
