import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storecon'
import Fooditem from '../FoodItem/Fooditem'
import './Fooddisplay.css'

function Fooddisplay({ category }) {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food_display' id='food_display'>
            <h2>Top Dishes near You</h2>
            <div className='food_display_list'>
                {food_list.map((items, index) => {
                    if (category == "All" || category === items.category) {
                        return <Fooditem key={index} id={items._id} name={items.name} description={items.description} image={items.image} price={items.price} />

                    }

                })}


            </div>
        </div>
    )
}

export default Fooddisplay
