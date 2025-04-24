// Base Keyboard class
class Keyboard {
    constructor(targetElement) {
      this.targetElement = targetElement; // container element where buttons will be added
      this.buttons = []; // Array to store the button instances
    }
  
    // Method to add a button to the keyboard
    addButton(symbol, callback) {
      const button = new KeyboardButton(symbol, callback);
      this.buttons.push(button);
      this.targetElement.appendChild(button.render());
    }
  }
  
  // Button class to create each key on the keyboard
  class KeyboardButton {
    constructor(symbol, callback) {
      this.symbol = symbol; // symbol to be displayed on the button
      this.callback = callback; // function to handle button click
      this.buttonElement = null;
    }
  
    // Render button and add event listener
    render() {
      this.buttonElement = document.createElement('div');
      this.buttonElement.classList.add('key'); //class for styling
      this.buttonElement.textContent = this.symbol; //symbol onto the button
      this.buttonElement.onclick = () => this.callback(this.symbol); // callback on click
      return this.buttonElement; //return button element
    }
  }
  
  // Chemistry Keyboard class extending base Keyboard
  class ChemistryKeyboard extends Keyboard {
    constructor(targetElement, inputField) {
      super(targetElement); // Call the parent class constructor
      this.inputField = inputField; // Reference to the input field where text will be added
      this.initializeKeys(); // Initialize the chemistry-specific keys
    }
  
    // Method to initialize the chemistry keys (e.g., H₂O, NaCl, subscripts)
    initializeKeys() {
      const symbols = ['→', '⇌', '₁', '₂', '₃', '+', '-', '=', '(', ')'];
      symbols.forEach(symbol => {
        this.addButton(symbol, this.addToInputField.bind(this)); // Add each symbol as a button
      });
    }
  
    // Callback function to add the symbol to the input field
    addToInputField(symbol) {
      this.inputField.append(symbol); // Append the clicked symbol to the input field
    }
  }
  
  // Input field class to manage user input
  class InputField {
    constructor(inputElement) {
      this.inputElement = inputElement; // The actual input element on the webpage
    }
  
    // Method to clear the input field
    clear() {
      this.inputElement.value = ''; // Clear the content of the input field
    }
  
    // Method to append a value to the input field
    append(value) {
      this.inputElement.focus(); // Keeps the input field active
      this.inputElement.value += value; // Add the value to the existing input
    }
  }
  
  // Main logic to initialize everything
  window.onload = function () {
    const inputFieldElement = document.getElementById('inputField'); // The input element where the user types
    const inputField = new InputField(inputFieldElement); // Create an InputField instance
  
    const chemistryKeyboardElement = document.getElementById('chemistryKeyboard'); // The element that will hold the chemistry keyboard
    const chemistryKeyboard = new ChemistryKeyboard(chemistryKeyboardElement, inputField); // Create the ChemistryKeyboard instance
  
    // Show chemistry keyboard on page
    chemistryKeyboardElement.style.display = 'grid';
  
    // For manual keyboard input
    document.addEventListener('keydown', function (event) {
      const validKeys = /^[a-zA-Z0-9+\-/*=() ]$/;
      if (validKeys.test(event.key)) {
        event.preventDefault(); // Prevent default typing behavior
        inputField.append(event.key); // Manually append the key
      }
    });
  };
  