import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import CategoryItem from '../components/CategoryItem'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Product from './Product'
import ProductList from './ProductList'

const Home = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>


    
  )
}

export default Home
