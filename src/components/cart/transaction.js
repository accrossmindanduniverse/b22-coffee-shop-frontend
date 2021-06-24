import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { finalTransaction } from '../../redux/actions/cart'

const Transaction = (props) => {
  const { token } = props.auth
  const [ getItems, setGetItems ] = useState([])
  const [ getId, setGetId ] = useState([])
  const [ paymentMethod, setPaymentMethod ] = useState([{
    bank: '',
    card: '',
    cashOnDelivery: ''
  }])

  const paymentArr = [{
    bank: 'Bank',
    card: 'Card',
    cashOnDelivery: 'Cash On Delivery'
  }]

  console.log(getItems.forEach((e) => {
    console.log(e)
  }))
  const handleTransaction = () => {
    console.log(getItems)
    const data = {
      item_id: getId,
      total: props.total,
      tax: props.taxAndFees,
      item_amount: getItems.map((e) => {
        return e[0].amount
      }),
      variant: getItems.map((e) => {
        return e[0].variant
      }),
      payment_method: paymentArr
    }
    console.log(data)
    props.finalTransaction(token.refreshToken, data)
  }
  console.log(paymentMethod[0].bank)

  const mapAllItemsDataForTransaction = (data) => {
    const itemsArr = []
    data.map((e) => {
      itemsArr.push([{
        id: e.data2nd[0].id,
        amount: e.amount,
        variant: e.data2nd[0].variant_code
      }
    ])
  })
  setGetItems(itemsArr)
}

const mapAllItemsId = (id) => {
  const idArr = []
  id.map((e) => {
    idArr.push(e.data2nd[0].id)
  })
  setGetId(idArr)
}

  useEffect(() => {
    mapAllItemsDataForTransaction(props.cart.items)
  }, [])

  useEffect(() => {
    mapAllItemsId(props.cart.items)
  }, [])

  return (
    <div>
      <div className='flex flex-col space-y-8 px-52 w-full'>
            <div className='flex flex-row space-x-44'>
              <div>
                <p className='font-black text-white text-3xl'>Address details</p>
              </div>
              <div>
              <button class="checkout-text font-black text-white text-2xl">edit</button>
              </div>
            </div>
          <div className='flex flex-col divide-y-2 space-y-10 bg-gray-50 rounded-xl text-2xl p-10'>
            <div>
              <p><span className="font-black">Delivery </span>street?</p>
            </div>
            <div>
              <input type='text' placeholder={token.userData.user_address}/>
            </div>
            <div>
              <input type="text" placeholder={token.userData.phone_number}/>
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
                  <span className="flex items-center" onChange={(e) => 
                    setPaymentMethod({
                      ...paymentMethod,
                      bank: e.target.value
                    })
                  }>Bank account</span>
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
                  <span className="flex items-center" onChange={(e) => 
                    setPaymentMethod({
                      ...paymentMethod,
                      card: e.target.value
                    })
                  }>Card</span>
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
                  <span className="flex items-center" onChange={(e) => 
                    setPaymentMethod({
                      cashOnDelivery: e.target.value
                    })
                  }>Cash On Delivery</span>
              </div>
          </div>
          <div>
          <div>
            <button onClick={handleTransaction} className='confirm-pay-btn font-bold text-white text-2xl w-full h-full'>Confirm And Pay</button>
          </div> 
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.items,
  cart: state.cart,
  auth: state.auth
})

const mapDispatchToProps = { finalTransaction }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(Transaction)
