import { AlertFechaHoy } from "./modules/AlertFechaHoy.js"
import {EvidenciaDivs} from "./modules/EvidenciaDivs.js"
import {EventosTeclado} from "./modules/EventosTeclado.js"
AlertFechaHoy();


import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
//import { KeynavController } from "./keynav_controller.js"
import { LogController as KeynavController } from "./log_controller.js"
const app = Application.start()



app.register("kn", KeynavController)

async function getMyData() {
    let response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}");
    let data = await response.json();
    console.log(data)
}