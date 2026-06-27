import { assets } from "../assets/assets";
import { RiExchangeFundsFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";




function OurPolicy() {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 mt-5 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
                <RiExchangeFundsFill className="text-4xl w-15 m-auto mb-3"/>
                <p className="font-semibold">Easy Exchange Policy</p>
                <p className="text-gray-400">We Offer hussle free Exchange Policy</p>
            </div>

            <div>
                <IoShieldCheckmark className="text-4xl w-15 m-auto mb-3"/>
                <p className="font-semibold">7 Days Return Policy</p>
                <p className="text-gray-400">We Provide 7 Days free Return Policy</p>
            </div>

            <div>
                <BiSupport className="text-4xl w-15 m-auto mb-3"/>
                <p className="font-semibold">Best Customer Support</p>
                <p className="text-gray-400">We Provide 24/7 Customer Support</p>
            </div>
        </div>
    )
}

export default OurPolicy;