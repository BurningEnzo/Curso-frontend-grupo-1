function AlertFechaHoy() {
    console.log(AlertFechaHoy)
    window.addEventListener("load", function (event) {
        const today = new Date().toLocaleDateString()
        window.alert(today);
    })
}

export { AlertFechaHoy }