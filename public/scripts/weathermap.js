import { countries } from "./country.js";



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
  const divTempMin = document.getElementById("divTempMin");
  const divTempMax = document.getElementById("divTempMax");
  const divHumidity = document.getElementById("divHumidity");
  const divWeatherMain = document.getElementById("divWeatherMain");

  if (name !== null) divLocation.textContent = name;
  if (tempMin !== null) divTempMin.textContent = `Temp. min ${tempMin}ºC`;
  if (tempMax !== null) divTempMax.textContent = `Temp. max ${tempMax}ºC`;
  if (humidity !== null) divHumidity.textContent = `Humitat ${humidity}%`;
  if (weatherMain !== null)
    divWeatherMain.textContent =
      weatherDescription[0].toUpperCase() + weatherDescription.substring(1);

  const imageIcon = async (icon) => {
    const URL_WEATHERMAP_ICON = "https://openweathermap.org/img/wn/";
    const CODE_EXT_ICON = "@2x.png";
    try {
      const response = await fetch(
        `${URL_WEATHERMAP_ICON}${icon}${CODE_EXT_ICON}`,
        {
          method: "GET",
          headers: new Headers(),
          mode: "cors",
          cache: "default",
          credentials: "same-origin",
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
  getMyData();
  const pWeather = document.getElementById("divWeather");
  const buttonClick = document.getElementById("buttonClose");
  buttonClick.addEventListener("mousedown", (event) => {
    console.log("event:", event.button);
    if (event.button === 0) {
      document.body.removeChild(pWeather);
    }
  });
});

debugger;
const listCountries = await countries();
const result = [...listCountries.data.countries];
console.log("result", result);

result.sort(() => Math.random() - 0.5);
console.log("Result Shuffle", result);

const randomCountry = result.splice(0, 1);
let playCountries = new Array();
let index;
//playCountries = randomCountry;

console.log("randomConuntry", randomCountry);
console.log("result", result);

const isNotContinentName = (element) =>
  element.continent.name !== randomCountry[0].continent.name;

console.log(randomCountry=>randomCountry[0].languaje.name);
const isNotLanguagesName = (element)=> element.languages.name!==(randomCountry=>randomCountry[0].languaje.name);

index = result.findIndex(isNotContinentName);
debugger;
playCountries = [...randomCountry,result[index]];
result.splice(index, 1);

console.log("playconuntriescomparelenguage",playCountries);

index=result.findIndex(isNotLanguagesName);
playCountries = [...playCountries,result[index]];
result.splice(index, 1);


playCountries = [...playCountries, result[0],result[1]];

