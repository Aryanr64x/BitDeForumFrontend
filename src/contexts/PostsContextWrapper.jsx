import axios from "axios";
import React, { useState } from "react";
import BASE_URL from '../BASE_URL'

export const postsContext = React.createContext()

const PosstContextWrapper = ({ children }) => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const resp = await axios.get(BASE_URL + '/post/')
            setPosts(resp.data.posts)
            console.log(posts)
            return true
        } catch (e) {
            return false
            console.log(e)
            setPosts([])
        }
    }

    const createPost = async (titleval, bodyval, token) => {
        try {
           
            const resp = await axios.post(BASE_URL + '/post/', { title: titleval, body: bodyval }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            setPosts([ resp.data.post ,...posts])
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }


    const values = {
        posts,
        getPosts,
        createNewPost:createPost
    }

    return (
        <postsContext.Provider value={values}>
            {children}
        </postsContext.Provider>
    );
}

export default PosstContextWrapper;