import "./styles.scss";

export function ButtonOutline(props){
    const className = props.className;
    return(
        <button {...props} className={className + " button-outline" } >
            {props.children}
        </button>
    )
}