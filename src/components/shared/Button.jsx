import { useContext } from "react"
import FeedBackContext from "../../context/FeedBackContext"

const Button = ({children, type, version, isDisabled}) => {

    const {feedbackEdit} = useContext(FeedBackContext)

    return (
        <button className={`btn btn-${version} ${feedbackEdit.edit ? "edit-btn" : ""}`} type={type} disabled={isDisabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: "button",
    version: "primary",
    isDisabled: false
}

export default Button
