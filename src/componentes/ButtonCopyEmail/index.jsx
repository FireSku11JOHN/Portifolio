import { useState } from "react";
import IconCopy from "../../assets/Icons/IconCopy.svg";
import IconCheck from "../../assets/Icons/IconCheck.svg";

export function CopyEmailButton({ email }) {
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => setCopied(false), 1200);
    }

    return (
        <button onClick={handleCopy}>
            <img
                src={copied ? IconCheck : IconCopy}
                alt={copied ? "Copiado" : "Copiar"}
                className="max-mobile:w-[18px]"
            />
        </button>
    );
}
