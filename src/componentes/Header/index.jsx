import Logo from "../../assets/Logo.svg"

import { ButtonHeader } from "../ButtonHeader"

export const Header = () => {

    const normalButtonStyles = "bg-bg-button-header text-center text-ligth text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1"

    return (
        <nav className="fixed z-50 w-full">
            <div className="flex gap-3 mx-6 my-3 xs:hidden">
                <img src={Logo} className="bg-bg-logo h-8 py-2 rounded inline-block flex-1 object-contain"></img>
                <ButtonHeader className="bg-ligth-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1">
                    CONTATOS
                </ButtonHeader>
            </div>
            <div className="flex gap-3 mx-6 my-3">
                <img src={Logo} className="bg-bg-logo h-8 py-2 rounded inline-block flex-1 object-contain max-xs:hidden"></img>
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
                <ButtonHeader className="bg-ligth-cyan text-center text-dark text-[14px] leading-[120%] tracking-[1px] py-2 rounded flex-1 max-xs:hidden">
                    CONTATOS
                </ButtonHeader>
            </div>
        </nav>
    )
}
