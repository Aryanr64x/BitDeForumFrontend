import { useContext, useRef } from "react"

import { authContext } from '../contexts/AuthContextWrapper'
import { useNavigate } from "react-router-dom";


const SignIn = ({signUpRequest}) => {
    const navigate = useNavigate();

    const username = useRef()
    const password = useRef()
    const auth = useContext(authContext)
    const signIn = async()=>{
        const  usernameval = username.current.value
        const  passwordval = password.current.value
        if(usernameval !== "" && passwordval !== ""){
                const isSuccess = await auth.signIn(usernameval, passwordval)
                if(isSuccess){
                    navigate("/home");

                }else{
                    console.log("Oops! Something went wrong . Please try again later ")
                }
        }else{
            console.log("Please fill out all the fields")
        }
    }




    return (
        <div>
            <div className="text-5xl">
                We have been waiting..
            </div>

            <div className="mt-8">
                <div className="">
                    <input type="text" ref={username} className= "w-full px-2 py-2 border-black border-2" placeholder="Enter the user id" />
                </div>
                <div className="mt-4">
                    <input ref={password} type="password" className="w-full px-2 py-2 border-black border-2" placeholder="Enter the password" />
                </div>
               
            </div>

         <div className="flex items-center justify-between">
         <button className="px-2 py-2 bg-teal-700 text-white
            mt-8" onClick={signIn}>
               SIGN IN 
            </button>

            <button className="mt-8" onClick={signUpRequest}>
                Dont have an account ?
            </button>
         </div>
        </div>
    )
}

export default SignIn;