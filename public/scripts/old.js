//while (playCountries.length < 4) {
let language;

for (let i = 0; playCountries.length < 4; i++) {
  language = result[i].languages.filter((p) =>
    selectedCountry.languages.some((q) => q.name === p.name)
  );

  if (language[0] === undefined) {
    playCountries.push({ corectAnswer: 0, value: result[i] });
  }
  //playCountries.push(result[i]);
}
console.log("Tamaño array con un país: ", playCountries.length);
console.log("Países en juego: ", playCountries);

//playCountries=playCountries.sort(() => Math.random()-0.5);
//}
//}

//Map que se utilizará para cambiar cada vez el orden de las repuestas
//let mapCountries = new Map();
//mapCountries.set(0, selectedCountry);

//result.splice(index, 1);

/*let isNotLanguagesNameContinent = false;
let i = 0;
let j = 0;*/

//Buscamos 3 países que no utilicen los mismos idiomas (o alguno de los idiomas) ni el mismo continente
/*while (isNotLanguagesNameContinent === false) {
  language = result[i].languages.filter((p) =>
    selectedCountry.languages.some((q) => q.name === p.name)
  );
  console.log("language", language);
  if (
    language[0] === undefined &&
    selectedCountry.continent.name !== result[i].continent.name
  ) {
    playCountries[i] = result[i];
    mapCountries.set(j + 1, result[i]);
    result.splice(i, 1);
    j++;
    if (j === 3) isNotLanguagesNameContinent = true;
  } else {
    i++;
  }
}*/

console.log("playconuntriescomparelenguage", playCountries);

let sortAnswer = [0, 1, 2, 3];
//Cambiamos el orden de las respuestas
sortAnswer = sortAnswer.sort(() => Math.random() - 0.5);
//const nameCountry = selectedCountry.name;

//Añadimos el texto de cada posible respuesta

const divAnswer1 = playCountries[sortAnswer[0]];
const divAnswer2 = playCountries[sortAnswer[1]];
const divAnswer3 = playCountries[sortAnswer[2]];
const divAnswer4 = playCountries[sortAnswer[3]];
