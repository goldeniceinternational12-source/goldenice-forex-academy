// ===================================
// GOLDENICE INTERNATIONAL
// PREMIUM JAVASCRIPT
// ===================================



// ===================================
// MOBILE MENU
// ===================================


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if(menuToggle && navLinks){


    menuToggle.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


    });



    // CLOSE MENU AFTER CLICK

    document.querySelectorAll(".nav-links a")
    .forEach(link=>{


        link.addEventListener("click",()=>{


            navLinks.classList.remove("active");


        });


    });


}




// ===================================
// PRELOADER
// ===================================


window.addEventListener("load",()=>{


    const preloader =
    document.getElementById("preloader");


    if(preloader){


        setTimeout(()=>{


            preloader.classList.add("hide");


        },1800);



    }



});






// ===================================
// SCROLL REVEAL
// ===================================


const reveals =
document.querySelectorAll(".reveal");



function revealElements(){


    reveals.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;



        const screen =
        window.innerHeight;



        if(position < screen - 100){


            element.classList.add("active");


        }



    });



}



window.addEventListener(
"scroll",
revealElements
);



revealElements();






// ===================================
// COUNTER ANIMATION
// ===================================


const counters =
document.querySelectorAll(".counter");



counters.forEach(counter=>{


    let started=false;



    function startCounter(){


        const position =
        counter.getBoundingClientRect().top;



        if(position < window.innerHeight - 100 && !started){


            started=true;



            const target =
            Number(counter.dataset.target);



            let count=0;



            const increment =
            target / 80;



            function update(){


                if(count < target){


                    count += increment;


                    counter.innerHTML =
                    Math.ceil(count);



                    requestAnimationFrame(update);


                }


                else{


                    counter.innerHTML =
                    target + "+";


                }



            }


            update();



        }



    }



    window.addEventListener(
    "scroll",
    startCounter
    );



    startCounter();



});







// ===================================
// NAVBAR SCROLL EFFECT
// ===================================


const navbar =
document.querySelector(".navbar");



if(navbar){



    window.addEventListener(
    "scroll",
    ()=>{


        if(window.scrollY > 50){


            navbar.classList.add("scrolled");


        }

        else{


            navbar.classList.remove("scrolled");


        }



    });



}







// ===================================
// PAGE FADE EFFECT
// ===================================


window.addEventListener(
"load",
()=>{


    document.body.style.opacity="1";


});

// ===================================
// SCROLL TO TOP
// ===================================

const scrollTopBtn =
document.getElementById("scrollTopBtn");

if(scrollTopBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            scrollTopBtn.classList.add("show");

        }

        else{

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// ===================================
// CURSOR GLOW
// ===================================

const glow =
document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

});

}

// ===================================
// SCROLL PROGRESS BAR
// ===================================

const progressBar =
document.getElementById("progressBar");

if(progressBar){

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});

}