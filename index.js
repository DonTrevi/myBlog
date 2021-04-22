//alert('its working')

// NAV BAR LOGIC!
let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('#burguer_menu');
let menu = document.querySelector('#menu');
let formulario = document.querySelectorAll('.field');
const btnSwitch = document.querySelector('#bdark');
const darkMode = localStorage.getItem('darkmode')

//TODO: Arreglar el botón entre páginas para que recuerde mi desición, en cualquiera de estas.

if(darkMode == 'true') {
  document.body.classList.add('darkmode')
  btnSwitch.classList.add('active');


}else{
  document.body.classList.remove('darkmode')
  btnSwitch.classList.remove('active');

}
//DARKMODE LOGIC:



btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  btnSwitch.classList.toggle('active');

  //Save config in localStorage:
  if(btnSwitch.classList.contains('active')){
    localStorage.setItem('darkmode', 'true');
  }else{
    localStorage.setItem('darkmode', 'false');
  }
});

menuToggle.addEventListener('click', e=>{
  menu.classList.toggle('show');
  if(menu.classList.contains('show')) {
    menuToggleIcon.innerHTML = 'close'
  }else{
    menuToggleIcon.innerHTML = 'view_headline'
  }
})




// function addDarkmode(arr){
//   arr.map( function(x)=>{
//     x.classList.add('darkmode');
//   })
// }
//
// function removeDarkmode(arr){
//   arr.map(function(x)=>{
//     x.classList.remove('darkmode');
//   })
// }
//Ask for actual mode:
