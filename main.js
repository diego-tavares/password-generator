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


// Range bar

chtLength.innerHTML = range.value;

  range.addEventListener('change',  ()=>{
     chtLength.innerHTML = range.value;
     strColor();
  })

  function rangeValue() {
    const newValue = range.value;
    chtLength.innerHTML = newValue;
  }

range.addEventListener("input", rangeValue);


// Selectors

const pwd = document.getElementById('pwd');
const inputUpper = document.getElementById('uppercase');
const inputLower = document.getElementById('lowercase');
const inputNumber = document.getElementById('number');
const inputSymbol = document.getElementById('symbols');

const randomLower = 'abcdefghijklmnopqrstuvvwxyz';
const randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomNumber = '0123456789';
const randomSymbol = '!@#$%¨&*()_-+='

function getLower () { 
    return randomLower[Math.floor(Math.random() * randomLower.length)]
}
  
function getUpper () { 
    return randomUpper[Math.floor(Math.random() * randomUpper.length)]
}
  
function getNumber () { 
    return randomNumber[Math.floor(Math.random() * randomNumber.length)]
}
  
function getSymbol () { 
    return randomSymbol[Math.floor(Math.random() * randomSymbol.length)];
}
                     

function generatePassword() {

  const lenNew = range.value;

  let pass = "";

  if (inputNumber.checked) {
    pass += getNumber();
  }

  if (inputLower.checked) {
    pass += getLower();
  }
  
  if (inputUpper.checked) {
    pass += getUpper();
  }
  
  if (inputSymbol.checked) {
    pass += getSymbol();
  }

  for (let i = pass.length; i < lenNew; i++){
    const x = generateX();
    pass += x;
  }
  
  pwd.innerText = pass;

}

function generateX () {

  const xs = [];

  if(inputLower.checked){
    xs.push(getLower());
  }
  
  if(inputNumber.checked){
    xs.push(getNumber());
  }
  
  if(inputSymbol.checked){
    xs.push(getSymbol());
  }
  
  if(inputUpper.checked){
    xs.push(getUpper());
  }

  if(xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];

}

btn.addEventListener('click', () => {
 generatePassword();
 strColor();
})


// Strenght Bar

const strBar = document.getElementById('str-bar');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');


function strValidation () {

  let strValue = 0;

  if (inputLower.checked) {
    strValue += 1;
  }
  
  if (inputNumber.checked) {
    strValue += 1;
  } 
  
  if (inputSymbol.checked) {
    strValue += 1;
  }
  
  if (inputUpper.checked) {
    strValue += 1;
  }

  if (range.value > 10) {
    strValue += 1;
  }

  return strValue
  
}

function strColor () {
  
  let strValue = strValidation();

  if (strValue === 1||strValue === 2) {
    strBar.innerHTML = '<span class="red bx bxs-label"></span><span class="bx bxs-label"></span><span class="bx bxs-label"></span>'
  } 
  
  if (strValue === 3 || strValue === 4) {
    strBar.innerHTML = '<span class="yellow"><span class="bx bxs-label"></span><span class="bx bxs-label"></span></span><span class="bx bxs-label"></span>'
  } 

  if (strValue > 4) {
    strBar.innerHTML = '<span class="green"><span class="bx bxs-label"></span><span class="bx bxs-label"></span><span class="bx bxs-label"></span></span>'
  } 

}

const chkBox = document.querySelectorAll('input[type=checkbox]') ;

for (var i = 0; i < chkBox.length; i++) {
  chkBox[i].addEventListener('change', strColor);
}

//Copy Button

const copy = document.getElementById('copy');

function copyEl() {
  
  var copyPwd = pwd.innerText;
  
  navigator.clipboard.writeText(copyPwd);
  alert ('Copied to clipboard!')
}

copy.addEventListener('click', copyEl)