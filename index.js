//alert('its working')

// NAV BAR LOGIC!
let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('#burguer_menu');
let menu = document.querySelector('#menu');



menuToggle.addEventListener('click', e=>{
  menu.classList.toggle('show');
  if(menu.classList.contains('show')) {
    menuToggleIcon.innerHTML = 'close'
  }else{
    menuToggleIcon.innerHTML = 'view_headline'
  }
})

//DARKMODE LOGIC:

const btnSwitch = document.querySelector('#bdark');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  btnSwitch.classList.toggle('active');

  //Save config in localStorage:
  if(document.body.classList.contains('darkmode')){
    localStorage.setItem('darkmode', 'true');
  }else{
    localStorage.setItem('darkmode', 'false');
  }
});

//Ask for actual mode:

if(localStorage.getItem('darkmode') == 'true') {
  document.body.classList.add('darkmode')
  btnSwitch.classList.add('active');
}else{
  document.body.classList.remove('darkmode')
  btnSwitch.classList.remove('active');
}
