import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const animateSplitText = (element, options = {}) => {
    const split = new SplitText(element, {
        type: "chars, words, lines",
        linesClass: "line",
    });

    const tl = gsap.timeline();

    tl.from(split.lines, {
        xPercent: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "expo.out",
        ...options,
    });
    
    tl.to(split.chars, {
        color: "#7dd3fc",      // azul claro
        scale: 1.3,
        letterSpacing: "0.2em",
        duration: 0.6,
        stagger: 0.03,         // cria a onda
        ease: "power1.out"
    });

    // 3. Volta pra cor original
    tl.to(split.chars, {
        color: "#ffffff",      // cor original do texto
        duration: 0.4,
        stagger: 0.03,
        ease: "power1.inOut"
    });

    return { tl, split };
};
