// gsap.from("#header-animation", {duration: 4, scale: 0.5});
//  gsap.to("#header-animation", {duration: 4,  scale:1, ease: "sine.out"});

gsap.from("#virus-1", {duration: 2, scale: 0.5});
gsap.to("#virus-1", {duration: 2,  scale:1, ease: "sine.out",  rotation: 360, repeat: -1});

gsap.from("#virus-2", {duration: 3, scale: 0.5});
gsap.to("#virus-2", {duration: 3, x: 0, ease: "sine.out",  rotation: -360, repeat: -1});

gsap.from("#virus-3", {duration: 3.5, scale: 0.5});
gsap.to("#virus-3", {duration: 3.5, scale: 1, x: 0, ease: "sine.out",  rotation: 360, repeat: -1});

gsap.from("#virus-4", {duration: 3.8, scale: 0.8});
gsap.to("#virus-4", {duration: 3.8, scale: 1,  ease: "sine.out",   repeat: -1});

gsap.from("#girl", {duration: 1.8, ease: "sine.inOut", y: 0, transformOrigin: 'center', repeatDelay: 0.5});
gsap.to("#girl", {duration: 2, y: 50,  ease: "sine.out", repeatDelay: 0.5, repeat: -1});