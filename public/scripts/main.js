import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { KeynavController } from "./keynav_controller.js"

const app = Application.start();

app.register("kn", KeynavController);

/*function menuLinks() {
    document.addEventListener('DOMContentLoaded', (event) => {
        let menuLinks = document.getElementsByClassName("nav-link");
        [...menuLinks].forEach(element => indexOf(element));
    })
}



export { menuLinks };*/






