import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

class KeynavController extends Controller {
    connect() {
        console.log("I am alive!!", this.element)
    }

    follow(event) {
        let code = event.code;

        // ... convert to number
        let number = parseInt(code.substring(code.length - 1));
        if (number === NaN || number === undefined) {
            number = 1;
        }
        console.log('number', number);

        let link = this.element.querySelectorAll(".nav-link")[number];
        link && link.click()
    }
}


export { KeynavController };

