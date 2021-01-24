
export const Socials = (props) => {
    return (
        <a href={props.url}><i className={props.icon} style={{color:props.color}}></i></a>
    )
}
