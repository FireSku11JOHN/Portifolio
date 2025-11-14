import Logo from "../../assets/Logo.svg"

import { ButtonHeader } from "../ButtonHeader"

export const Header = () => {

    const normalButtonStyles = "bg-bg-button-header text-center text-light text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 cursor-pointer max-mobile:text-[12px]"

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
                <ButtonHeader className={normalButtonStyles}>
                    HOME
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles}>
                    SOBRE
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles}>
                    SKILLS
                </ButtonHeader>
                <ButtonHeader className={normalButtonStyles}>
                    PROJETOS
                </ButtonHeader>
                <ButtonHeader className="bg-light-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 max-xs:hidden cursor-pointer">
                    CONTATOS
                </ButtonHeader>
            </div>
        </nav>
    )
}
