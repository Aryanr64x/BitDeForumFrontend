import { useContext, useRef, useState } from "react"

import { authContext } from '../contexts/AuthContextWrapper'
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SignIn = ({ signUpRequest }) => {
    const navigate = useNavigate();

    const username = useRef()
    const password = useRef()
    const auth = useContext(authContext)
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        const usernameval = username.current.value
        const passwordval = password.current.value
        if (usernameval !== "" && passwordval !== "") {
            setLoading(true)
            const isSuccess = await auth.signIn(usernameval, passwordval)
            if (isSuccess) {
                navigate("/home");
            } else {

                setLoading(false)
                toast("The username and password combination does not exists")
            }
        } else {
                toast("Please fill in all the fields")
        }
    }




    return (
        <div className="text-white">
            <div className="text-5xl font-french ">
                We have been waiting......
            </div>

            <div className="mt-8">
                <div className="">
                    <div className="">
                        Username:
                    </div>
                    <input type="text" ref={username} className="w-full px-2 py-2 mt-2 rounded-md text-black border-black border-2" placeholder="Enter the username" />
                </div>
                <div className="mt-4">
                    <div className="">
                        Password:
                    </div>
                    <input ref={password} type="password" className="w-full px-2 mt-2 py-2 rounded-md text-black border-black border-2" placeholder="Enter the password" />
                </div>

            </div>

            <div className="flex items-center justify-between">
                {
                    (!loading) ? (<button className="px-4 py-2 mt-4 text-lg font-semibold rounded-full bg-secondary hover:scale-105 transition-all duration-200" onClick={signIn}>
                        Sign In
                    </button>) : (<div className="mt-4">
                        <DotLoader color="#E76F51" size={32} />
                    </div>)
                }

                <button className="px-2 py-2 mt-4 rounded-sm hover:shadow-black hover:shadow-sm transition-all duration-200" onClick={signUpRequest}>
                    Dont have an account ?
                </button>
            </div>
        </div>
    )
}

export default SignIn;