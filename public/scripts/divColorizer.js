function divColorizer () {

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

}

export default divColorizer;