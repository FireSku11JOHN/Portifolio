import { useEffect, useRef } from "react"
import ImgRotateWhell from "../../../assets/RotateWhell.svg"
import gsap from "gsap"

export const RotateWhell = () => {
    const wheelRef = useRef(null);

    useEffect(() => {
        const anim = gsap.to(wheelRef.current, {
            rotate: 360,
            duration: 15,
            repeat: -1,
            ease: "linear",
        });

        return () => {
            anim.kill();
        }
    }, []);

    return (
        <img
            ref={wheelRef}
            src={ImgRotateWhell}
            alt="Rotate Wheel"
            className="relative left-[-18%] w-[40%] min-w-10 
            max-tablet:left-[-45%]"
        />
    );
};
