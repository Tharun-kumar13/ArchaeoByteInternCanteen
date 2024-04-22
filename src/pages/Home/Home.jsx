import React, { useState } from 'react'
import Header from '/src/components/header/Header.jsx'
import Explore from '../../components/ExploerMenu/Explore'
import Fooddisplay from '../../components/FoodDisply/Fooddisplay'
function Home() {
    const [category, setCatagory] = useState("All")

    return (
        <div>
            <Header />
            <Explore category={category} setCategory={setCatagory} />
            <Fooddisplay category={category} />
        </div>
    )
}

export default Home