export const ButtonHeader = ({children, ...props}) => {
    return (
        <a {...props}>
            {children}
        </a>
    )
}
