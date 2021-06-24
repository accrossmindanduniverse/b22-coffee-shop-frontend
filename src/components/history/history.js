import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Footer from '../footer/footer'
import './history.css'
import { getAllTransactions } from './../../redux/actions/items';


const History = (props) => {
  const { token } = props.auth
  const { allTransactions } = props.items
  const [ modal, setModal ] = useState({
    onClick: false
  })

  const onClickModal = () => {
    setModal({
      ...modal,
      onClick: false
    })
  }

  const getAllItemTransactions = () => {
    props.getAllTransactions(token.refreshToken, token.userData.id)
  }

  useEffect(() => {
    getAllItemTransactions()
  }, [])

  console.log(allTransactions)

  return props.auth.token !== null &&  (
    <div>
      <div className='history-banner w-screen h-screen p-10'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-black text-white text-4xl checkout-text'>Let's see what you have bought!</p>
          <p onClick={() => 
            setModal({
              ...modal,
              onClick: true
            })
          } className='font-black text-white text-xl checkout-text'>Select item to delete</p>
        </div>
        <div className='flex justify-end'>
          <button className='font-black text-white text-xl checkout-text py-7 px-10'>Select All</button>
        </div>
        <div className='grid grid-cols-5 grid-rows-5 gap-10 rubik'>
          {
            allTransactions.map((item) => {
              console.log(item)
              return (
                <div className='flex flex-row bg-white w-full py-10 rounded-lg'>
                  <div className='w-10 h-10 rounded-full bg-gray-50'>
                    <img src="" alt=""/>
                  </div>
                  <div className='flex flex-col'>
                  <div>
                    <p>{item.code}</p>
                  </div>
                  <div>
                    <p>{item.total}</p>
                  </div>
                  <div className='w-72 flex flex-row'>
                    <div>
                      <p>{item.payment_method}</p>
                    </div>
                    <div className='flex w-full justify-end px-12'>
                      <label className='custom-checkbox'>
                        <input type="checkbox" onChange={() => 
                        setModal({
                          ...modal,
                          onClick: true
                        })
                      }/>
                        <span className='item'></span>
                      </label>
                    </div>
                  </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  items: state.items
})

const mapDispatchToProps = { getAllTransactions }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(History)
