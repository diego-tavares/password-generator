// Dark mode

const pwdContainer = document.getElementById('pwd-generated');
const pwdConfigs = document.getElementById('pwd-configs');
const strBox = document.getElementById('strenght ');
const btn = document.getElementById('btn');
const label = document.getElementById('label');
const checkbox = document.getElementById('dark-mode');

const range = document.getElementById('range');
const chtLength = document.getElementById('cht-length');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  pwdContainer.classList.toggle('pwd-generated-alt');
  pwdConfigs.classList.toggle('pwd-configs-alt');
  strBox.classList.toggle('strenght-alt');
  btn.classList.toggle('btn-alt');
  label.classList.toggle('label-alt');
  range.classList.toggle('inputBarLength-alt');
  
})

 chtLength.innerHTML = range.value;

 range.addEventListener('change',  ()=>{
    chtLength.innerHTML = range.value;
    
    
  })
  
  var rangeValue = function(){
  var newValue = range.value;
  var target = document.querySelector('.chtLength');
  target.innerHTML = newValue;
}

range.addEventListener("input", rangeValue);

// function rangeSlide(value) {
//   document.getElementById('range').innerHTML = value;
//   onchange='range(this.value)';
//   onmousemove='range(this.value)';
// }

// Selectors

const inputUpper = document.getElementById('uppercase');
const inputLower = document.getElementById('lowercase');
const inputNumber = document.getElementById('number');
const inputSymbol = document.getElementById('symbols');

const randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  listSymbol = ['!', '@', '#', '$', '%', '^', '&', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '?'];
  symbol = listSymbol[Math.floor(Math.random() * listSymbol.length)];
  return symbol;
}


btn.addEventListener('click', () =>{
  password(
    inputUpper.checked,
    inputLower.checked,
    inputNumber.checked,
    inputSymbol.checked,
    range.value
  )
})
console.log(randomSymbol())