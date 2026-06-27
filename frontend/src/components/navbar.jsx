import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import { PiLessThan } from "react-icons/pi";
import { ShopContext } from "../context/ShopContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  let [visible, setVisible] = useState(false);

  const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="h-20 px-6 border-b border-gray-200 flex justify-around items-center">
      {/* Logo */}
      <Link to="/" className="w-40 p-1">
        <img src={assets.Sprint_logo} alt="Sprint" />
      </Link>

      {/* Nav links */}
      <ul className="flex items-center gap-6 list-none m-0 p-0 hidden lg:flex">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `no-underline text-gray-600 hover:text-black text-sm tracking-wide transition-colors
                 ${isActive ? "text-black font-semibold border-b-2 border-black pb-0.5" : ""}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex gap-4 items-center text-gray-700">
        <CiSearch onClick={() => setShowSearch(!showSearch)} size={22} className="cursor-pointer hover:text-black" />

        <div className="group relative">
          <Link to={'/login'}><CiUser size={22} className="cursor-pointer hover:text-black" /></Link>

          {/* invisible pt-4 bridge gap ko cover karta hai taake hover na toote */}
          <div className="hidden group-hover:block absolute right-0 pt-4 z-10">
            <div
              className="flex flex-col w-36 py-3 px-4 bg-white border border-gray-100 
                    shadow-md rounded text-sm text-gray-500"
            >
              {["Profile", "Orders", "Logout"].map((item) => (
                <button
                  key={item}
                  className="text-left py-2 px-2 rounded hover:bg-gray-50 
                     hover:text-black transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <CiShoppingCart
            size={22}
            className="cursor-pointer text-black hover:text-blue-400 w-5 w-min-5"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>

        <FaBars onClick={() => setVisible(true)} className="sm:hidden" />

        {/* Sidebar for small Screen */}
        <div
          className={`absolute top-0 bottom-0 right-0 z-50 overflow-hidden bg-white 
              transition-all duration-300 ${visible ? "w-full" : "w-0"}`}
        >
          <div className="flex flex-col h-full">
            {/* Back button */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-3 p-4 border-b border-gray-600 cursor-pointer"
            >
              <PiLessThan size={22} className="" />
              <p className="m-0 text-sm font-bold">Back</p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col">
              {[
                { to: "/", label: "Home" },
                { to: "/collection", label: "Collection" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `py-3 pl-6 border-b border-gray-600 remove-underline text-sm tracking-wide text-black
             ${isActive ? "bg-black text-white" : "text-gray-300 hover:text-gray-400"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
