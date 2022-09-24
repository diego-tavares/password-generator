const pwdContainer = document.getElementById('pwd-generated');
const pwdConfigs = document.getElementById('pwd-configs');
const strBox = document.getElementById('strenght ');
const btn = document.getElementById('btn');
const label = document.getElementById('label');
const checkbox = document.getElementById('dark-mode');



checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  pwdContainer.classList.toggle('pwd-generated-alt');
  pwdConfigs.classList.toggle('pwd-configs-alt');
  strBox.classList.toggle('strenght-alt');
  btn.classList.toggle('btn-alt');
  label.classList.toggle('label-alt');
  
})

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

console.log(randomSymbol())