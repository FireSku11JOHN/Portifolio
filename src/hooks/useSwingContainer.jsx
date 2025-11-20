import { useEffect } from "react";
import { animateSwingContainer } from "../animations/swingContainer";

export const useSwingContainer = (ref, options = {}) => {
    useEffect(() => {
        if (!ref.current) return;

        const { swing } = animateSwingContainer(ref.current, options);

        return () => swing
    }, []);
};
