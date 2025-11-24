import { useRef } from "react"
import { InfoCards } from "../InfoCards"
import { RotateWhell } from "../RotateWhell"
import { TicTacToe } from "../TicTacToe"
import { useSplitTextAbout } from "../../../hooks/useSplitTextAbout"
import { useTitleSplit } from "../../../hooks/useTitleSplit"

export const About = () => {

    const textRef = useRef()
    useSplitTextAbout(textRef)

    const titleRef = useRef();
    useTitleSplit(titleRef);

    const text2Ref = useRef()
    useSplitTextAbout(text2Ref)

    return (
        <div id="about">
            <div className="aboutSec flex justify-between items-center max-tablet:flex-col max-tablet:gap-8 max-tablet:pt-16">
                <div ref={textRef} className="max-w-[60%] max-mobile:max-w-none max-mobile:text-center">
                    Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e seu impacto na vida das pessoas. Tenho grande interesse em aprender e aprimorar minhas habilidades, sempre buscando novos desafios.
                </div>
                <TicTacToe />
            </div>
            <div className="flex items-center relative overflow-visible pb-24 mt-14
                        border-b-3 border-light border-dashed
                        max-tablet:flex-col-reverse 
                        max-tablet:pb-6 max-mobile:gap-10">
                <RotateWhell />
                <div className="relative z-10 w-[65%] flex flex-col gap-20 max-mobile:w-full">
                    <div
                        className="font-bold text-[28px] max-mobile:text-[24px]"
                        ref={titleRef}
                    >
                        <span className="title-left inline-block">* Foco em agilidade,</span>
                        <span className="title-right inline-block"> inovação e melhoria contínua *</span>
                    </div>
                    <div ref={text2Ref} className="max-mobile:text-center max-mobile:w-full">
                        Estudo e aplico métodos ágeis em projetos pessoais e voluntários para
                        otimizar processos e aumentar a eficiência. Minha experiência com
                        atendimento ao público fortaleceu minha capacidade de comunicação e
                        resolução de problemas. Sou proativo, dinâmico e comprometido em crescer
                        na área de TI, contribuindo com inovação e soluções eficazes.
                    </div>
                    <InfoCards />
                </div>
            </div>
        </div>
    )
}