import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const animateSplitTextAbout = async (element) => {
    await document.fonts?.ready;

    gsap.set(element, { opacity: 1 });

    const split = new SplitText(element, {
        type: "words",
        wordsClass: "word",
    });

    gsap.from(split.words, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        ease: "back",
    });

    return { split };
};
