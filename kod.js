var obraz = ['image/bulboff.png', 'image/bulbvl.png', 'image/bulbbl.png', 'image/bulbgrn.png', 'image/bulbylw.png']
const VIOLET = 1;
const BLUE = 2;
const GREEN = 3;
const YELLOW = 4;
const NONE = 0;
function lightOnViolet() {
    document.getElementById("bulb1").src = "image/bulbvl.png"

}
function lightOnBlue() {
    document.getElementById("bulb2").src = "image/bulbbl.png"
}
function lightOnGreen() {
    document.getElementById("bulb3").src = "image/bulbgrn.png"
}
function lightOnYellow() {
    document.getElementById("bulb4").src = "image/bulbylw.png"
}
function lightOff() {
    document.getElementById("bulb1").src = "image/bulboff.png"
    document.getElementById("bulb2").src = "image/bulboff.png"
    document.getElementById("bulb3").src = "image/bulboff.png"
    document.getElementById("bulb4").src = "image/bulboff.png"
}
function lightOff1(id) {
    document.getElementById(id).src = "image/bulboff.png"
}

/**
 * 
 * @param {Id obiektu image} idObiektu 
 * @param {Nazwa koloru} nazwaKoloru 
 */
function ON(idObiektu, nazwaKoloru) {
    document.getElementById("show1").innerHTML = idObiektu + "</br> " + nazwaKoloru+ "</br> "
    var obiektImageHtml = document.getElementById(idObiektu)
    document.getElementById("show2").innerHTML = getColor(nazwaKoloru) + "</br> " + nazwaKoloru+ "</br> "
    // obiektImageHtml.scr = getColor(nazwaKoloru)
    obiektImageHtml.setAttribute.src=getColor(nazwaKoloru)
}

function getColor(name) {
    switch (name.toLowerCase()) {
        case 'violet': return obraz[VIOLET]
        case 'blue': return obraz[BLUE]
        case 'green': return obraz[GREEN]
        case 'yellow': return obraz[YELLOW]
        default: obraz[NONE]
    }
}
function lightOn(id, imageName) {
    var check = document.getElementById(id)
    document.getElementById("show1").innerHTML = check.checked + " " + id
}