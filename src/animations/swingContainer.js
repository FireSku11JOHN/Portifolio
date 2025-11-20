import gsap from "gsap";

export const animateSwingContainer = (container) => {
    return gsap.to(container, {
        yPercent: 9,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
    });
}
