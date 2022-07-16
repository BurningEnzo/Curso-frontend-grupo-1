import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

class KeynavController extends Controller {
  connect() {
    console.log("KeynavController connected");
  }

  follow(event) {
    //let code = event.code;
    // ... convert to number
    //let number = parseInt(code.slice(code.length - 1));
    let number = event.key;
    let link = this.element.querySelectorAll(".nav-link")[number];
    link && link.click();
  }
}

function keyboardReader() {
  const navLinks = document.getElementsByClassName("nav-link");

  Array.from(navLinks).forEach((element, index) => {
    document.addEventListener("keyup", (event) => {
      if (parseInt(event.key) === index + 1) {
        element.click();
      }
    });
  });
}

export { keyboardReader, KeynavController };
