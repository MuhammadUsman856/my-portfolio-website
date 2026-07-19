/*======================================
        MOBILE MENU
======================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("open");

    });

});


/*======================================
        STICKY NAVBAR
======================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,.95)";

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    }

    else {

        header.style.background = "rgba(15,23,42,.80)";

        header.style.boxShadow = "none";

    }

});


/*======================================
        SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*======================================
        ACTIVE NAVIGATION
======================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop &&
           window.pageYOffset < sectionTop + sectionHeight){

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");

        }

    });

});


/*======================================
        SCROLL TO TOP BUTTON
======================================*/

/* Create Button */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "scroll-top";

document.body.appendChild(topButton);

/* Show & Hide */

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});

/* Click Event */

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*======================================
        FOOTER YEAR
======================================*/

const yearElement = document.getElementById("year");

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}

console.log("Portfolio Part 1 Loaded Successfully");
/*======================================
        TYPING ANIMATION
======================================*/

const typingElement = document.querySelector(".welcome");

const words = [

    "WEB DEVELOPER",

    "FRONT-END DEVELOPER",

    "PROBLEM SOLVER",

    "CONTINUOUS LEARNER"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect(){

    if(!typingElement) return;

    const current = words[wordIndex];

    if(!deleting){

        typingElement.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect,deleting?50:120);

}

typingEffect();


/*======================================
        SCROLL REVEAL
======================================*/

const revealItems = document.querySelectorAll(

".service-card,.project-card,.skill-category,.why-card,.education-card,.contact-card,.stat-card"

);

function revealAnimation(){

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

revealAnimation();


/*======================================
        COUNTER ANIMATION
======================================*/

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats || started) return;

    if(window.scrollY > stats.offsetTop-500){

        started = true;

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            if(isNaN(target)) return;

            let value = 0;

            const speed = target/60;

            const update=()=>{

                value += speed;

                if(value<target){

                    counter.innerText=Math.floor(value)+"+";

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=target+"+";

                }

            }

            update();

        });

    }

});


/*======================================
        HERO IMAGE FLOAT
======================================*/

const profileImage=document.querySelector(".hero-image img");

if(profileImage){

setInterval(()=>{

profileImage.classList.toggle("up");

},2500);

}


/*======================================
        PRELOADER
======================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


console.log("Premium Portfolio Loaded Successfully");
