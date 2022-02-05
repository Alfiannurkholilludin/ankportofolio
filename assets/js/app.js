
window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    

})

// Animation GSAP loading
const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });

tl1.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl1.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl1.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl1.fromTo(".landing", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl1.fromTo("product", { opacity: 0 }, { opacity: 1, duration: 1 });