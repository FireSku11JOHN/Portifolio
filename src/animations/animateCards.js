import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const AnimateCards = (trigger) => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: {trigger},
                scrub: true,
                markers: true,
                start: "top 800px",
                end: "bottom 920px"
            }
        })
            .fromTo("#model-1", {
                y: 160,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })
            .fromTo("#model-2", {
                y: 160,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })
            .fromTo("#model-3", {
                y: 160,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })
    }, el)

    return () => {
        gsap.killTweensOf(".models-item")
    }
}