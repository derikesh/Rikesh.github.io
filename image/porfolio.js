
// scroll to top

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
    showbtn.classList.toggle('top-btn',window.scrollY > 100);
});

// // contact form

// var box = document.getElementById('contact');
// var box = document.getElementById('box')
// box.addEventListener('click',()=> {

//     box.classList.add('wow','animate__animated','animate__bounceInDown');

// });



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


