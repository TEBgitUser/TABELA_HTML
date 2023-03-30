const obraz = ['image/bulboff.png', 'image/bulbvl.png', 'image/bulbbl.png', 'image/bulbgrn.png', 'image/bulbylw.png']
const obraz = ['image/bulboff.png', 'image/bulbvl.png', 'image/bulbbl.png', 'image/bulbgrn.png', 'image/bulbylw.png']
const VIOLET = 1;
const BLUE = 2;
const GREEN = 3;
const YELLOW = 4;
const NONE = 0;
var licznik = 0;

/**
 * 
 * @param {Id obiektu image} idObiektu 
 * @param {Nazwa koloru} nazwaKoloru 
 */
function ON(idObiektu, nazwaKoloru='') {
    // document.getElementById("show1").innerHTML = idObiektu + "</br> " + nazwaKoloru + "</br> "
    const obiektImageHtml = document.getElementById(idObiektu)
    // document.getElementById("show2").innerHTML = getColor(nazwaKoloru) + "</br> " + nazwaKoloru + "</br> "
    obiektImageHtml.src = getColor(nazwaKoloru);
}

function OFF(idObiektu) {
    const obiektImageHtml = document.getElementById(idObiektu)
    obiektImageHtml.src = obraz[0];
function ON(idObiektu, nazwaKoloru='') {
    // document.getElementById("show1").innerHTML = idObiektu + "</br> " + nazwaKoloru + "</br> "
    const obiektImageHtml = document.getElementById(idObiektu)
    // document.getElementById("show2").innerHTML = getColor(nazwaKoloru) + "</br> " + nazwaKoloru + "</br> "
    obiektImageHtml.src = getColor(nazwaKoloru);
}

function OFF(idObiektu) {
    const obiektImageHtml = document.getElementById(idObiektu)
    obiektImageHtml.src = obraz[0];
}



function getColor(name) {
    switch (name.toLowerCase()) {
        case 'violet': return obraz[VIOLET]
        case 'blue': return obraz[BLUE]
        case 'green': return obraz[GREEN]
        case 'yellow': return obraz[YELLOW]
        default: return obraz[NONE]
        default: return obraz[NONE]
    }
}
function lightOn(id, imageName) {
    const check = document.getElementById(id)
    const check = document.getElementById(id)
    document.getElementById("show1").innerHTML = check.checked + " " + id
}


function ON_img(idObiektu, idImage, nazwaKoloru) {
    const isChecked = document.getElementById(idObiektu).checked
    if (isChecked) {
        ON(idImage, nazwaKoloru)
    } else {
        ON(idImage, '')
    }
}

function addPicture(){
    const kolor = document.getElementById('colors').value;
    const bulb = document.createElement('img');
    bulb.id = 'zarowka' + licznik;
    licznik++;
    bulb.src = obraz[0];
    bulb.setAttribute('onmouseover', 'ON("'+ bulb.id+'","'+kolor+'")');
    bulb.setAttribute('onmouseleave', 'ON("'+ bulb.id+'")');
    const zarowki = document.getElementById('zarowki');
    zarowki.append(bulb);
}