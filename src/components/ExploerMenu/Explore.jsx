import React from 'react'
import { menu_list } from '../../assets/assets.js'
import './Explore.css'
function Explore({ category, setCategory }) {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose You'r Food</p>
            <div className='explore-menu-list'>
                {menu_list.map((items) => {
                    return <div
                        onClick={() => setCategory(prev => prev === items.menu_name ? "All" : items.menu_name)}
                        key={items.menu_name} className='explore-menu-list-item'>
                        <img className={category === items.menu_name ? "active" : ""} src={items.menu_image} />
                        <p>{items.menu_name}</p>


                    </div>
                })}

            </div>
            <hr>

            </hr>
        </div>
    )
}

export default Explore
