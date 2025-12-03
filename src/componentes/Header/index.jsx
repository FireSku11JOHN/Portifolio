import { useEffect, useRef } from "react"
import Logo from "../../assets/Logo.svg"
import { ButtonHeader } from "../ButtonHeader"
import { ButtonFill } from "../../animations/buttonFill"

export const Header = () => {
    useEffect(() => {
        const animations = []

        // 1. Animação para a seção "SOBRE" (id="#btn-about" -> trigger="#about")
        const aboutAnim = ButtonFill("#btn-about", "#about")
        animations.push(aboutAnim)

        // 2. Animação para a seção "SKILLS" (id="#btn-skills" -> trigger="#skills")
        const skillsAnim = ButtonFill("#btn-skills", "#skills")
        animations.push(skillsAnim)

        // 3. Animação para a seção "PROJETOS" (id="#btn-projects" -> trigger="#projects")
        const projectsAnim = (ButtonFill("#btn-projects", "#projects"))
        animations.push(projectsAnim)

        // 3. Animação para a seção "CONTATOS" (id="#btn-contacts" -> trigger="#contacts")
        const contactsAnim = (ButtonFill("#btn-contacts", "#contacts"))
        animations.push(contactsAnim)


        return () => {
            animations.forEach(anim => anim.scrollTrigger.kill())
        }
    }, [])

    const normalButtonStyles = "relative overflow-hidden bg-bg-button-header backdrop-blur-xs text-center text-dark text-[14px] font-medium leading-[120%] tracking-[1px] py-2 rounded flex-1 cursor-pointer max-mobile:text-[12px]"

    const divFill = "absolute z-5 transition delay-75 bg-light top-0  h-full"

    return (
        <nav className="fixed z-50 w-full">
            <div className="flex gap-3 mx-6 my-3 xs:hidden">
                <img src={Logo} className="bg-bg-logo h-8 py-2 rounded inline-block flex-1 object-contain cursor-pointer"></img>
                <ButtonHeader className="bg-light-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 cursor-pointer">
                    HOME
                </ButtonHeader>
            </div>
            <div className="flex gap-3 mx-6 my-3">
                <img src={Logo} className="bg-bg-logo backdrop-blur-xs h-8 py-2 rounded inline-block flex-1 object-contain max-xs:hidden cursor-pointer"></img>

                <ButtonHeader className={normalButtonStyles} href="#about">
                    <div className="relative z-10">SOBRE</div>
                    <div id="btn-about" className={divFill}></div>
                </ButtonHeader>
                
                <ButtonHeader className={normalButtonStyles} href="#skills">
                    <div className="relative z-10">SKILLS</div>
                    <div id="btn-skills" className={divFill}></div>
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles} href="#projects">
                    <div className="relative z-10">PROJETOS</div>
                    <div id="btn-projects" className={divFill}></div>
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles} href="#contacts">
                    <div className="relative z-10">CONTATOS</div>
                    <div id="btn-contacts" className={divFill}></div>
                </ButtonHeader>
                <ButtonHeader className="bg-light-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 max-xs:hidden cursor-pointer" href="#">
                    HOME
                </ButtonHeader>
            </div>
        </nav>
    )
}
