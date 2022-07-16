import dateAlert from "../scripts/dateAlert.js";
import divColorizer from "../scripts/divColorizer.js";
import { keyboardReader, KeynavController } from "../scripts/keyboardReader.js";
import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

dateAlert();
divColorizer();
// keyboardReader();

const app = Application.start()
app.register("kn", KeynavController)
