import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '/src/assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/Storecon';

import { getAuth, signOut } from 'firebase/auth';

const Navbar = ({ setShowLogin }) => {
    const { userName } = useContext(StoreContext)


    const location = useLocation();
    const auth = getAuth();
    const user = auth.currentUser;

    console.log(userName)

    function logout() {
        signOut(auth).then(() => {
            alert("Log out SucessFull")
            window.location.reload()


        }).catch((error) => {
            alert(error)
        })

    }






    const [menu, steMenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);
    return (
        <div className='navbar' id='navbar'>
            <Link to='/'><img src={assets.clogo} className='Logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/'><a href='#navbar' className={menu === "home" ? "active" : ""} onClick={() => steMenu("home")}>Home</a></Link>
                <a href='#explore-menu' className={menu === "menu" ? "active" : ""} onClick={() => steMenu("menu")}>Menu</a>
                <a href='#footer' className={menu === "Contact" ? "active" : ""} onClick={() => steMenu("Contact")}>Contact</a>
                <a href='#food_display' className={menu === "Special" ? "active" : ""} onClick={() => steMenu("Special")}>Special</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} />
                <div className='navbar_search_icon'>
                    <Link to='/cart'> <img src={assets.basket_icon} /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {
                    !user ? <button onClick={() => setShowLogin(true)}>Sign in</button> : <button onClick={() => logout()}>Log out</button>
                }
                {
                    user ? <p id="user_name"><Link to='/user'>{userName}<img className=' user_icon' src={assets.user_icon} /></Link></p> : "No user"
                }
            </div>
        </div>
    )
}

export default Navbar