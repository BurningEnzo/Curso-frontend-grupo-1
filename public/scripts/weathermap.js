async function getMyData() {

  const URL_WEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";
  const LAT = "41.3879";
  const LON = "2.16992";
  const UNITS = "metric";
  const LANG = "ca";
  const APPID = "98c5a609f513ca79bdbd1c97df82d17e";

  const response = await fetch(
    `${URL_WEATHERMAP}?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${APPID}&lang=${LANG}`
  );

  const data = await response.json();
  console.log("datos json", data);

  const name = data.name;
  const tempMin = data.main.temp_min;
  const tempMax = data.main.temp_max;
  const humidity = data.main.humidity;
  const weatherMain = data.weather[0].main;
  const weatherDescription = data.weather[0].description;
  const icon = data.weather[0].icon;

  const divLocation = document.getElementById("divLocation");
  const divTempMin = document.getElementById("tempMin");
  const divTempMax = document.getElementById("tempMax");
  const divHumidity = document.getElementById("humidity");
  const divWeatherMain = document.getElementById("divWeatherMain");

  if (name !== null) divLocation.textContent = name;
  if (tempMin !== null) divTempMin.textContent = `Min temp.  ${tempMin} ºC`;
  if (tempMax !== null) divTempMax.textContent = `Max temp.   ${tempMax} ºC`;
  if (humidity !== null) divHumidity.textContent = `Humidity ${humidity} %`;
  if (weatherMain !== null) divWeatherMain.textContent = `${weatherMain}, ${weatherDescription}`;

  const imageIcon = async icon => {
    const URL_WEATHERMAP_ICON = "https://openweathermap.org/img/wn/";
    const CODE_EXT_ICON = "@2x.png";
    try {
      const response = await fetch(
        `${URL_WEATHERMAP_ICON}${icon}${CODE_EXT_ICON}`,
        {
          method: 'GET',
          headers: new Headers(),
          mode: 'cors',
          cache: 'default',
          credentials: 'same-origin',          
        }
      );
      const data = await response.blob();
      return data;
    } catch (error) {
      console.error(`${error}`);
      return error;
    }
  };

  if (icon !== null) {
    const blobImage = await imageIcon(icon);
    const url = URL.createObjectURL(blobImage);
    const image = document.createElement("img");
    image.classList.add("imageIcon");
    image.src = url;
    image.alt = weatherMain;
    divWeatherMain.appendChild(image);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  const pWeather = document.getElementById("weather");
  getMyData();

  //console.log("pWeather ", pWeather);

  //console.log("weather.data2");

  //pWeather.innerHTML = weather.data;
});
