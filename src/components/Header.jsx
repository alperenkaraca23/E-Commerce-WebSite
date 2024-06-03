import React, { useState } from 'react'
import '../css/Header.css';
import { LuShoppingBag } from "react-icons/lu";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {

    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black"
        }

        setTheme(!theme)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <div className='flex-column'>
                    <img className='logo' src='./src/images/logo.jpg' />
                    <a href='/' className='logo-text'>Men's Universe</a>
                </div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li><a href="/" className='nav-text'>Home</a></li>
                        <li><a href="/About.jsx" className='nav-text'>About</a></li>
                    </ul>
                </nav>
            </div>

            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='Filter' />
                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <FaSun className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <LuShoppingBag style={{ marginRight: '6px' }} className='icon' />
                    </Badge>

                </div>
            </div>
        </div >
    )
}

export default Header