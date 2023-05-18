import { useState } from "react";
import NewPostDialog from "./NewPostDialog";

const CreatePost = ( {  }) => {

    const [showDialog, setShowDialog] = useState(false)





    return (
        <div className="px-12">
            <button className="px-2 py-2 bg-teal-700 text-white mt-8" onClick={()=>{setShowDialog(true)}}>
                Create New Post
            </button>

            {
                (showDialog) ? (<NewPostDialog closeDialog={(newPost)=>{
                    setShowDialog(false)
                  
                }} />) : (<div></div>)
            }
        </div>
    );
}

export default CreatePost;