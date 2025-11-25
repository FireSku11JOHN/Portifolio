import { useState } from "react";
import {SOCIAL_LINKS} from "../../constants/socials"
import IconSend from "../../assets/Icons/IconSend.svg"


export const EmailForm = () => {
    const [msg, setMsg] = useState("");

    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=Contato%20do%20portfólio&body=${encodeURIComponent(msg)}`;

    return (
        <div className="flex flex-col gap-6 text-start w-[500px]">
            <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Escreva sua mensagem"
                className="h-[120px] bg-light rounded-[10px] text-dark p-3 resize-none"
            />

            <a
                href={mailtoLink}
                className="flex gap-2 w-fit text-[16px] text-dark font-medium bg-light rounded-[10px] py-2 px-4"
            >
                Enviar
                <img src={IconSend} alt="Enviar" />
            </a>
        </div>
    );
};
