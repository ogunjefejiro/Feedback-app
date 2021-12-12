import axios from "axios"
import { createContext, useState, useEffect } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    const baseUrl = "http://localhost:5000/feedback"

    //GET data from backend
    useEffect(() => {
      axios.get(`${baseUrl}?_sort=id&_order=desc`)
        .then((res) => {
          setFeedback(res.data)
          setIsLoading(false)
        })
    }, [])
    
    //POST data to the backend
    const addFeedback = (newFeedback) => {
        axios.post(`${baseUrl}`, {...newFeedback})
        .then((res) => {
          setFeedback([res.data, ...feedback])
          setIsLoading(false)
        })
      }

    //DELETE data from backend
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          axios.delete(`${baseUrl}/${id}`)
          setFeedback(feedback.filter((item) => item.id !== id))
        }
        }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    //UPDATE backend data
    const updateFeedback = (id, updItem) => {
      axios.put(`${baseUrl}/${id}`, {...updItem})
        .then((res) => {
          setFeedback(feedback.map((item) => (item.id === id ? {...item, ...res.data} : item)))
        })
      
    }

    const resetBtn = () => {
      setFeedbackEdit({
        ...feedbackEdit, edit: false
      })
    }

    return <FeedBackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
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