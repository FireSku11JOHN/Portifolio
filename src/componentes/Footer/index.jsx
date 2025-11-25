import {SOCIAL_LINKS} from "../../constants/socials"

export const Footer = () => {
    return(
        <footer className="bg-bg-main-content py-8 px-16 max-tablet:px-6 max-tablet:text-[13px] max-mobile:text-[10px]">
            <p className="text-light">
                Desenvolvido por <a 
                    href={SOCIAL_LINKS.linkedin}
                    className="underline"
                >
                    John Ávylan
                </a>
            </p>
        </footer>
    )
}