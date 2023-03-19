class zarowa {
  constructor(kolor, element) {
    this.kolor = kolor;
    this.element = element;
  }

  swiec() {
    var checkboxes = document.getElementsByName(this.kolor);
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        var id = checkboxes[i].name;
        document.getElementById(id).src = this.kolor + '.png';
      } else {
        var id = checkboxes[i].name;
        document.getElementById(id).src = 'zarowa.png';
      }
    }
  }

  swiecenie() {
    const isChecked = this.element.getAttribute('data-checked') === 'true';
    const kolor = this.element.getAttribute('data-color');
    if (isChecked) {
      this.element.src = kolor + '.png';
    } else {
      this.element.src = 'zarowa.png';
    }
  }

  static dodaj() {
    const rodzaj = document.getElementById('rodzaj').value; // Pobierz wybrany rodzaj żarówki
    const obrazek = document.createElement('img'); // Stwórz nowy element <img>
    obrazek.src = rodzaj + '.png'; // Ustaw początkowy obrazek
    obrazek.className = 'image'; // Dodaj klasę CSS
    obrazek.id = rodzaj + Date.now(); // Ustaw unikalny identyfikator dla elementu <img>
    obrazek.setAttribute('data-color', rodzaj); // Ustaw atrybut data-color
    obrazek.setAttribute('data-checked', 'false'); // Ustaw atrybut data-checked
    const zarowkiDiv = document.getElementById('zarowki');
    zarowkiDiv.appendChild(obrazek);
    const nowaZarowa = new zarowa(rodzaj, obrazek); // Stwórz nowy obiekt klasy zarowa
    obrazek.addEventListener('click', function() {
      const isChecked = this.getAttribute('data-checked') === 'true';
      this.setAttribute('data-checked', !isChecked);
      nowaZarowa.swiecenie();
    });
  }
}

function klik(){
    document.getElementById("wynik").innerHTML="Najechaleś na x";
}

function schow(){
    document.getElementById("wynik").innerHTML=""
}