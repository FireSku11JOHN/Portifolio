import { useEffect, useRef } from "react"
import ImgRotateWhell from "../../../assets/RotateWhell.svg"
import gsap from "gsap"
import { InfoCards } from "../InfoCards";


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
        <div className="flex items-center relative overflow-visible pb-6 mt-14
                    border-b-3 border-light border-dashed 
                    max-tablet:flex-col-reverse max-mobile:gap-10">

            <img
                ref={wheelRef}
                src={ImgRotateWhell}
                alt="Rotate Wheel"
                className="relative left-[-18%] w-[40%] min-w-10 
                max-tablet:left-[-45%]"
            />

            <div className="relative z-10 w-[65%] flex flex-col gap-20 max-mobile:w-full">

                <div className="font-bold text-[28px] max-mobile:text-[24px]">
                    * Foco em agilidade, inovação e melhoria contínua *
                </div>

                <div className="max-mobile:text-center max-mobile:w-full">
                    Estudo e aplico métodos ágeis em projetos pessoais e voluntários para
                    otimizar processos e aumentar a eficiência. Minha experiência com
                    atendimento ao público fortaleceu minha capacidade de comunicação e
                    resolução de problemas. Sou proativo, dinâmico e comprometido em crescer
                    na área de TI, contribuindo com inovação e soluções eficazes.
                </div>

                <InfoCards/>

            </div>
        </div>
    );
};
