import assets from "../assets/assets";



function Navbar () {
    return (
        <div className="flex items-center justify-between py-2 px-[4%] bg-amber-400">
            <img src={assets.sprintix_logo} className="h-10 w-[max(10%, 80px)]" />
            <button className="bg-gray-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer">Logout</button>
        </div>
    )
}

export default Navbar;