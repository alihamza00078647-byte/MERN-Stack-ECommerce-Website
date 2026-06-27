import { use, useState } from "react";



function Login() {

    const [currentState, setCurrentState] = useState('Sign Up')
    // const [currentState, setCurrentState] = useState('Login')

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-5 gap-4 text-gray-950">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prate-regular text-3xl">{currentState}</p>
                <hr className="border-none h-[1.5px] w-8  bg-gray-950" />
            </div>    
            {currentState === 'Login' ? "" : <input required type="text" className={`w-full px-3 py-2 border border-gray-800`} placeholder="username" />} 
            <input required type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" />
            <input required type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" />

            <div className="w-full flex justify-between text-sm mt-[-8px]">
                <p className="cursor-pointer">Forgot your password?</p>
                {
                    currentState === "Login" ? 
                    <p className="cursor-pointer underline" onClick={() => setCurrentState('Sign Up') }>Create Account</p> : 
                    <p className="cursor-pointer underline" onClick={() => setCurrentState('Login') }>Login</p> 
                }
            </div>
            <button className="text-white text-sm bg-black px-5 py-2">{currentState === "Login" ? "Login" : "Sign Up"}</button>
        </form>
    )
}

export default Login;