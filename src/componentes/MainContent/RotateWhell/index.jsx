import { useEffect, useRef } from "react"
import ImgRotateWhell from "../../../assets/RotateWhell.svg"
import gsap from "gsap"

const H2_STYLE =
    "text-[22px] text-left font-extrabold max-tablet-wheel:text-[20px] max-mobile:text-[15px]";
const H3_STYLE =
    "text-[26px] font-bold max-mobile:text-[18px]";

const INFO_CARDS = [
    { label: "Projetos", value: "+6" },
    { label: "Tecnologias dominadas", value: "+4" },
    { label: "Certificações em TI", value: "+13" },
];

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
        <div className="flex items-center relative overflow-visible pb-6 
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

                <div className="flex divide-x-3">
                    {INFO_CARDS.map(({ label, value }, index) => (
                        <div
                            key={label}
                            className={`flex flex-col items-center justify-between gap-7 px-6 
                            max-mobile:px-2 max-tablet-wheel:px-2
                            ${index === 0 ? "pr-6" : ""}
                            ${index === INFO_CARDS.length - 1 ? "pr-0" : ""}`}
                        >
                            <h2 className={H2_STYLE}>{label}</h2>
                            <h3 className={H3_STYLE}>{value}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
