const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var menuIcon = document.querySelector(".ri-menu-line");
var links = document.querySelector(".links")

menuIcon.addEventListener("click",function(){
    links.classList.toggle('left-0');
})

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


gsap.from(".nav .magnet-target",{
    x:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:.2
})

gsap.from(".main h1,p,button,h2",{
    x:-1000,
    opacity:0,
    duration:1,
    delay:0.4
})

gsap.from("img",{
    x:500,
    opacity:0,
    duration:0.6,
    delay:0.4
})