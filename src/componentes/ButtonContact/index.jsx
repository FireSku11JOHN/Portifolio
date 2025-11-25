import { useState } from "react";
import IconArrow from "../../assets/Icons/Icon-diagonal-arrow-right-up-outline.svg";
import IconArrowWhite from "../../assets/Icons/Icon-diagonal-arrow-right-up-outline-white.svg";

export function ButtonContacts({ href }) {
    const [hover, setHover] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex justify-center gap-2 text-[18px] font-medium py-4 px-6 w-fit rounded-[10px] transition-all
                max-tablet:text-[14px] max-tablet:py-2 max-mobile:w-full max-mobile:px-2
                ${hover ? "bg-cyan text-white" : "bg-light text-dark"}`}
        >
            Ir para
            <img
                src={hover ? IconArrowWhite : IconArrow}
                alt="Ir para"
                className="max-tablet:w-[18px]"
            />
        </a>
    );
}
