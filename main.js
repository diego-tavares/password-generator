const checkbox = document.getElementById('dark-mode');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})

