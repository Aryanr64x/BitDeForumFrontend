import { useContext, useRef, useState } from "react"
import { authContext } from "../contexts/AuthContextWrapper"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { DotLoader } from "react-spinners";

const SignUp = ({ signInRequest }) => {
    const username = useRef()
    const password = useRef()
    const password_repeat = useRef()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const auth = useContext(authContext)

    const signUp = async () => {

        const usernameval = username.current.value
        const passwordval = password.current.value
        const password_repeatval = password_repeat.current.value
        if (usernameval !== "" && passwordval !== "" && password_repeatval !== "") {
            if (passwordval === password_repeatval) {
                setLoading(true)
                const isSuccess = await auth.signUp(usernameval, passwordval, password_repeatval)
                if (isSuccess) {
                    navigate("/home");
                } else {
                    setLoading(false)
                    toast("Oops ! Something went wrong. Please try again later")

                }
            }else{
                toast("The password should match with the password repeat")
            }
        } else {
            toast("Please fill in all the fields")
        }

    }

    return (
        <div>
            <div className="text-white">
                <div className="text-5xl font-french">
                    Lets Get You Started...
                </div>

                <div className="mt-8">
                    <div className="">
                        <div>
                            Username:
                        </div>
                        <input type="text" ref={username}

                            className="w-full mt-2 text-black rounded-md px-2 py-2 border-black border-2" placeholder="Create a cool username" />
                    </div>
                    <div className="mt-4">
                        <div>
                            Password:
                        </div>
                        <input ref={password}

                            type="password" className="w-full mt-2 text-black rounded-md px-2 py-2 border-black border-2" placeholder="Create a strong password (Minimum 6 characters)" />
                    </div>

                    <div className="mt-4">
                        <div>
                            Password Repeat:
                        </div>
                        <input ref={password_repeat}
                            type="password" className="w-full mt-2 text-black rounded-md px-2 py-2 border-black border-2" placeholder="Enter the password again" />

                    </div>

                </div>

                <div className="flex justify-between">
                    {
                        (!loading) ? (
                            <button className="px-4 py-2 mt-4 text-lg font-semibold rounded-full bg-secondary hover:scale-105 transition-all duration-200" onClick={signUp}>
                                Sign Up
                            </button>
                        ) : (
                            <div className="mt-4">
                                <DotLoader color="#E76F51" size={32} />
                            </div>
                        )
                    }
                    <button className="px-2 py-2 mt-4 rounded-sm hover:shadow-black hover:shadow-sm transition-all duration-200" onClick={signInRequest}>
                        Already have an account ?
                    </button>
                </div>
            </div>

        </div>

    )
}

export default SignUp;
