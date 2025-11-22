import { useEffect } from "react";
import { animateSplitTextAbout } from "../animations/splitTextAbout";

export const useSplitTextAbout = (ref = {}) => {
    useEffect(() => {
        if (!ref.current) return;

        let splitInstance = null;
        let hasAnimated = false;

        const observer = new IntersectionObserver(
            async (entries) => {
                const entry = entries[0];

                // Se apareceu na tela e ainda não animou → anima
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    const { split } = await animateSplitTextAbout(ref.current);
                    splitInstance = split;
                    observer.disconnect(); // Para não observar mais
                }
            },
            { threshold: 0.1 } // 20% do elemento precisa estar visível
        );

        observer.observe(ref.current);

        return () => {
            if (splitInstance) splitInstance.revert();
            observer.disconnect();
        };
    }, []);
};
