import coffee1 from '../../../assets/coffee-1.png'
import chat from '../../../assets/chat-1.png'
import zulaikha from '../../../assets/zulaikha.png'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineRight, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './productDetail.css'


function ProductDetail(props) {
  const [data, setData] = useState([{}])
  console.log(data)

  const handleGeData = () => {
    axios.get(`http://localhost:3001/items${props.history.location.search}`).then((res) => {
      setData(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const buttonInc = () => {
    if (props.numCount < data.quantity ) {
      return props.numCount + 1
    }
    if (props.numCount >= data.quantity) {
      window.alert('The Item Is Out :)')
    }
  }

  const buttonDec = () => {
    if (props.numCount >= 0) {
      return props.numCount - 1
    }
  }
  
    useEffect(() => {
      handleGeData()
    }, [])



  return (
  <div className='parent'>

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

    <div className="flex-1 flex flex-row space-x-10 relative justify-center items-center font-bold primary-brown-text">
      <div className='relative'>
        <div className="primary-brown-background w-4 h-4 rounded-full flex items-center justify-center absolute chat-notif">
          <p className="text-white text-one relative">1</p>
        </div>
          <div className='flex items-center'>
            <img src={chat} alt=""/>
          </div>
      </div>
      <div className="flex flex-row">
        <div className="relative top-1">
          <FiSearch className='absolute left-1'/>
        </div>
        <div className='bg-gray-100 rounded-lg left-10'>
          <input className="bg-gray-100 rounded-lg left-5 relative" type="text" placeholder="Search"/>
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


<div className=''>
<div class="flex flex-row bg-gray-100 space-x-72 justify-center pt-32">
{
  data.map((dataMap, index) => {
  console.log(props.keyData)
  return (
  <div key={index} className='flex flex-row'>

    <div className='flex flex-col'>
    <div className='space-y-20'>
      <div className='flex flex-row space-x-3'>
        <div>
          <p>Favorite & Promo</p>
        </div>
        <div>
          <AiOutlineRight/>
        </div>
        <div>
          <p className='primary-brown font-black'>{dataMap.name}</p>
        </div>
      </div>
      <div className='w-96 flex justify-center'>
        <img className='h-64 w-h-64 rounded-full' src={dataMap.image} alt=""/>
      </div>
      <div className="w-96 text-center">
        <p className="font-black text-4xl uppercase">{dataMap.name}</p>
        <p className="text-2xl">{dataMap.price}</p>
      </div>
      <div className='flex flex-col w-96 text-center space-y-7'>
        <button className="h-14 rounded-2xl primary-brown-background text-white font-bold text-xl">Add to Cart</button>
        <button className="h-14 rounded-2xl primary-yellow-background primary-brown font-bold text-xl">Ask a Staff</button>
      </div>
    </div>
    </div>
  </div>
  )
 })
}
{
  data.map((dataMap2nd, index2nd) => {
    console.log(dataMap2nd)
  return (
<div className='delivery-height flex flex-col'>
  <div key={index2nd} className='delivery-text space-y-7 bg-white rounded-lg p-5'>
  <div className="delivery-padding flex flex-row">
    <p className=" w-56">{dataMap2nd.delivery_on}</p>
  </div>
    <div className="delivery-padding flex flex-row">
      <p className=" w-56">{dataMap2nd.item_description}</p>
    </div>
  <div className="flex-1 flex flex-col space-y-8">
    <div className="text-center">
    <p className="font-black text-xl">Choose a size</p>
  </div>
  <div>
    <div className="flex flex-row space-x-24 justify-center text-center top-24 relative">
      <div className="flex">
        <p className="h-10 w-10 rounded-full bg-yellow-400 text-xl font-bold">R</p>
      </div>
      <div className="flex">
        <p className="h-10 w-10 rounded-full bg-yellow-400 text-xl font-bold">L</p>
      </div>
      <div className="flex">
        <p className="h-10 w-10 rounded-full bg-yellow-400 text-xl font-bold">XL</p>
    </div>
    </div>
</div>

  </div>
</div>
  <div className="delivery-choosing space-y-10 space-x-4">
    <p className="text-center font-black text-xl">Choose Delivery Methods</p>
    <button className="w-36 h-9 primary-brown-background relative font-bold text-white rounded-lg">Dine In</button>
    <button className="w-36 h-9 bg-gray-200 relative rounded-lg">Door Delivery</button>
    <button className="w-36 h-9 bg-gray-200 relative rounded-lg">Pick Up</button>
  </div>

  <div className="flex-1 relative top-10">
    <form className='flex flex-row space-x-3'>
      <p className="font-semibold">Set time :</p>
      <input className='time-input' type="text" placeholder="Enter the time you'll arrived"/>
    </form>
  </div>
</div>

)
})
}

</div>
{
data.map(dataMap3rd => {
  return (
  <div className="flex-1 flex flex-row relative justify-center items-center space-x-10 pl-96 bottom-20">

  <div className="flex-1 flex flex-row justify-center items-center bg-white h-44 rounded-2xl shadow-lg">
    <div className="flex-1 pt-24 flex justify-center items-center pb-24">
      <img className="h-24 w-24 rounded-full" src={dataMap3rd.image} alt=""/>
    </div>
    <div className="flex-1 pr-20">
      <p className="font-black text-2xl">{dataMap3rd.name}</p>
      <p>xl (Large)</p>
      <p>xl (Regular)</p>
    </div>
    <div className="flex-1">
      <div className="flex flex-row">
        <div className="flex-1 flex justify-center text-center">
          <button onClick={buttonInc} className="h-8 w-8 rounded-full bg-yellow-400 text-xl font-black">-</button>
        </div>
        <div>
          <button className="font-black text-xl">{props.numCount}</button>
        </div>
        <div className="flex-1 flex justify-center text-center">
          <button onClick={buttonDec} className="h-8 w-8 rounded-full bg-yellow-400 text-xl font-black">+</button>
        </div>
      </div>
    </div>
</div>

<div className="flex-1">
  <button className="bg-yellow-400 h-44 w-56 rounded-2xl shadow-lg font-black">
    CHECKOUT
  </button>
</div>

</div>
    )
  })
}
</div>
 <div className="bg-white flex pl-20 relative p-6">
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
export default ProductDetail
