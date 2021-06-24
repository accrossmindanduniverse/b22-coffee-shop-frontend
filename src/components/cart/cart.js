import React, { useState, useEffect } from 'react'
import './cart.css'
import Footer from '../footer/footer'
import { connect } from 'react-redux'
import Transaction from './transaction'

const Cart = (props) => {
  const [ total, setTotal ] = useState()
  const shipping = 10000
  const taxAndFees = total?.reduce((acc, curr) => acc + curr) * (10 / 100)
  const items = props.cart.items
  const finalTotal = total?.reduce((acc, curr) => acc + curr)
  const dealPrice = finalTotal + taxAndFees + shipping

  const getPrice = (data) => {
    const arrPrice = []
    data.map((e) => {
      arrPrice.push(e.data2nd[0].final_price * e.amount)
      return e
    })
    setTotal(arrPrice)
  }


  useEffect(() => {
    getPrice(items)
  }, [])

  return (
    <div className='cart-banner w-screen h-screen'>
    <div className="flex flex-col py-14 h-screen space-y-12">
      <div className='w-auto flex px-48'>
        <p className="font-black text-4xl text-white">Checkout your item now!</p>
      </div>
      <div className='flex flex-row px-44 h-auto w-screen'>
          <div className='flex flex-col bg-gray-50 rounded-2xl py-10 border'>
            <div className='flex justify-center items-center'>
              <p className="text-4xl font-black primary-brown-text">Order Summary</p>
            </div>
            {
              items.map((itemMap, index) => {
                console.log(itemMap.data2nd[0].id)
                return (
                <div key={index} className='px-10 py-7'>
                  <div className='flex flex-row border w-full space-x-5'>
                  <div>
                    <img className='w-14 h-14 rounded-lg' src={itemMap.data2nd[0].picture} alt=""/>
                  </div>
                    <div className='flex flex-col'>
                      <p>{itemMap.data2nd[0].name}</p>
                      <p>x {itemMap.amount} {itemMap.data2nd[0].variant}</p>
                    </div>
                  </div>
                  <div className='flex justify-end items-center'>
                    <p>IDR {itemMap.data2nd[0].final_price}</p>
                  </div>
                </div>
                )
              })
            }
            
            <div className="flex flex-col space-y-5 border-t uppercase px-8 py-10">
              <div className='text-xl space-y-2 w-96 justify-between flex flex-row'>
                <p className='text-xl'>subtotal</p>
                <p>{finalTotal}</p>
              </div>
              <div className='text-xl space-y-2 w-96 justify-between flex flex-row'>
                <p>tax & fees</p>
                <p>{taxAndFees}</p>
              </div>
              <div className='text-xl space-y-2 w-96 justify-between flex flex-row'>
                <p>shipping</p>
                <p>{shipping}</p>
              </div>
              <div className='w-96 justify-between flex flex-row'>
                <p className='font-black text-3xl'>total</p>
                <p className='font-black text-3xl'>{dealPrice}</p>
              </div>
            </div>
          </div>
          <Transaction total={dealPrice} finalTotal={finalTotal} taxAndFees={taxAndFees} shipping={shipping}/>
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
