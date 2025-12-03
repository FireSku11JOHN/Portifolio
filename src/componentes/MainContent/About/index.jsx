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
        <div id="about" >
            <div className="aboutSec flex justify-between items-center max-tablet:flex-col max-tablet:gap-8 max-tablet:pt-16">
                <div ref={textRef} className="max-w-[60%] max-mobile:max-w-none max-mobile:text-center">
                    Sou desenvolvedor front-end em formação, apaixonado por criar interfaces limpas, funcionais e bem estruturadas. Tenho dedicado meus estudos a tecnologias como React, JavaScript, CSS moderno e ferramentas que otimizam a experiência do usuário. Gosto de unir design, usabilidade e código para transformar ideias em produtos reais, explorando animações, responsividade e boas práticas que tornam a web mais fluida e acessível. Valorizo muito a organização do código, componentização e o uso de padrões que facilitem escalabilidade e manutenção.
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
                        className="font-bold text-[28px] max-mobile:text-[24px] overflow-hidden"
                        ref={titleRef}
                    >
                        <span className="title-left inline-block">* Foco em agilidade,</span>
                        <span className="title-right inline-block"> inovação e melhoria contínua *</span>
                    </div>
                    <div ref={text2Ref} className="max-mobile:text-center max-mobile:w-full">
                        Busco constantemente evoluir, experimentando novas abordagens e me desafiando com projetos pessoais que envolvem UI, animações, interatividade e performance. Acredito que o front-end vai muito além da estética: é sobre criar experiências que funcionam bem, são intuitivas e fazem sentido para o usuário. Sou comprometido, curioso e motivado a aprender, pronto para contribuir em equipes que valorizam inovação, colaboração e qualidade no desenvolvimento.
                    </div>
                    <InfoCards />
                </div>
            </div>
        </div>
    )
}