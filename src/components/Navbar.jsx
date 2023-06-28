import { useContext } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { NavLink, useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";


const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(authContext)
    return (
        <div className="h-14 bg-primary font-semibold flex justify-between items-center px-8 text-white">
            <NavLink className="text-2xl font-french" to={"/home"}>
                BIT FORUM
            </NavLink>

            <div className="flex items-center text-sm sm:text-base">
                <CreatePost />
                <div>
                    <button onClick={() => {
                        auth.signOut()
                        navigate('/')
                    }}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;