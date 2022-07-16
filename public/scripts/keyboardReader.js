function keyboardReader () {
  const navLinks = document.getElementsByClassName("nav-link");

  Array.from(navLinks).forEach((element, index) => {
    document.addEventListener("keyup", (event) => {
      if (parseInt(event.key) === index + 1) {
        element.click();
      }
    });
  });
 };

export default keyboardReader;