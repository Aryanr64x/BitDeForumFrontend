import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
const Auth = ()=>{
    const [showSignInForm, setShowSignInForm] = useState(true)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
        
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
        </div>
    );
    
}

export default Auth;