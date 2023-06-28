import axios from "axios";
import { useContext, useRef, useState } from "react";
import BASE_URL from "../BASE_URL";
import { authContext } from '../contexts/AuthContextWrapper'
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const CreateComment = ({ post_id, newComment }) => {

    const comment = useRef()
    const [loading, setLoading] = useState(false)
    const auth = useContext(authContext)

    const createComment = async () => {
        const commentval = comment.current.value
        if (commentval !== "") {
            try {
                setLoading(true)
                const resp = await axios.post(BASE_URL + '/post/' + post_id + '/comment', { comment: commentval }, {
                    headers: {
                        Authorization: "Bearer " + auth.token
                    }
                })

                newComment(resp.data)
                setLoading(false)
                toast("Your comment has been posted")

            } catch (e) {
                setLoading(false)
                toast("Sorry cannot create a post at the moment . Please try after some time")

            }
        } else {
            toast("Please fill in the body of the comment")
        }
    }

    return (
        <div className="mx-14">
            <textarea ref={comment} placeholder="Please Enter your comment..." className="rounded-md border-primary border-2 w-full px-2 py-2 mt-4" name="" id="" ></textarea>
            <div className="flex justify-end">
                {
                    (!loading) ? (<button className="text-white px-4 py-2 mt-4 text-lg font-semibold rounded-full bg-primary hover:scale-105 transition-all duration-200" onClick={createComment}>
                       Post Comment
                    </button>) : (<div className="mt-4 mx-4">
                        <DotLoader color="#E76F51" size={32} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default CreateComment;