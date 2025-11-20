import { useEffect } from "react";
import { animateSplitText } from "../animations/splitText";

export const useSplitText = (ref, options = {}) => {
    useEffect(() => {
        if (!ref.current) return;

        let splitInstance = null;

        const start = async () => {
            const { split } = await animateSplitText(ref.current, options);
            splitInstance = split;
        };

        start(); // inicia a animação

        return () => {
            if (splitInstance) {
                splitInstance.revert();
            }
        };
    }, []);
};
