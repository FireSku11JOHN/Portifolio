import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export const ButtonFill = (buttonID, sectionID) => {
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(buttonID, {
        width: '100%',
        scrollTrigger: {
            trigger: sectionID,
            end: 'bottom bottom',
            scrub: true,
            // markers: true
        }
    })
    
    return anim
}