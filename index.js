//alert('its working')
let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.material-icons-outlined');
let menu = document.querySelector('#menu');

console.log(menuToggleIcon)

menuToggle.addEventListener('click', e=>{
  menu.classList.toggle('show');
  if(menu.classList.contains('show')) {
    menuToggleIcon.innerHTML = 'close'
  }else{
    menuToggleIcon.innerHTML = 'view_headline'
  }
})
