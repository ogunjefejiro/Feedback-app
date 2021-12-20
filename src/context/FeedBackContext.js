import {v4 as uuidv4} from "uuid"
import { createContext, useState } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    const addFeedback = (newFeedback) => {
        const id = uuidv4()
        newFeedback = {...newFeedback, id}
        setFeedback([newFeedback, ...feedback])
      }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
    }

    const resetBtn = () => {
      setFeedbackEdit({
        ...feedbackEdit, edit: false
      })
    }

    return <FeedBackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        resetBtn
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext