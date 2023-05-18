import axios from "axios";
import { useContext, useRef } from "react";
import BASE_URL from "../BASE_URL";
import { authContext } from '../contexts/AuthContextWrapper'

const CreateComment = ({ post_id, newComment }) => {

    const comment = useRef()
    const auth = useContext(authContext)

    const createComment = async () => {
        const commentval = comment.current.value
        if (commentval != "") {
            try {
                console.log(auth.token)
                const resp = await axios.post(BASE_URL + '/post/' + post_id + '/comment', { comment: commentval }, {
                    headers: {
                        Authorization: "Bearer " + auth.token
                    }
                })

                newComment(resp.data)
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <div className="mx-14">
            <textarea ref={comment} placeholder="Please Enter your comment..." className="w-full px-2 py-2 mt-4" name="" id="" ></textarea>
            <button className="px-2 py-2 mt-4  bg-teal-700 text-white " onClick={createComment}>
                Create
            </button>
        </div>
    )
}

export default CreateComment;