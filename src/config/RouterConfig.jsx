import React from 'react'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetails from '../components/ProductDetails';
import About from '../pages/About';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/about.jsx' element={<About />} />
        </Routes>
    )
}

export default RouterConfig
