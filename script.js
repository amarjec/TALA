// var loco = function() {
//     gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   // follwoing line is not required to work pinning on touch screen

//   /* pinType: document.querySelector("#main").style.transform
//     ? "transform"
//     : "fixed"*/
// });


// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

// }
// loco()



//                           js dom 
var menu = document.querySelector("#nav-prt2 i")
var fs = document.querySelector("#fs-nav")
var flag = true
menu.addEventListener("click", function(){
    if (flag == true) {
        fs.style.top = "0%"
        document.querySelector("#nav h2").style.color = "black"
        document.querySelector("#nav-prt2 h3").style.color = "black"
        menu.style.color = "black"
        flag = false


        // fullscr nav 
        gsap.from ("#fslbtm .first",{
            x: -400,
            y: 100,
            opacity: 0,
            delay: .6,
            duration: .6,
        })
        gsap.from ("#fsrbtm .first",{
            delay: .6,
            x: 400,
            y: 100,
            opacity: 0,
            duration: .6,
        })
        
        
        
        gsap.from ("#fslbtm .second",{
            x: -400,
            y: 100,
            opacity: 0,
            delay: 1.3,
            duration: .6,
        })
        gsap.from ("#fsrbtm .second",{
            delay: 1.3,
            x: 400,
            y: 100,
            opacity: 0,
            duration: .6,
        })
     }
    else {
        fs.style.top = "-100%"
        document.querySelector("#nav h2").style.color = "white"
        document.querySelector("#nav-prt2 h3").style.color = "white"
        menu.style.color = "white"
        flag = true
    }
})


//                                          GSAP



// main
var tl = gsap.timeline()

tl
.from("#page1 h1", {
    delay:1,
    y:80,
    duration:0.6,
    opacity:0,
})
.from ("#page1 h2", {
    y:10,
    duration:.2,
    opacity:0,
})
.from ("#page1 h3", {
    y:20,
    duration:.2,
    opacity:0
})

// gsap.set("#page2 img", {rotateX:180})
gsap.to("#page2", {
    scale:1,
    // rotateX: -180,
    // duration: 1,
    // opacity:1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 3,
        // pin: true,
    }
})


// gsap.to("#page4 #btm", {
//     rotate: "360deg",
//     duration:2,
//     ease: "none"

// })
gsap.set("#page3 h1", {rotateX:180, opacity:0,})
gsap.to("#page3 h1", {
    rotateX: 0,
    opacity:1,
    // y:10,
    // x: 300,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2
    }
})



gsap.from("#page4 #ltext h1", {
    x: -900,
    opacity:1,
    
    scrollTrigger: {
        trigger: "#page4 #ltext h1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2
    }
})
gsap.from("#page4 #rtext h1", {
    x: 900,
    opacity:1,
    
    scrollTrigger: {
        trigger: "#page4 #rtext h1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 2
    }
})


gsap.from("#page4 #ltxt2 h1", {
    x: -500,
    opacity:1,
    
    scrollTrigger: {
        trigger: "#page4 #ltxt2 h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2
    }
})
gsap.from("#page4 #rtxt2 h1", {
    x: 500,
    opacity:1,
    
    scrollTrigger: {
        trigger: "#page4 #rtxt2 h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2
    }
})




gsap.from("#page4 #btm h1",{
    y:40,
    opacity:0,
    scrollTrigger: {
        trigger: "#page4 #btm h1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 5
    }

})
gsap.from("#page4 #btm h2",{
    y:40,
    opacity:0,
    scrollTrigger: {
        trigger: "#page4 #btm h2",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 5
    }

})




var oneone = function() {
    var slide1 = document.querySelectorAll("#page5 .slide1 h1")
slide1.forEach(function(elem) {
    gsap.to (elem, {
        transform: 'translateX(-100%)',
        // duration: 4,
        scrollTrigger: {
            trigger : "page5",
            scroller: "body",
            scrub:5,
        }
    })
})


var slide2 = document.querySelectorAll("#page5 .slide2 h1")

slide2.forEach(function(elem) {
    gsap.to(elem, {
        transform: 'translateX(0%)',
        // duration: 4,
        scrollTrigger: {
            trigger : "page5",
            scroller: "body",
            scrub:5,
        }
    })
})
}
oneone()


gsap.from("#page6 .pg", {
    stagger: .1,
    // rotateX: 0,
    opacity:0,
    y:100,
    // x: 300,
    scrollTrigger: {
        trigger: "#page6 h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2
    }
})





