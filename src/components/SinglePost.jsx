import axios from "axios"
import { useContext, useState } from "react"
import BASE_URL from "../BASE_URL"
import { authContext } from "../contexts/AuthContextWrapper"

const SinglePost = ({ post, fromHomePage }) => {

    const [votesCount, setVotesCount] = useState(post.votes_count)
    const auth = useContext(authContext)
    console.log(post)

    const upvote = async () => {
        try {
            const resp = await axios.patch(BASE_URL + '/post/' + post._id + '/upvote', {}, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })

            setVotesCount(votesCount + 1)


        } catch (e) {
            console.log(e)
        }
    }

    const downvote = async () => {
        try {
            const resp = await axios.patch(BASE_URL + '/post/' + post._id + '/downvote', {}, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            })

            setVotesCount(votesCount - 1)


        } catch (e) {
            console.log(e)
        }
    }
    const addon = (fromHomePage) ? (" hover:scale-105 transition-all duration-200 cursor-pointer ") : ("")
    return (
        <div className={"mt-14 mb-12 pb-4 border-b-primary border-b-2 mb- rounded-sm px-4 py-2 "+addon}>

            <div className="font-semibold  text-3xl flex justify-between">
                <div className="font-french">
                    {post.title}
                </div>
                <div className="text-lg">
                   <span className="font-normal">by</span> {post.username}
                </div>
            </div>

            <div className="mt-4 ">
                {post.body}
            </div>

            <div className="mt-4 flex justify-between ">

                {
                    (!fromHomePage) ? (<div className="flex items-center">
                      <svg onClick={upvote} className="h-6 fill-primary cursor-pointer hover:scale-105 transition-all duration-150 mr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>

                      <svg onClick={downvote} className="h-7 fill-primary cursor-pointer hover:scale-105 transition-all duration-150" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z" /></svg>
                    </div>) : ("")
                }
                <div className="flex items-center">
                    <div className="flex items-center mr-4">
                        <span className="mr-1 text-lg">{Math.abs(votesCount)}</span>  {
                            (votesCount >= 0) ? (
                                <svg className="h-6 fill-primary " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                            ) : (<svg className="h-7 fill-primary" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z" /></svg>)
                        }
                    </div>
                    <div>
                       {
                        (fromHomePage) ? (<div> { post.comments.length } comments</div>) : ("")
                       }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SinglePost