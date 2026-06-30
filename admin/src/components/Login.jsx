import { useState } from "react";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";


function Login ({setToken}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            // console.log(email, password)
            const response = await axios.post(backendURL + "/api/user/admin", {email, password})
            // console.log(response)
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center w-full">
            <div className="bg-white shadow-md rounded-lg px-5 py-5 max-w-md">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3 min-w-70">
                        <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="email" placeholder="Joe@gmail.coim" name=""  required/>
                    </div>
                    <div className="mb-3 min-w-70">
                        <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="password" placeholder="Enter Password" name=""  required/>
                    </div>
                    <button className="bg-black text-white px-5 py-2 text-sm w-full rounded-md cursor-pointer mt-2">Login</button>
                </form>
            </div>
        </div>
    )
}



export default Login;