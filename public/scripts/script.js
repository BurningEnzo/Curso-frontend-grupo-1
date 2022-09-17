
function mouseOverOut() {
  document.addEventListener("DOMContentLoaded", function (event) {
    const today = new Date().toLocaleDateString()
    window.alert(today);

    const allDivs = document.getElementsByTagName("div")

    for (const div of allDivs) {

      div.addEventListener("mouseover", (event) => {
        if (event.altKey) {
          // div.style.border = "1px solid red";
          div.style.outline = "1px solid red";
          div.style.outline.offset = "-1px";
        }
      })

      div.addEventListener("mouseout", (event) => {
        if (event.altKey) {
          // div.style.border = "none";
          div.style.outline = null;
          div.style.outline.offset = null;
        }
      })
    }

  })

  document.addEventListener("keypress", (event) => {

    let keyPressed = event.key


    switch (keyPressed) {

      case '1':

        window.location = "#who_we_are"
        break

      case '2':
        window.location = "#our_services"
        break

      case '3':
        window.location = "#portfolio"
        break

      case '4':
        window.location = "#location"
        break

      case '5':
        window.location = "#email_us"
        break

    }
  })

  const navLinks = document.getElementsByClassName('nav-link')

  Array.from(navLinks).forEach((element, index) => {
    document.addEventListener('keyup', event => {
      if (parseInt(event.key) === (index + 1)) {
        element.click()
      }
    })
  })

}

export { mouseOverOut };
