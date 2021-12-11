import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
const AboutPage = () => {
    return (
        <>
        <Card>
            <div className="about">
                <h1>About This App</h1>
                <p>This is an app to leave feedbacks for products and services</p>
                <p>Version 5.0.0</p>
                <p></p>
            </div>
        </Card>
        <Link to="/" className="about-link">Go Back</Link>
        </>
    )
}

export default AboutPage
