import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import CartTotal from "../components/totalCart";
import { useNavigate } from "react-router-dom";




function OrderPlace() {


    const [method, setMethod] = useState('cod');

    const navigate = useNavigate()

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">

            {/* ------- Left Side ------- */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px] px-4">
                <div className="text-xl my-5 sm:text-2xl">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="flex gap-3 ">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
                </div>
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street Address" />
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City " />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
                </div>
                <div className="flex gap-3">
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zip Code " />
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
                </div>
                    <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone No" />
            </div>

            {/* ---------- Right Side ---------- */}

            <div className="mt-8 p-2">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>

                <div className="mt-5">
                    <Title text1={'Payment'} text2={'Method'} />
                    {/* ------ Payment Method ------ */}
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div onClick={() => setMethod('stripe')} className="flex items-center justify-center border px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border m-auto rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
                            <img src={assets.stripe_logo} className="h-5 mx-4"  />
                        </div>
                        <div onClick={() => setMethod('razorpay')} className="flex items-center justify-center border px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border m-auto rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
                            <img src={assets.razorpay_logo} className="h-5 mx-4"  />
                        </div>
                        <div onClick={() => setMethod('cod')} className="flex items-center justify-center border px-3 py-2 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border m-auto rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
                            <b className="text-gray-500 text-sm font-medium mx-4">Cash On Delivery</b>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate('/order')} className="bg-black text-white px-5 mt-4 py-2 text-sm">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderPlace;