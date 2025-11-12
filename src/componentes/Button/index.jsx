export const Button = ({text, icon, addClass}) => {

    let defaultStyles = "inline-flex gap-2 rounded-lg text-[18px] text-dark bg-light py-2 px-[18px] cursor-pointer"

    if (addClass) {
        defaultStyles += ` ${addClass}`
    }

    return (
        <a href="#" className={defaultStyles}>
            {text}
            <img src={icon}/>
        </a>
    )
}