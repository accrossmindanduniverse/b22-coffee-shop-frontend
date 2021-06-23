import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './productCust.css'
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai'

import coffee1 from '../../assets/coffee-1.png'
import chat from '../../assets/chat-1.png'
import zulaikha from '../../assets/zulaikha.png'
import spaghetti from '../../assets/spaghetti.png'
import FavoriteProduct from './favoriteProduct/favoriteProduct';

const ProductCust = (props) => {
  const [data, setData] = useState([])

  const handleGeData = () => {
  axios.get('http://localhost:3001/items').then((res) => {
    setData(res.data.data)
  }).catch((err) => {
    console.log(err)
    })
  }
  console.log(props)

  useEffect(() => {
    handleGeData()
  }, [])

  return (
    <div className="parent">
      
      <div className="flex flex-row relative m-10">

      <div className="relative flex justify-center items-center space-x-72">

        <div className='relative flex w-52'>
          <div className='w-20'>
            <img src={coffee1} alt=""/>
          </div>
          <div>
            <p className='font-bold text-xl'>
              Coffee Shop
            </p>
          </div>
        </div>

        <div className='relative m-auto navlist items-center justify-center flex flex-row'>
            
            <div className='space-x-16 w-auto'>
              <Link className="nav-hover" to='/'>Home</Link>
              <Link className="nav-hover" to='/product-cust'>Product</Link>
              <Link className="nav-hover" to="/payment-delivery">Your Cart</Link>
              <Link className="nav-hover" to="/history">History</Link>
            </div>

            <div className="flex-1 flex flex-row space-x-10 relative w-auto justify-center items-center font-bold primary-brown-text">
              <div className=' w-10 h-10'>
                <em className='fas fa-search'></em>
              </div>
              <div className='relative'>
                <div className="primary-brown-background w-4 h-4 rounded-full flex items-center justify-center absolute chat-notif">
                  <p className="text-white text-one relative">1</p>
                </div>
                  <div className='flex items-center'>
                    <img src={chat} alt=""/>
                  </div>
              </div>
              <div>
                <Link className='relative'>
                  <img className='h-10 w-h-10 rounded-full' src={zulaikha} alt=""/>
                </Link>
              </div>
            </div>

          </div>

      </div>
  </div>

      <div className='flex flex-row'>
      
      <div className="flex flex-col border-t-2 border-r-2 relative">

        <div className="flex flex-col space-y-10 text-center items-center relative p-10">
          <div>
            <p className="primary-brown font-bold text-2xl">Promo For You</p>
          </div>
          <div className="w-72">
            <p>Coupons will be updated every weeks. Check them out! </p>
          </div>
        </div>

        <div className="promo-box flex flex-row relative p-24">
          <div className="flex items-center">
            <div className="box-1">
            </div>
            <div className="box-2">
            </div>
            <div className="box-3 flex justify-center p-12">
              <div className="flex flex-col items-center text-center space-y-10">
                <img className="h-32 w-32 rounded-full" src={spaghetti} alt=""/>
                <div className="w-72">
                  <p className="text-3xl font-bold text-center">Beef Spaghetti 20% Off</p>
                </div>
                <div className="w-72">
                  <p className="text-xl">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                </div>
                <div className="flex-1 space-y-4 dashed-border border-t-2 pt-4">
                  <p className="text-xl">COUPON CODE</p>
                  <p className="font-bold text-2xl">FNPR15RG</p>
                  <p>Valid untill October 10th 2020</p>
                </div>
                <div className="pt-10 flex float-right w-full">
                  <button className="w-80 h-16 primary-brown-background text-white text-center rounded-2xl">Apply Coupon</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col items-start justify-end p-20 text-xl space-y-4">
          <p className="font-bold">Terms and Condition</p>
          <p>1. You can only apply 1 coupon per day</p>
          <p>2. It only for dine in</p>
          <p>3. Buy 1 get 1 only for new user</p>
          <p>4. Should make member card to apply coupon</p>
        </div>

        </div>
        <div className='flex flex-col'>
        
        <div className='border-t-2 p-10 flex justify-center'>
          <nav className='nav-product text-gray-300 space-x-32 '>
            <Link className='active font-bold text-xl'>Favorite Product</Link>
            <Link className='active font-bold text-xl' to=''>Coffee </Link>
            <Link className='active font-bold text-xl' to=''>Non Coffee</Link>
            <Link className='active font-bold text-xl' to=''>Foods</Link>
            <Link className='active font-bold text-xl' to=''>Add On</Link>
          </nav>
        </div>
        <FavoriteProduct propsData={data}/>
      </div>
      </div>

      <div className="footer flex pl-20 border-2 relative p-24">
          <div className="flex flex-row">
              <div>
                <img src={coffee1} alt=""/>
              </div>
              <div className="pl-3">
                <p className="font-bold text-xl">Coffee Shop</p>
                <div className="relative right-9 pt-4 leading-8 w-64">
                  <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                </div>
      
                <div className="pt-10 flex flex-col relative space-x-5 space-y-4">
                  <div className="flex flex-row space-x-5">
                    <div className="text-center h-10 w-10 flex items-center justify-center rounded-full bg-yellow-400">
                      <AiFillFacebook/>
                    </div>
                    <div className="text-center h-10 w-10 flex items-center justify-center rounded-full bg-yellow-400">
                      <AiFillTwitterCircle/>
                  </div>
                  <div className="text-center h-10 w-10 flex items-center justify-center rounded-full bg-yellow-400">
                    <AiFillInstagram/>
                  </div>
                  
                  </div>
  
                  <div className="pt-4 flex text-black">
                    <p>
                      ©2020CoffeeStore
                    </p>
                  </div>
              </div>
              </div>
      
      
            <div className="flex flex-row product-and-engage">
              <div>
                <div className="pr-44 space-y-2">
                  <p className="font-bold text-xl">
                    Product
                  </p>
                  <p>
                    Download
                  </p>
                  <p>
                    Pricing
                  </p>
                  <p>
                    Locations
                  </p>
                  <p>
                    Countries
                  </p>
                  <p>
                    Blog
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-44 space-y-2">
                  <p className="font-bold text-xl">
                    Engage
                  </p>
                  <p>
                    Coffee Shop?
                  </p>
                  <p>
                    FAQ
                  </p>
                  <p>
                    About Us
                  </p>
                  <p>
                    Privacy Policy
                  </p>
                  <p>
                    Terms of Service
                  </p>
                </div>
              </div>
            </div>        
          </div>
        </div>

    </div>
  )
}

export default ProductCust
