// tab java script
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


//   swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// model box

const open = document.getElementById('contact');
const model = document.getElementById('box');
const close = document.getElementById('close');

open.addEventListener('click',()=> {
    model.classList.add('show');
    box.classList.add('wow','animate__animated','animate__bounceInDown');           
});

close.addEventListener('click',()=>{
    model.classList.remove('show');
});

// carosel call js
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// swiper 1
$('.basic-carousel ').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:false,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      },
      1500:{
          items:1
      },
  }
})


// center

$('.nonloop').owlCarousel({
  center: false,
  items:1,  
  loop:false,
  margin:600,
  responsive:{
    0:{
      items:1,
      
  },
  600:{
      items:1
  },
  1000:{
      items:1
  },
  1500:{
      items:2
  },
  }
});


$('.nonloop').owlCarousel({
  center: true,
  items:1,
  loop:false,
  margin:600,
  responsive:{
    0:{
      items:1,
      
  },
  600:{
      items:2
  },
  1000:{
      items:1
  },
  1500:{
      items:2
  },
  }
});

// scroll
var scrollup = document.getElementById("scroll-top");
scrollup.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
});

window.addEventListener('scroll',function(){
    var showbtn = document.getElementById('btn-top');
    showbtn.classList.toggle('top-btn', window.scrollY > 100);
});

// image 

var btn = document.getElementById('figma_btn');
var img = document.getElementById('figma_img');
btn.addEventListener('mouseover',function(){
 img.classList.remove('hidden')
});
btn.addEventListener('mouseleave',function(){  
  img.classList.add('hidden');
});

// html img
var btnn = document.getElementById('html_btn');
var imgg = document.getElementById('html_img');
btnn.addEventListener('mouseover',function(){
 imgg.classList.remove('hidden')
});
btnn.addEventListener('mouseleave',function(){  
  imgg.classList.add('hidden');
})





