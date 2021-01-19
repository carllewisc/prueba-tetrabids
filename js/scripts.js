let html = document.querySelector("html");
let toggleOpen = document.getElementById('toggle-open');
let toggleClose = document.getElementById('toggle-close');
let navMenu = document.getElementsByClassName('nav-menu')[0];

html.addEventListener('click', function () {
  navMenu.classList.remove('open');
});

toggleOpen.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('open');
});

toggleClose.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('open');
});

/* Boton para ir al top*/
$(document).ready(function(){
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 1000);
    });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });
});