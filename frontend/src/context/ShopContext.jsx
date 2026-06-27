import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();



const ShopContextProvider = ({children}) => {

    const currency = "$";
    const delivery_fee = 10;

    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate();


    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem);

        if (!size) {
            return toast.error("Select Product Size");
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;

        for (let items in cartItem) {
            for (let item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item] 
                    }
                } catch (err) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItem) {
            let cartInfo = products.find((product)=> product._id === items); 
            
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0){
                        totalAmount += cartInfo.price * cartItem[items][item]
                    }
                } catch (err) {

                }     
            }
        }

        return totalAmount;
    }


    useEffect(() => {
        console.log(cartItem);
    }, [cartItem])

    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch,
        cartItem, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider >
    )
} 

export default ShopContextProvider;