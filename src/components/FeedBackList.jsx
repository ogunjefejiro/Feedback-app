import { useContext } from "react"
import FeedBackContext from "../context/FeedBackContext"
import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from "./FeedBackItem"
import Spinner from "./shared/Spinner"


const FeedBackList = () => {
    const {feedback, isLoading} = useContext(FeedBackContext)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>
    }

    return (isLoading ? <Spinner /> : (
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
    )

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
