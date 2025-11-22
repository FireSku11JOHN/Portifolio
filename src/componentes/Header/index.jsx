import { useEffect, useRef } from "react"
import Logo from "../../assets/Logo.svg"
import gsap from "gsap"

import { ButtonHeader } from "../ButtonHeader"
import { ScrollTrigger } from "gsap/all"

export const Header = () => {
    const btn = useRef()
    gsap.registerPlugin(ScrollTrigger) 

    useEffect(()=> {
        gsap.to(btn.current, {
            width: '100%',
            scrollTrigger: {
            trigger:'.aboutSec',
            endTrigger: '.end-trigger',
            end: 'bottom bottom',
            scrub: true,
            // markers: true
            }
        })
    }, [])

    const normalButtonStyles = "relative overflow-hidden bg-bg-button-header text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 cursor-pointer max-mobile:text-[12px]"

    return (
        <nav className="fixed z-50 w-full">
            <div className="flex gap-3 mx-6 my-3 xs:hidden">
                <img src={Logo} className="bg-bg-logo h-8 py-2 rounded inline-block flex-1 object-contain cursor-pointer"></img>
                <ButtonHeader className="bg-light-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 cursor-pointer">
                    CONTATOS
                </ButtonHeader>
            </div>
            <div className="flex gap-3 mx-6 my-3">
                <img src={Logo} className="bg-bg-logo h-8 py-2 rounded inline-block flex-1 object-contain max-xs:hidden cursor-pointer"></img>
                <ButtonHeader className={normalButtonStyles} href="#">
                    HOME
                </ButtonHeader>
                <ButtonHeader  className={normalButtonStyles} href="#about">
                    <div className="relative z-10">SOBRE</div>
                    <div ref={btn} className="absolute z-5 transition delay-75 bg-light top-0  h-full"></div>
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles} href="#skills">
                    SKILLS
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles} href="#projects">
                    PROJETOS
                </ButtonHeader>
                <ButtonHeader className="bg-light-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 max-xs:hidden cursor-pointer" href="#contacts">
                    CONTATOS
                </ButtonHeader>
            </div>
        </nav>
    )
}
