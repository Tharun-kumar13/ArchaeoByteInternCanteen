import React, { useState } from 'react'
import { useContext } from 'react'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../context/Storecon'
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc, getDoc, doc, DocumentReference, query, where, updateDoc } from 'firebase/firestore'


import './cart.css'
import { auth, firestore } from '../../components/Signin/Firebase/Firebase';
import { update } from 'firebase/database';

function Cart() {
    const { cartItems, food_list, userDetails, removeCart, getTotalCartAmount, cartList, addList } = useContext(StoreContext)
    console.log(userDetails)
    const [cartId, setCartId] = useState([])

    food_list.map((items, index) => {
        if (cartItems[items._id] > 0) {
            cartId.push(items._id)

        }

    })

    function history() {
        alert("Hello")
        food_list.forEach(items => {
            cartId.map(ids => {
                if (ids === items._id) {
                    console.log(items.name)
                }
            })

        });


    }


    const paytoCart = () => {
        addList(cartItems)


    }
    /*
 function create1(uid, username, email, password) {
        const data = collection(firestore, "Data")

        var userDetails = {
            id: uid,
            Name: username,
            email: email,
            password: password
        }
        try {
            const decref = addDoc(data, userDetails);
            console.log(decref)
            alert("Sucessly user data Saved")
        }
        catch (error) {
            alert(error)
        }
    */








    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>items</p>
                    <p>title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Totla</p>
                    <p>Remove</p>
                </div>
                <br></br>
            </div>
            <hr></hr>

            {food_list.map((items, index) => {
                if (cartItems[items._id] > 0) {
                    return (
                        <div>
                            <div className='cart-items-title cart-items-items' key={items.id}>
                                <img src={items.image} />
                                <p>{items.name}</p>
                                <p>${items.price}</p>
                                <p>{cartItems[items._id]}</p>
                                <p>${items.price * cartItems[items._id]} </p>
                                <p onClick={() => removeCart(items._id)} className='cross'>x</p>
                            </div>
                            <hr></hr>
                        </div>



                    )
                }
            }
            )}
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Sub total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr></hr>
                    </div>
                    <div className='button'>
                        <button onClick={paytoCart}>Proceed to Pay</button>
                    </div>

                </div>
                <div>

                </div>


            </div>

        </div>

    )
}

export default Cart
