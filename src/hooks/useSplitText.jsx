import { useEffect } from "react";
import { animateSplitText } from "../animations/splitText";

export const useSplitText = (ref, options = {}) => {
    useEffect(() => {
        if (!ref.current) return;

        const { split } = animateSplitText(ref.current, options);

        return () => split.revert();
    }, []);
};
