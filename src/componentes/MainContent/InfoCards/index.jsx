// src/componentes/InfoCards.jsx (ou onde quer que esteja seu componente)

import { useAnimateCount } from "../../../hooks/useAnimateCount"

const H2_STYLE = "text-[20px] text-left font-extrabold max-tablet-wheel:text-[16px] max-mobile:text-[13px]"
const H3_STYLE = "text-[26px] font-bold max-mobile:text-[18px]"

const INFO_CARDS = [
    { id: "count-projects", label: "Projetos", value: "+6" },
    { id: "count-techs", label: "Tecnologias dominadas", value: "+4" },
    { id: "count-certs", label: "Certificados em TI", value: "+13" },
];


export const InfoCards = () => {
    // 💡 Chame o hook para CADA cartão
    INFO_CARDS.forEach(card => {
        // Chamada do hook, que vai anexar a animação ao elemento com o respectivo ID
        // Note: Hooks devem ser chamados incondicionalmente no topo de funções de componentes,
        // mas chamá-los dentro de um loop de dados fixo como este é um padrão aceitável em React.
        useAnimateCount(card.id, card.value)
    })
    
    return (
        <div className="flex divide-x-3">
            {INFO_CARDS.map(({ id, label, value }, index) => ( // Use o 'id' aqui
                <div
                    key={label}
                    className={`flex flex-col items-center justify-between gap-7 px-6 
                        max-mobile:px-2 max-tablet-wheel:px-2
                        ${index === 0 ? "pr-4" : ""}
                        ${index === INFO_CARDS.length - 1 ? "pr-0" : ""}`}
                >
                    <h2 className={H2_STYLE}>{label}</h2>
                    
                    {/* 💡 Aplique o ID aqui para que o GSAP possa encontrá-lo */}
                    <h3 className={H3_STYLE} id={id}>
                        {value} 
                    </h3>
                </div>
            ))}
        </div>
    )
}