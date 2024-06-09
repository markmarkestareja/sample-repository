// .........About tablinks...
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// SCROLL ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-items");
            } else {
                entry.target.classList.remove("show-items");
            }
        });
    });

    const scrollScale = document.querySelectorAll(".scroll-scale");
    scrollScale.forEach((el) => observer.observe(el));

    const scrollBottom = document.querySelectorAll(".scroll-bottom");
    scrollBottom.forEach((el) => observer.observe(el));

    const scrollTop = document.querySelectorAll(".scroll-top");
    scrollTop.forEach((el) => observer.observe(el));

    const scrollLeft = document.querySelectorAll(".scroll-left");
    scrollLeft.forEach((el) => observer.observe(el));

    const scrollRight = document.querySelectorAll(".scroll-right");
    scrollRight.forEach((el) => observer.observe(el));

    const scrollDrop = document.querySelectorAll(".scroll-drop");
    scrollDrop.forEach((el) => observer.observe(el));
});
// END OF SCROLL ANIMATION


// SCROLL UP AND DOWN OF HEADER
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('hide');
    } else {
        // Scroll up
        header.classList.remove('hide');
    }

    lastScrollTop = scrollTop;
});

// END SCROLL UP AND DOWN OF HEADER

