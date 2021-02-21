 $(".slider ").owlCarousel({
     loop: true,
     responsive: {
         0: {
             items: 1,
         },
         600: {
             items: 3,
         },
         1200: {
             items: 4,
         }
     }
 });

 var owl = $('.slider');
 owl.owlCarousel();
 // Go to the next item
 $('.customNextBtn').click(function() {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
 $('.customPrevBtn').click(function() {
     // With optional speed parameter
     // Parameters has to be in square bracket '[]'
     owl.trigger('prev.owl.carousel', [300]);
 });


 const baixo = document.querySelectorAll('[data-anime="baixo"]');
 const baixo2 = document.querySelectorAll('[data-anime="baixo2"]');
 const baixo3 = document.querySelectorAll('[data-anime="baixo3"]');
 const animacaoClass = 'animacao';
 const elemento3 = document.querySelectorAll('[data-anime="esquerda2"]');
 const elemento4 = document.querySelectorAll('[data-anime="esquerda3"]');
 const elemento5 = document.querySelectorAll('[data-anime="esquerda4"]');

 function animaScroll() {

     const windowTop = window.pageYOffset - 300;
     baixo.forEach(function(baix1) {
         if ((windowTop) > baix1.offsetTop) {
             baix1.classList.add(animacaoClass);
         } else {
             baix1.classList.remove(animacaoClass);
         }
     });

     baixo2.forEach(function(baix2) {
         var tempobaixo1 = setInterval(function() {
             clearInterval(tempobaixo1);
             if ((windowTop) > baix2.offsetTop) {
                 baix2.classList.add(animacaoClass);
             } else {
                 baix2.classList.remove(animacaoClass);
             }
         }, 500);
     });

     baixo3.forEach(function(baix3) {
         var tempobaixo2 = setInterval(function() {
             clearInterval(tempobaixo2);
             if ((windowTop) > baix3.offsetTop) {
                 baix3.classList.add(animacaoClass);
             } else {
                 baix3.classList.remove(animacaoClass);
             }
         }, 1000);
     });

     const windowTop3 = window.pageYOffset - 1900;
     elemento3.forEach(function(element3) {
         if ((windowTop3) > element3.offsetTop) {
             element3.classList.add(animacaoClass);
         } else {
             element3.classList.remove(animacaoClass);
         }
     });

     elemento4.forEach(function(element4) {
         var tempo = setInterval(function() {
             clearInterval(tempo);
             if ((windowTop3) > element4.offsetTop) {
                 element4.classList.add(animacaoClass);
             } else {
                 element4.classList.remove(animacaoClass);
             }
         }, 400);
     });

     elemento5.forEach(function(element5) {
         var tempo2 = setInterval(function() {
             clearInterval(tempo2);
             if ((windowTop3) > element5.offsetTop) {
                 element5.classList.add(animacaoClass);
             } else {
                 element5.classList.remove(animacaoClass);
             }
         }, 800);
     });
 }

 window.addEventListener('scroll', function() {
     animaScroll();
 });


 function typeWriter(elemento) {
     const textoArray = elemento.innerHTML.split('');
     elemento.innerHTML = '';
     textoArray.forEach((letra, i) => {
         setTimeout(() => {
             elemento.innerHTML += letra;
         }, 180 * i);
     });
 }

 const titulo = document.querySelector('.titulo1');
 typeWriter(titulo);

 var intervaloTexto = setInterval(function() {
     clearInterval(intervaloTexto);
     document.querySelector('.textowriter').style.display = 'inline';
     const titulo = document.querySelector('.textowriter');
     typeWriter(titulo);
 }, 6000);

 document.querySelector('body').style.overflow = 'hidden';

 var intervalo2 = setInterval(function() {
     clearInterval(intervalo2);

     let tl = new TimelineMax();

     tl.fromTo('.carregando', 0.9, {
         height: '100vh'
     }, {
         height: '0%',
         ease: Expo.easeInOut
     });
     document.querySelector('body').style.overflow = 'auto';
 }, 5000);