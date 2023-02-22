import "../App.css"

function Button(props) {
    return(
        <li><a className="contact-button" href="#"><button className="btn">{props.children}</button></a></li>
    )
}

export default Button;