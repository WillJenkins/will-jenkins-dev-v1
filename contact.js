const tl = gsap.timeline({defaults: { ease: "power1.out" } });


tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".contact-content", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo(".contact-links", {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5");