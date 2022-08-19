async function getMyData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=41.3879&lon=2.16992&units=metric&lang=ca&appid=98c5a609f513ca79bdbd1c97df82d17e"
  );
  const data = await response.json();
  console.log('datos json', data);

  const name = data.name;
  console.log('name',name);
  const tempMin = data.main.temp_min;
  console.log(tempMin);
  const tempMax = data.main.temp_max;
  console.log(tempMax);
  const humidity = data.main.humidity;
  console.log(humidity);
  
  
  const divWeather = document.getElementById("divWeather");

  const divName = document.getElementById("name");

  const divTempMin= document.getElementById("tempMin");

  if (name!==null)divName.textContent = name;
  
  //if (tempMin!==null) divTempMin.textContent = tempMin;  
  

  divWeather.textContent =`${name} Temperatura mínima ${tempMin}` ;
  //Temperatura máxima ${tempMax} Humedad ${humidity}%`;

  console.log("data ", data);
}



document.addEventListener("DOMContentLoaded", function (event) {
  const divWeather = document.getElementById("apiWeather");

  getMyData();

  //console.log("divWeather ", divWeather);

  //console.log("weather.data2");

  //divWeather.innerHTML = weather.data;
});


