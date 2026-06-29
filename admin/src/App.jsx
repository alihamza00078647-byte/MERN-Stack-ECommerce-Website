import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Orders from "./pages/Orders";
import Add from "./pages/add";
import List from "./pages/List";
import { useState } from "react";
import Login from "./components/Login";


const backendURL = () => {
  
}


function App() {
  const [token, setToken] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login />
      ) : (
        <>
          <>
            <Navbar />
            <hr />
          </>
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
