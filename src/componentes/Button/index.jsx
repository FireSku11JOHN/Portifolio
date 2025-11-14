export const Button = ({text, icon, addClass, link}) => {

    let defaultStyles = "flex gap-2 rounded-lg text-[18px] text-dark bg-light py-2 px-[18px] cursor-pointer hover:bg-hover-button-bg hover:text-hover-button-text transition delay-150 max-mobile:text-[14px] max-mobile:px-[12px]"

    if (addClass) {
        defaultStyles += ` ${addClass}`
    }

    return (
        <a href={link} className={defaultStyles} target="_blank">
            {text}
            <img src={icon} className="max-mobile:w-[18px] hover:color-hover-button-text"/>
        </a>
    )
}