import React, { useState, useEffect } from 'react'
import './cart.css'
import Footer from '../footer/footer'
import { connect } from 'react-redux'
import Transaction from './transaction'

const Cart = (props) => {
  const [ data, setData ] = useState([])
  const items = props.cart.items
  // const items2nd = items[0].slice(1)
  // console.log(items2nd[0])
  const spread = [...[items]]
  // console.log(spread[0][0].map((e, idx) => {
  //   console.log(e)
  // }))
  console.log(...[spread[0][0]])
  // const finalItems = [...[items[0][1], [items[1]]]]
  // useEffect(() => {
  //   setData(finalItems)
  // }, [])
  // console.log(data.map((e) => {
  //   console.log(e.data2nd[0])
  // }))

  return items > 0 && (
    <div className='cart-banner w-screen h-screen'>
    <div className="flex flex-col mb-14 px-32 w-screen h-screen space-y-12">
      <div>
        <p className="py-10 font-black text-4xl text-white w-72">Checkout your item now!</p>
      </div>
      <div className='flex flex-row justify-between h-screen py-10 w-screen '>
          <div className='flex flex-col space-y-20 h-auto bg-gray-50 rounded-2xl px-24 py-10'>
            <div className='flex justify-center items-center'>
              <p className="text-4xl font-black primary-brown-text">Order Summary</p>
            </div>
            {
              data.map((itemMap, index) => {
                console.log(itemMap)
                return (
                <div key={index}>
                  <div className='flex flex-col'>
                    <img className='w-14 h-14 rounded-lg' src={itemMap.data2nd[0].picture} alt=""/>
                    <p>{itemMap.data2nd[0].name}</p>
                    <p>{itemMap.data} {itemMap.data2nd[0].variant_code}</p>
                  </div>
                  <div className='flex justify-end items-center'>
                    <p>{itemMap.data2nd.price}</p>
                  </div>
                  <div className="flex flex-row uppercase justify-between">
                  <div className=''>
                    <p className='font-black text-3xl'></p>
                  </div>
                  </div>
                  <div className="flex flex-col">
                    <div className='text-xl space-y-2'>
                      <p></p>
                    </div>
                    <div className='flex float-right'>
                      <p className='font-black text-3xl'></p>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
          <div className='flex flex-col space-y-8 px-96 w-auto h-full'>
          <div className='px-5 w-auto'>
            <div className='flex flex-row space-x-44'>
              <div>
                <p className='font-black text-white text-3xl'>Address details</p>
              </div>
              <div>
              <button class="checkout-text font-black text-white text-2xl">edit</button>
              </div>
            </div>
          <div className='flex flex-col divide-y-2 space-y-10 bg-gray-50 rounded-xl text-2xl'>
            <div>
              <p><span className="font-black">Delivery </span>street?</p>
            </div>
            <div>
              <p>address</p>
            </div>
            <div>
              <p>phone number</p>
            </div>
          </div>
          </div>
          <div>
            <p className='checkout-text font-black text-white text-3xl'>Payment Method</p>
          </div>
          <div className='flex flex-col bg-gray-50 w-full px-5 py-5 rounded-lg h-full'>
            <div className='bg-gray-50 text-2xl rounded-xl'>
              <div className='divide-y space-y-20'>
              <div className="flex flex-row space-x-3">
                <div className="flex items-center">
                  <label className="radio">
                    <input type="radio" name="choose-payment"/>
                    <span className="item"></span>
                  </label>
                </div>
                  <div className="flex items-center w-14 h-14 rounded-lg bg-yellow-500 text-white justify-center">
                    <em className=" far fa-credit-card"></em>
                  </div>
                  <span className="flex items-center">Bank account</span>
              </div>
              </div>
            </div>
            <div className="flex flex-row space-x-3 pt-5">
                <div className="flex items-center">
                  <label className="radio">
                    <input type="radio" name="choose-payment"/>
                    <span className="item"></span>
                  </label>
                </div>
                  <div className="flex items-center w-14 h-14 rounded-lg primary-brown-background text-white justify-center">
                    <em className="fas fa-university"></em>
                  </div>
                  <span className="flex items-center">Card</span>
              </div>
              <div className="flex flex-row space-x-3 pt-5">
                <div className="flex items-center">
                  <label className="radio">
                    <input type="radio" name="choose-payment"/>
                    <span className="item"></span>
                  </label>
                </div>
                  <div className="flex items-center w-14 h-14 rounded-lg bg-yellow-400 justify-center">
                    <em className="fas fa-truck"></em>
                  </div>
                  <span className="flex items-center">Cash On Delivery</span>
              </div>
          </div>
          <div>
            <Transaction/>
          </div>
        </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  items: state.items,
  auth: state.auth
})

export default connect(
  mapStateToProps
)(Cart)
