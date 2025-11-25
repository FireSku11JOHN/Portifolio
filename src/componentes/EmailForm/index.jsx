import { useState } from "react";
import { SOCIAL_LINKS } from "../../constants/socials"
import IconSend from "../../assets/Icons/IconSend.svg"
import IconSendWhite from "../../assets/Icons/IconSendWhite.svg"

export const EmailForm = () => {
    const [msg, setMsg] = useState("");
    const [hover, setHover] = useState(false);

    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=Contato%20do%20portfólio&body=${encodeURIComponent(msg)}`;

    return (
        <div className="flex flex-col gap-6 text-start">
            <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Escreva sua mensagem"
                className="h-[120px] bg-light rounded-[10px] text-left text-dark p-3 resize-none focus:outline-hidden max-mobile:text-[13px]"
            />

            <a
                href={mailtoLink}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex gap-2 w-fit text-[16px] text-dark font-medium bg-light rounded-[10px] py-2 px-4 transition-all hover:bg-light-cyan hover:text-light"
            >
                Enviar
                <img src={hover ? IconSendWhite : IconSend } alt="Enviar" />
            </a>
        </div>
    );
};
