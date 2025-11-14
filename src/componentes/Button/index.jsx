import "../Button/button.css"

export const Button = ({text, icon, addClass}) => {

    let defaultStyles = "flex gap-2 rounded-lg text-[18px] text-dark bg-light py-2 px-[18px] cursor-pointer max-mobile:text-[14px] max-mobile:px-[12px]"

    if (addClass) {
        defaultStyles += ` ${addClass}`
    }

    return (
        <a href="#" className={defaultStyles}>
            {text}
            <img src={icon} className="max-mobile:w-[18px]"/>
        </a>
    )
}