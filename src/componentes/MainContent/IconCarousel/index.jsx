import { useLayoutEffect, useRef } from "react";
import { techIcons } from "../../../assets/Icons"
import gsap from "gsap";


export const IconCarousel = () => {
    const duplicatedIcons = [...techIcons, ...techIcons];

    const scrollerRef = useRef();

    useLayoutEffect(() => {

        const scroller = scrollerRef.current

        const tween = gsap.to(scroller, {
            xPercent: -50,     // Anima para a metade (o mesmo que translateX(-50%))
            duration: 40,      // Velocidade (40 segundos)
            ease: "none",      // Ritmo constante (o mesmo que 'linear' no CSS)
            repeat: -1,        // Repetir para sempre (o mesmo que 'infinite')
        });

        return () => {
            tween.kill();
            scroller.removeEventListener("mouseenter", () => tween.pause());
            scroller.removeEventListener("mouseleave", () => tween.play());
        };
    }, [])

    return (
        <div className="absolute start-0 bottom-[5%]  w-full h-16 bg-white flex items-center overflow-hidden max-tablet:bottom-[2%]  max-mobile:h-12">
            <div className="flex whitespace-nowrap" ref={scrollerRef}>
                {duplicatedIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="shrink-0 mx-8 max-mobile:m-5"
                        title={icon.name}
                    >
                        {icon.component}
                    </div>
                ))}
            </div>
        </div>
    );
};