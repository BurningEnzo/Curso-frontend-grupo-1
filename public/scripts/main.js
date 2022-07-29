import { AlertFechaHoy } from "./modules/AlertFechaHoy.js"
import {EvidenciaDivs} from "./modules/EvidenciaDivs.js"
import {EventosTeclado} from "./modules/EventosTeclado.js"
AlertFechaHoy();


import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
//import { KeynavController } from "./keynav_controller.js"
import { LogController as KeynavController } from "./log_controller.js"
const app = Application.start()



app.register("kn", KeynavController)
