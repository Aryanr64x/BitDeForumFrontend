import { ToastContainer } from "react-toastify";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const ForumHome = () => {

    return (
        <div>
            <Navbar />
            <CreatePost />
            <Posts />
            <ToastContainer theme="colored" />

        </div>
    );

}

export default ForumHome;

