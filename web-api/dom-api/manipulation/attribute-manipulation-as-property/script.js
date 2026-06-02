const input = document.querySelector("input")
const button = document.querySelector("button")
const a = document.querySelector("a")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")

// input property access
const inputType = input.type;
const inputId = input.id;
const inpustClassName = input.className;
const inputPlaceHolder = input.placeholder;
const inputRequired = input.required;
// if i want to access custom attribute then i have to use dataset property and also in html file have to be required using data* attribute 
const inputDataId = input.dataset.id;

// button property access
const buttonId = button.id;
const buttonClassName = button.className;
const buttonDisabled= button.disabled;
console.log(buttonDisabled)