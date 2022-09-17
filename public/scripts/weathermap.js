import { country } from "./country.js";

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

/////////////////////////////////////////////JUEGO/////////////////////////////////////////////

const listCountries = await country();

console.log("Países cargados: ", listCountries);
const result = [...listCountries.data.countries];

//Función Ramdom que cambia el orden de los países para no repetir en cada jugada
result.sort(() => Math.random() - 0.5);
console.log("Array de países desordenado: ", result);

//País sobre el que se realizan las preguntas del Juego
//const selectedCountry = result.splice(0, 1);
const selectedCountry = result.shift();
console.log("País elegido para el juego: ", selectedCountry);

//Incializamos el array que contendrá los países que entraran en el juego
let playCountries = new Array();
console.log("Tamaño array: ", playCountries.length);
console.log("Países para el resto de preguntas: ", playCountries);

//El array contiene el país sobre el que se le realizan las preguntas
playCountries.push(selectedCountry)
console.log("Tamaño array con un país: ", playCountries.length);
console.log("Países en juego: ", playCountries);

function findCommonElements3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

for (let i = 0; i < result.length; i++) {
debugger
  if (findCommonElements3(selectedCountry.languages, result[i].languages)) { 
    //if(result[i].languages.includes(selectedCountry.languages)) {
    console.log(findCommonElements3(result[i].languages, selectedCountry.languages))
    continue;
  
  } else {

    playCountries.push(result[i])
  }
 
}

console.log("Paises de juego: ", playCountries)

if (window.location.href.indexOf("#easteregg") > -1) {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Show the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
