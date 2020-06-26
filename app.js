// gsap.from("#header-animation", {duration: 4, scale: 0.5});
//  gsap.to("#header-animation", {duration: 4,  scale:1, ease: "sine.out"});
// The headr animation
gsap.from("#virus-1", {duration: 2.8, scale: 0.5});
gsap.to("#virus-1", {duration: 2.8,  scale:1, ease: "sine.out",  rotation: 360, repeat: -1});

gsap.from("#virus-2", {duration: 3, scale: 0.5});
gsap.to("#virus-2", {duration: 3, x: 0, scale: 1, ease: "sine.out",  rotation: -360, repeat: -1});

gsap.from("#virus-3", {duration: 3.5, scale: 0.5});
gsap.to("#virus-3", {duration: 3.5, scale: 1, x: 0, ease: "sine.out",  rotation: 360, repeat: -1});

gsap.from("#virus-4", {duration: 3.8, y: 0, scale: 0.8});
gsap.to("#virus-4", {duration: 3.8, scale: 1, y: 2, ease: "sine.out",   repeat: -1});

gsap.from("#girl", {duration: 4.8, scale: 0.8, ease: "sine.inOut", y: 0, transformOrigin: 'center'});
gsap.to("#girl", {duration: 4, y: 50, scale: 0.9,  ease: "sine.out", transformOrigin: 'center',  repeat: -1});

//The about section animation
gsap.from("#virus-images", {duration: 3, scale: 0.5});
gsap.to("#virus-images", {duration: 3, x: 0, scale: 1, ease: "sine.out",  repeat: -1});

gsap.from("#virus-red", {duration: 3.5, scale: 0.5});
gsap.to("#virus-red", {duration: 3.5, scale: 1, x: 0, ease: "sine.out",  rotation: 360, repeat: -1});

gsap.from("#virus-green", {duration: 3.7, scale: 0.5});
gsap.to("#virus-green", {duration: 3.7, scale: 1, x: 0, ease: "sine.out",  rotation: 360, repeat: -1});

gsap.from("#virus-yellow", {duration: 3.9, scale: 0.5});
gsap.to("#virus-yellow", {duration: 3.9, scale: 1, x: 0, ease: "sine.out",  rotation: 360, repeat: -1});