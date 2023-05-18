import { useContext, useRef } from "react"
import { authContext } from "../contexts/AuthContextWrapper"
import { useNavigate } from "react-router-dom";

const SignUp = ({signInRequest}) => {
    const username = useRef()
    const password = useRef()
    const password_repeat = useRef()
    const navigate = useNavigate();


    const auth = useContext(authContext)

    const signUp = async()=>{
       
        const usernameval = username.current.value
        const passwordval = password.current.value
        const password_repeatval = password_repeat.current.value
        if(usernameval !== "" && passwordval !== "" && password_repeatval !== ""){
                const isSuccess = await auth.signUp(usernameval, passwordval, password_repeatval)
                if(isSuccess){
                     navigate("/home");
                }else{
                    console.log("Oops!..something went wrong . Please try again later")
                }
        }else{
            console.log("Please fill out all the fields")
        }
        
    }

    return (
        <div>
            <div>
                <div className="text-5xl">
                    Create a new Account
                </div>

                <div className="mt-8">
                    <div className="">
                        <input type="text" ref={username}

                            className="w-full px-2 py-2 border-black border-2" placeholder="Enter the user name" />
                    </div>
                    <div className="mt-4">
                        <input ref = {password}

                            type="password" className="w-full px-2 py-2 border-black border-2" placeholder="Enter the password" />
                    </div>

                    <div className="mt-4">
                        <input ref = {password_repeat}
                            type="password" className="w-full px-2 py-2 border-black border-2" placeholder="Enter the password again" />

                    </div>

                </div>

                <div className="flex justify-between">
                    <button className="px-2 py-2 bg-teal-700 text-white mt-8" onClick={() => {
                        signUp()    
                    }
                    }>
                        SIGN UP
                    </button>
                    <button className="mt-8" onClick={signInRequest}>
                        Already have an account ?
                    </button>
                </div>
            </div>

        </div>

    )
}

export default SignUp;