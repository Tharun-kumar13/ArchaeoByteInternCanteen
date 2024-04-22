import { createContext, useEffect, useState } from 'react';

import { food_list } from '../assets/assets';

export const StoreContext = createContext(null)




const StoreContextProvider = (props) => {
    const [userName, setUserName] = useState("")
    const [userId, setuserID] = useState("");
    const [userDetails, setUserDetails] = useState({})
    const [cartList, setCartList] = useState({})
    const [DBcart, setDbCart] = useState({})


    const addId = (id) => {
        setuserID(id)
    }

    const addUser = (username) => {
        setUserName(username)
    }

    const addDetails = (userD) => {
        setUserDetails(userD)
    }

    const addList = (items) => {
        setCartList(items)
    }
    const DbCart = (items) => {
        setDbCart(items)
        console.log("Sucessfully added")
    }


    const [cartItems, setcartItems] = useState({});
    const addTocart = (ItemId) => {
        if (!cartItems[ItemId]) {
            setcartItems((prev) => ({ ...prev, [ItemId]: 1 }))
        }
        else {
            setcartItems((prev => ({ ...prev, [ItemId]: prev[ItemId] + 1 })))
        }
    }

    const removeCart = (ItemId) => {
        setcartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))
    }



    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)

                TotalAmount += itemInfo.price * cartItems[item];
            }
        }
        return TotalAmount
    }

    const contextValue = {
        food_list,
        cartItems,
        setcartItems,
        addTocart,
        removeCart,
        getTotalCartAmount,
        userName,
        userId,
        addId,
        addUser,
        userDetails, addDetails,
        cartList, addList,
        DBcart, DbCart,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider