// Põhiklass Keyboard
class Keyboard {
  constructor(targetElement) {
    this.targetElement = targetElement; // HTML element, kuhu klahvid lisatakse
    this.buttons = []; // Massiiv, kuhu salvestatakse kõik loodud nupud
  }

  // Meetod uue nupu lisamiseks klaviatuurile
  addButton(symbol, callback) {
    const button = new KeyboardButton(symbol, callback);
    this.buttons.push(button); 
    this.targetElement.appendChild(button.render());
  }
}

// Klass, mis loob iga klaviatuuri klahvi
class KeyboardButton {
  constructor(symbol, callback) {
    this.symbol = symbol; // Klahvil kuvatav sümbol
    this.callback = callback; // Funktsioon, mis käivitatakse klahvi vajutamisel
    this.buttonElement = null; // Viide DOM elemendile
  }

  // Meetod, mis loob nupu HTML-i ja seob vajutusfunktsiooni
  render() {
    this.buttonElement = document.createElement('div');
    this.buttonElement.classList.add('key'); 
    this.buttonElement.textContent = this.symbol;
    this.buttonElement.onclick = () => this.callback(this.symbol); // Klahvi vajutamisel käivitatakse callback
    return this.buttonElement; // Tagastame DOM elemendi
  }
}

// Keemiaklaviatuur – laiendab tavalist klaviatuuri klassi
class ChemistryKeyboard extends Keyboard {
  constructor(targetElement, inputField) {
    super(targetElement); // Kutsub välja vanema klassi konstruktori
    this.inputField = inputField; // Sisestusväli, kuhu sümbolid lisatakse
    this.initializeKeys(); // Käivitab meetodi keemiasümbolite loomiseks
  }

  // Meetod, mis lisab keemiaspetsiifilised klahvid
  initializeKeys() {
    const symbols = ['→', '⇌', '₁', '₂', '₃', '+', '-', '=', '(', ')']; // Sümbolite loend
    symbols.forEach(symbol => {
      this.addButton(symbol, this.addToInputField.bind(this)); //iga sümbol nupuna
    });
  }

  // Funktsioon, mis lisab sümboli sisestusvälja
  addToInputField(symbol) {
    this.inputField.append(symbol); // Lisab sümboli input-väljale
  }
}

// Klass kasutaja sisestusvälja haldamiseks
class InputField {
  constructor(inputElement) {
    this.inputElement = inputElement; // Viide HTML input elemendile
  }

  // Meetod, mis puhastab sisestusvälja
  clear() {
    this.inputElement.value = '';
  }

  // Meetod väärtuse lisamiseks sisestusväljale
  append(value) {
    this.inputElement.focus(); // Hoiab sisestusvälja aktiivsena
    this.inputElement.value += value; // Lisab sümboli olemasolevale tekstile
  }
}

// Peamine loogika, mis käivitub lehe laadimisel
window.onload = function () {
  const inputFieldElement = document.getElementById('inputField'); // Leiab sisestusvälja HTML-ist
  const inputField = new InputField(inputFieldElement); // Loob uue InputField objekti

  const chemistryKeyboardElement = document.getElementById('chemistryKeyboard'); // Leiab keemiaklaviatuuri konteineri
  const chemistryKeyboard = new ChemistryKeyboard(chemistryKeyboardElement, inputField); // Loob keemiaklaviatuuri

  // Kuvab keemiaklaviatuuri lehel
  chemistryKeyboardElement.style.display = 'grid';

  // Lisab võimaluse sisestada sümboleid ka füüsilise klaviatuuri kaudu
  document.addEventListener('keydown', function (event) {
    const validKeys = /^[a-zA-Z0-9+\-/*=() ]$/; // Lubatud tähemärgid
    if (validKeys.test(event.key)) {
      event.preventDefault(); // Keelatud vaikimisi sisestamine
      inputField.append(event.key); // Lisame vajutatud märgi sisestusväljale
    }
  });
};
