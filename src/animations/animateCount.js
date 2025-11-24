import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

/**
 * @param {string} elementSelector
 * @param {string} targetValueString
 * @returns {gsap.core.Tween}
 */
export const animateCount = (elementSelector, targetValueString) => {
    gsap.registerPlugin(ScrollTrigger)

    const finalValue = parseInt(targetValueString.replace(/\D/g, ''), 10)
    const prefix = targetValueString.match(/^[^0-9]*/) || '' 
    const counter = { num: 0 }

    const anim = gsap.to(counter, {
        num: finalValue,
        duration: 2,
        ease: "power1.out",
        
        onUpdate: () => {
            const element = document.querySelector(elementSelector)
            if (element) {
                element.textContent = `${prefix}${Math.round(counter.num)}`
            }
        },
        scrollTrigger: {
            trigger: elementSelector,
            start: "top bottom", 
            onLeaveBack: self => self.kill(),
        }
    })

    return anim
}