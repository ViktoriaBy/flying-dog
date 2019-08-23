const flightPath = {
    curviness:1.25,
    autoRotate: true,
    values:[
        {x: 100, y: -20},
        {x: 350, y:10},
        {x:500, y: 100},
        {x: 750, y: -100},
        {x: 400, y: -40},
        {x: 600, y:100},
        {x: 750, y:100},
      
        {x: window.innerWidth,  y:-250},
    ]
}

const tween = new TimelineLite();

tween.add(
   TweenLite.to(".flying-dog", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
   }) 
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
triggerElement: ".animation",
duration: 2000,
triggerHook: 0
})

.setTween(tween)

.setPin('.animation')
.addTo(controller);