import gsap from "gsap";

export const animateColorWave = (chars, color = "#7dd3fc") => {
    return gsap.to(chars, {
        color,
        duration: 0.5,
        stagger: 0.03,
        ease: "power2.out",
    });
};
