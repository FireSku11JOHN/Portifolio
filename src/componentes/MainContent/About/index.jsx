import { InfoCards } from "../InfoCards"
import { RotateWhell } from "../RotateWhell"
import { TicTacToe } from "../TicTacToe"

export const About = () => {
    return (
        <div id="about">
            <div className="aboutSec flex justify-between items-center max-tablet:flex-col max-tablet:gap-8 max-tablet:pt-16">
                <div className="max-w-[60%] max-mobile:max-w-none max-mobile:text-center">
                    Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e seu impacto na vida das pessoas. Tenho grande interesse em aprender e aprimorar minhas habilidades, sempre buscando novos desafios.
                </div>
                <TicTacToe />
            </div>
            <div className="flex items-center relative overflow-visible pb-6 mt-14
                        border-b-3 border-light border-dashed
                        max-tablet:flex-col-reverse max-mobile:gap-10">
                <RotateWhell />            
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
                    <InfoCards />
                </div>
            </div>
        </div>
    )
}