import { useContext } from "react"
import FeedBackContext from "../context/FeedBackContext"
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"
import Card from "./shared/Card"

const FeedBackItem = ({item}) => {
    const {deleteFeedback, editFeedback} = useContext(FeedBackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <MdDelete color="red"/>
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color="green"/>
            </button>
            <div className="text-display"><p>{item.text}</p></div>
        </Card>
    )
}

export default FeedBackItem
