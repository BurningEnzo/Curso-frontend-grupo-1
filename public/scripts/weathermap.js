import { countries } from "./country.js";

async function getMyData() {
  const URL_WEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";
  const LAT = "41.3879";
  const LON = "2.16992";
  const UNITS = "metric";
  const LANG = "ca";
  const APPID = "98c5a609f513ca79bdbd1c97df82d17e";

  const response = await fetch(
    `${URL_WEATHERMAP}?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${APPID}&lang=${LANG}`,
    {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
    }
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

const listCountries = await countries();
const result = [...listCountries.data.countries];

//Función Ramdom que cambia el orden de los países para no repetir en cada jugada
result.sort(() => Math.random() - 0.5);

//País sobre el que se realizan las preguntas del Juego
const randomCountry = result.splice(0, 1);
//Incializamos el array que contendrá los países que entraran en el juego
let playCountries = new Array();
let index;

//El array contiene el país sobre el que se le realizan las preguntas
playCountries = [randomCountry[0]]; 

//Map que se utilizará para cambiar cada vez el orden de las repuestas
let mapCountries = new Map();
mapCountries.set(0, randomCountry[0]);

result.splice(index, 1);

let isNotLanguagesNameContinent = false;
let i = 0;
let j = 0;
let language;

//Buscamos 3 países que no utilicen los mismos idiomas (o alguno de los idiomas) ni el mismo continente
while (isNotLanguagesNameContinent === false) {
  language = result[i].languages.filter((p) =>
    randomCountry[0].languages.some((q) => q.name === p.name)
  );
  console.log("language", language);
  if (
    language[0] === undefined &&
    randomCountry[0].continent.name !== result[i].continent.name
  ) {
    playCountries = [...playCountries, result[i]];
    mapCountries.set(j+1, result[i]);
    result.splice(i, 1);
    j++;    
    if (j === 3) isNotLanguagesNameContinent = true;
  } else {
    i++;
  }
}

console.log("playconuntriescomparelenguage", playCountries);

debugger;

let sortAnswer = [0,1,2,3];
//Cambiamos el orden de las respuestas
sortAnswer = sortAnswer.sort(() => Math.random() - 0.5);
const nameCountry= randomCountry[0].name;

//Añadimos el texto de cada posible respuesta
const divAnswer1 = mapCountries.get(sortAnswer[0]).capital;
const divAnswer2 = mapCountries.get(sortAnswer[1]).languages[0].name;
const divAnswer3 = mapCountries.get(sortAnswer[2]).emoji;
const divAnswer4 = mapCountries.get(sortAnswer[3]).phone;
