import { Link } from "react-router-dom"
const Header = ({text, bgColor, textColor}) => {

    const styles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={styles}>
            <div className="container">
            <Link to="/"><h2>{text}</h2></Link>  
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}

export default Header
