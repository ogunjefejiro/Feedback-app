import { useContext } from "react"
import FeedBackContext from "../context/FeedBackContext"
import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from "./FeedBackItem"


const FeedBackList = () => {
    const {feedback} = useContext(FeedBackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <>
            <AnimatePresence>
                {feedback.map(item => 
                <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                    <FeedBackItem key={item.id} item={item} />
                </motion.div>
                )}
            </AnimatePresence>
        </>


        // <>
        //     {feedback.map(item => <FeedBackItem 
        //     key={item.id} 
        //     item={item} 
        //     handleDelete={handleDelete}
        //     />)}
        // </>
    )
}

export default FeedBackList
