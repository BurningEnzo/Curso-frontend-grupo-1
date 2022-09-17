import { country } from "./country.js";

let lat;
let lon;

async function getMyData() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log("Latitude : " + crd.latitude);
    console.log("Longitude: " + crd.longitude);
    console.log("More or less " + crd.accuracy + " meters.");
    lat = crd.latitude;
    lon = crd.longitude;
  }

  function error(err) {
    lat = "41.3879";
    lot = "2.16992";
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

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
const selectedCountry = result.shift();
console.log("País elegido para el juego: ", selectedCountry);

//Incializamos el array que contendrá los países que entraran en el juego
let playCountries = new Array();

//El array contiene el país sobre el que se le realizan las preguntas
playCountries[0] = { corectAnswer: 1, value: selectedCountry };

//Variable para filtrar que el idioma no coincida
let language;

for (let i = 0; playCountries.length < 4; i++) {
  language = result[i].languages.filter((p) =>
    selectedCountry.languages.some((q) => q.name === p.name)
  );
  if (language[0] === undefined) {
    playCountries.push({ corectAnswer: 0, value: result[i] });
  }
}

let sortAnswer = [0, 1, 2, 3];
//Variable para cambiar el orden de las respuestas
sortAnswer.sort(() => Math.random() - 0.5);

//País sobre el que se realiza la pregunta
const nameCountry = selectedCountry.name;

const divAnswer1 = {
  isCorrect: playCountries[sortAnswer[1]].corectAnswer,
  answer: playCountries[sortAnswer[1]].value.emoji,
};
const divAnswer2 = {
  isCorrect: playCountries[sortAnswer[0]].corectAnswer,
  answer: `Capital: ${playCountries[sortAnswer[0]].value.capital}`,
};

const divAnswer3 = {
  isCorrect: playCountries[sortAnswer[2]].corectAnswer,
  answer: `Idioma: ${playCountries[sortAnswer[2]].value.languages[0].name}`,
};
const divAnswer4 = {
  isCorrect: playCountries[sortAnswer[3]].corectAnswer,
  answer: `Prefijo Teléfono: ${playCountries[sortAnswer[3]].value.phone}`,
};

const divAnswer = [divAnswer1, divAnswer2, divAnswer3, divAnswer4];

if (window.location.href.indexOf("#easteregg") > -1) {
  // Get the modal
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");
  const country = document.getElementById("country");

  country.textContent = `Una de las respuestas corresponde al País: ${nameCountry}`;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Show the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  for (let i = 0; i < divAnswer.length; i++) {
    const divAnswerModal = document.createElement("button");
    divAnswerModal.type = "button";
    divAnswerModal.className = "button-answer";
    divAnswerModal.value = divAnswer[i].isCorrect;
    divAnswerModal.textContent = divAnswer[i].answer;

    divAnswerModal.addEventListener("click", (event) => {
      if (divAnswerModal.value === "1") {
        alert("Has ganado");
      } else {
        alert("Has perdido");
      }
    });
    modalContent.appendChild(divAnswerModal);
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
