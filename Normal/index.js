var tl = gsap.timeline();

// Animations for the ".box" element
tl.from(".box", {
    duration: 0.5,
    scale: 4,
    opacity: 0
});

// Animations for the ".tagline" element
tl.from(".tagline", {
    x: -1200,
    duration: 0.5,
    opacity: 0,
});

// Animations for the ".cafe_name" element with ScrollTrigger
gsap.from(".cafe_name", {
    x: 100,
    duration: 1,
    color: "", // Replace with the desired color
});

// ScrollTrigger for "h2" and ".button" elements
gsap.from("h2, .button", {
    y: 200,
    duration: 1,
    stagger: 0.5,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "h2, .button", // These elements trigger the animation
        scroller: "body",
        markers: true, // Enable markers for debugging
        scrub: 5 //Use to trigger and untrigger reverse action
    }
});
gsap.from(".bg", {
    y: -200,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".bg h2 p a",
        scroller: "body",

    }
});



// ScrollTrigger for ".ketchup-bottle" element
gsap.from(".ketchup-bottle", {
    y: 90,
    duration: 1,
    repeat: -1,
    yoyo: true,
    opacity: 0,
    scrollTrigger: {
        trigger: ".ketchup-bottle", // This element triggers the animation
        scroller: "body",
        markers: true, // Enable markers for debugging
    }
});




const scroll = new LocomotiveScroll({
    el: document.querySelector(".page"), // Replace with the selector for your scroll container
    smooth: true,
    direction: "vertical",
});