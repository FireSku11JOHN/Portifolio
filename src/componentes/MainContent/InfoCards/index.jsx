const H2_STYLE =
    "text-[20px] text-left font-extrabold max-tablet-wheel:text-[16px] max-mobile:text-[13px]";
const H3_STYLE =
    "text-[26px] font-bold max-mobile:text-[18px]";

const INFO_CARDS = [
    { label: "Projetos", value: "+6" },
    { label: "Tecnologias dominadas", value: "+4" },
    { label: "Certificados em TI", value: "+13" },
];


export const InfoCards = () => {
    return (
        <div className="flex divide-x-3">
            {INFO_CARDS.map(({ label, value }, index) => (
                <div
                    key={label}
                    className={`flex flex-col items-center justify-between gap-7 px-6 
                            max-mobile:px-2 max-tablet-wheel:px-2
                            ${index === 0 ? "pr-4" : ""}
                            ${index === INFO_CARDS.length - 1 ? "pr-0" : ""}`}
                >
                    <h2 className={H2_STYLE}>{label}</h2>
                    <h3 className={H3_STYLE}>{value}</h3>
                </div>
            ))}
        </div>
    )
}