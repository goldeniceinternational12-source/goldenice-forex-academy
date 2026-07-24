/* =====================================
   GOLDENICE INTERNATIONAL
   GLOBAL JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded", () => {



/* ==========================
   PRELOADER
========================== */


const preloader = document.getElementById("preloader");


if(preloader){

    setTimeout(()=>{

        preloader.classList.add("hide");

    },2000);

}





/* ==========================
   MOBILE MENU
========================== */


const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


if(menuToggle && navLinks){



    menuToggle.addEventListener("click",()=>{


        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("open");


    });



}






/* ==========================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================== */


if(navLinks && menuToggle){



document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


        menuToggle.classList.remove("open");


    });



});



}







/* ==========================
   CLOSE MENU OUTSIDE CLICK
========================== */


document.addEventListener("click",(e)=>{


if(menuToggle && navLinks){


    if(
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
    ){


        navLinks.classList.remove("active");

        menuToggle.classList.remove("open");


    }


}



});









/* ==========================
   NAVBAR SCROLL EFFECT
========================== */


const navbar = document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


if(navbar){


    if(window.scrollY > 50){


        navbar.classList.add("scrolled");


    }
    else{


        navbar.classList.remove("scrolled");


    }


}



});










/* ==========================
   COUNTER ANIMATION
========================== */


const counters = document.querySelectorAll(".counter");



counters.forEach(counter=>{


    counter.innerText="0";


    const updateCounter = ()=>{


        const target =
        Number(counter.dataset.target);



        const current =
        Number(counter.innerText);



        const increment =
        target / 100;




        if(current < target){


            counter.innerText =
            Math.ceil(current + increment);


            setTimeout(updateCounter,20);



        }
        else{


            counter.innerText = target;


        }


    };



    updateCounter();



});









/* ==========================
   SCROLL REVEAL
========================== */


const revealElements =
document.querySelectorAll(".reveal");



const revealOnScroll = ()=>{


revealElements.forEach(element=>{


    const windowHeight =
    window.innerHeight;



    const elementTop =
    element.getBoundingClientRect().top;



    if(elementTop < windowHeight - 100){


        element.classList.add("active");


    }



});



};



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();









/* ==========================
   SCROLL TO TOP
========================== */


const scrollBtn =
document.getElementById("scrollTopBtn");



if(scrollBtn){



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        scrollBtn.classList.add("show");


    }
    else{


        scrollBtn.classList.remove("show");


    }


});





scrollBtn.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});



}










/* ==========================
   CURSOR GLOW
========================== */


const cursor =
document.querySelector(".cursor-glow");



if(cursor){



document.addEventListener("mousemove",(e)=>{


    cursor.style.left =
    e.clientX + "px";



    cursor.style.top =
    e.clientY + "px";



});



}







});