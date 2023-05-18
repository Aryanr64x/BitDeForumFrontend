import axios from "axios"
import { useContext, useRef } from "react"
import BASE_URL from "../BASE_URL"
import { authContext } from '../contexts/AuthContextWrapper'
import { postsContext } from "../contexts/PostsContextWrapper"

const NewPostDialog = ({ closeDialog }) => {

    const title = useRef()
    const body = useRef()
    const auth = useContext(authContext)
    const postsContainer  = useContext(postsContext)

    const createPost = async () => {
       const titleval = title.current.value
       const bodyval = body.current.value
      

        if (titleval != "" && bodyval != "") {
                const isSuccess = await postsContainer.createNewPost(titleval, bodyval, auth.token)
                if(isSuccess){
                    closeDialog(null)
                }
        }
    }


    return <div className="flex flex-col justify-center items-center h-screen w-full absolute top-0 left-0  bg-black bg-opacity-40">
        <div className="bg-white px-4 py-2 ">
            <div className="text-4xl font-semibold flex justify-between items-center">
                <div>
                    Create a new post...
                </div>
                <div>
                    <svg onClick={()=>{closeDialog(null)}} className="h-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
            </div>

            <div className="mt-4">
                <input ref={title} type="text" placeholder="Enter post title" className="px-2 py-2 border-teal-100 w-full" />
                <textarea ref={body} className="px-2 py-2 border-teal-100 w-full mt-3" placeholder="Enter the body of the post here.." name="" id="" rows="4"></textarea>
                <button className="px-2 py-2 bg-teal-700 text-white mt-4" onClick={createPost}>
                    Create Post
                </button>
            </div>
        </div>
    </div>
}

export default NewPostDialog