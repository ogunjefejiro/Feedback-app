import { useContext, useState, useEffect } from "react"
import FeedBackContext from "../context/FeedBackContext"
import Ratings from "./Ratings"
import Button from "./shared/Button"
import Card from "./shared/Card"

const FeedBackForm = () => {
    const [text, setText] = useState("")
    const [rating, setRating] = useState()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const {addFeedback, feedbackEdit, updateFeedback, resetBtn} = useContext(FeedBackContext)

    useEffect(() => {
        if (feedbackEdit.edit) {
            setText(feedbackEdit.item.text)
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
        }
        
    }, [feedbackEdit])

    const handleChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(() => e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                rating, 
                text
            }
            
            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            

            setText("")
            setBtnDisabled(true)
            resetBtn()
        }
        
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <Ratings select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text"
                    placeholder="Type in a review"
                    value={text}
                    onChange={(handleChange)}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>{feedbackEdit.edit ? "Edit" : "Send"}</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm
