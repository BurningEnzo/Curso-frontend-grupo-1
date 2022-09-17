const navLinks = document.getElementsByClassName('nav-link')

Array.from(navLinks).forEach((element, index) => {
    document.addEventListener('keyup', event => {
        if (parseInt(event.key) === (index+1)) {
            element.click()  
        }
    })    
})

// -------------------------------------------------------------------------------------


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



