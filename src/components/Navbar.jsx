import { useContext } from "react";
import { authContext } from "../contexts/AuthContextWrapper";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(authContext)
    return (
        <div className="h-14 bg-teal-600 font-semibold flex justify-between items-center px-8 text-white">
                <div className="text-2xl">
                    BIT FORUM
                </div>
                <div>
                    <button onClick={()=>{
                        auth.signOut()
                        navigate('/')
                    }}>Log Out</button>
                </div>
        </div>
    )
}

export default Navbar;