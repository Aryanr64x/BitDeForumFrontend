import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { ToastContainer } from "react-toastify";
const Auth = ()=>{
    const [showSignInForm, setShowSignInForm] = useState(true)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center hero bg-primary">
        
            {
                (showSignInForm) ? (
                    <SignIn signUpRequest={()=>{
                        setShowSignInForm(false)
                    }}/>
                ) : (
                    <SignUp signInRequest={()=>{
                        setShowSignInForm(true)
                    }} />
                )
            }


        <ToastContainer theme="colored" />

        </div>
    );
    
}

export default Auth;