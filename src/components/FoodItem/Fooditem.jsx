import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecon'


function Fooditem({ id, name, description, image, price }) {
    const { cartItems, addTocart, removeCart } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className='food-item-img-conatiner'>
                <img className='food-item-image' src={image} />{
                    !cartItems[id]
                        ? <img className="add" onClick={() => addTocart(id)} src={assets.add_icon_white} />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addTocart(id)} src={assets.add_icon_green} />
                        </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='fod-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} />
                </div>
                <p className='food-item-desc'> {description}</p>
                <p className='food-item-price'>${price}</p>
            </div>

        </div>
    )
}

export default Fooditem
