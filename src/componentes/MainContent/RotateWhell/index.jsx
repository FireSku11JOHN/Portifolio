import { useEffect, useRef } from "react"
import ImgRotateWhell from "../../../assets/RotateWhell.svg"
import gsap from "gsap"

export const RotateWhell = () => {

    const wheelRef = useRef(null)

    useEffect(() => {
        gsap.to(wheelRef.current, {
            rotate: 360,
            duration: 15,
            repeat: -1,
            ease: "linear",
        })
    }, [])

    return (
        <div className="flex items-center relative overflow-visible border-b-3 border-light border-dashed max-tablet:flex-col-reverse max-mobile:gap-10">

            <img
                ref={wheelRef}
                src={ImgRotateWhell}
                alt="Rotate Whell"
                className="relative left-[-18%] w-[40%] min-w-10 max-tablet:left-[-45%]"
            />

            <div className="relative z-10 w-[60%] max-mobile:text-center max-mobile:w-full">
                Estudo e aplico métodos ágeis em projetos pessoais e voluntários para otimizar processos e aumentar a eficiência. Minha experiência com atendimento ao público fortaleceu minha capacidade de comunicação e resolução de problemas. Sou proativo, dinâmico e comprometido em crescer na área de TI, contribuindo com inovação e soluções eficazes.
            </div>

        </div>
    )
}
