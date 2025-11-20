import { useEffect } from "react";
import { animateColorWave } from "../animations/colorWave";

export const useColorWave = (chars, trigger = true) => {
    useEffect(() => {
        if (!trigger || !chars) return;

        animateColorWave(chars);
    }, [trigger]);
};
