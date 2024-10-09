function animate() {
    var path = `M 10 100 Q 500 100 990 100`

    var finalPath = `M 10 100 Q 500 100 990 100`



    var string = document.querySelector("#string")

    // string.addEventListener("mouseenter", function(dets) {
    //     console.log(dets)
    // })
    // string.addEventListener("mouseleave", function() {
    //     console.log("leaved")
    // })

    string.addEventListener("mousemove", function(dets) {
        // console.log(dets.x)
        // console.log(dets.y)
        path = `M 10 100 Q ${dets.x} ${dets.y}  990 100`
        gsap.to("svg path", {
            attr: {
                d: path
            },
            duration: 0.5,
            ease: "power3.out"
        })
    })

    string.addEventListener("mouseleave", function() {
        gsap.to("svg path ", {
            attr: {
                d: finalPath
            },
            duration: 1.4,
            ease: "elastic.out(1,0.2)"
        })
    })
}




function page1animation() {
    var tl = gsap.timeline()

    tl.from("nav h1,nav h4 ,nav button", {
        y: -40,
        duration: 0.4,
        delay: 0.5,
        opacity: 0,
        stagger: 0.3
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5

    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4

    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part2 img", {
        x: 200,
        opacity: 0,
        duration: 0.5
    }, "-=0.3")

    tl.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6

    })
}

function page2animation() {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top -90%",
            scrub: 3,

        }
    })

    tl1.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    })



    //line 1
    tl1.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,

    }, "usman")

    tl1.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,

    }, "usman")


    //line2
    tl1.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,

    }, "babu")

    tl1.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1,

    }, "babu")

    //line3

    tl1.from(".elem.line3.left", {
        x: -300,
        opacity: 0,
        duration: 1,

    }, "usman3")

    tl1.from(".elem.line3.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "usman3")


    //line4
    tl1.from(".elem.line4.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "usmana")

    tl1.from(".elem.line4.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "usmana")


}

function page3animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            // markers: true,
            start: "top 70%",
            end: "top 40%",
            scrub: 3,

        }
    })

    tl2.from(".container1", {
        x: -300,
        opacity: 0,
        duration: 1
    })
}

function page4animation() {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4",
            scroller: "body",
            // markers: true,
            start: "top 120%",
            end: "top 20%",
            scrub: 3,

        }
    })

    tl1.from(".services", {
        x: -300,
        opacity: 0,
        duration: 0.5
    })

}


function page5animation() {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section5",
            scroller: "body",
            // markers: true,
            start: "top 100%",
            end: "top 20%",
            scrub: 3,

        }

    })
    tl1.from(".case-studies", {
        x: -300,
        opacity: 0,
        duration: 0.5
    }, )
}
page4animation()
page1animation()
page2animation()
page3animation()
page5animation()

animate()
    // page1animation()
    // gsap.from("nav h1", {
    //     opacity: 0,
    //     y: -30,
    //     duration: 1,
    //     delay: 1
    // })
    // gsap.from("nav h4, nav button", {
    //     opacity: 0,
    //     y: -30,
    //     duration: 1,
    //     delay: 1
    // })

// gsap.from(".services h3",{
//     x:-100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//           trigger:"services h3",
//           scroller:"body",
//           markers:true,
//           start:"top 50%",

//     }
// })