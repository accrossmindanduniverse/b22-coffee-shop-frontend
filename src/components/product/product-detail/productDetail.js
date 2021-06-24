import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './productDetail.css'
import Footer from '../../footer/footer'
import { getDetailItem } from './../../../redux/actions/items';
import { connect } from 'react-redux'
import { getItemsAndVariants, getDetailVariant } from '../../../redux/actions/items';
import ItemAmountCounter from './itemAmountCounter'
import { addItems } from '../../../redux/actions/cart'


function ProductDetail(props) {
  const variantData = props.items.itemsAndVariants
  const dataId = props.location.state.getId
  const variantDetailData = props.items.variantDetail
  const [ tab, setTab ] = useState()
  // const [ selected, setSelected ] = useState([])
  const [ variants, setVariants ] = useState([])
  const [ newData, setNewdata ] = useState([])

  const mapAllVariantName = (key) => {
    const variantName = []
    key.forEach((row) => {
      variantName.push(row.variant_code)
    })
    setVariants(variantName)
  }

  const mapNewArrItems = (allItems) => {
    const allItemsArr = []
    allItems.map((row) => {
      if (row.variant_code === tab) {
        if(!allItemsArr.includes(row.variant_code)) allItemsArr.push(row)
      }
      return row
    })
    setNewdata(allItemsArr)
  }
  
  const handleVariantTabClick = (tabComp) => {
    props.getDetailVariant(dataId, tabComp)
    setTab(tabComp)
  }
  
  useEffect(() => {
    mapNewArrItems(variantData)
  }, [variantData])


  useEffect(() => {
    mapAllVariantName(variantData)
  }, [variantData])
  
  useEffect(() => {
    props.getItemsAndVariants(dataId, tab)
  }, [variantDetailData])

  useEffect(() => {
    if (variants) {
      setTab(variants[0])
     props.getDetailVariant(variants[0])
    }
  }, [variants[0]])

  return (
    <div className='parent'>
    <div className=''>
    {
    newData.map((newMap, index) => {
      return (
    <div key={index} className="flex flex-row bg-gray-100 space-x-72 justify-center pt-32">
      <div className='flex flex-row'>
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
              <p className='primary-brown font-black'>{newMap.name}</p>
            </div>
          </div>
          <div className='w-96 flex justify-center'>
            <img className='h-64 w-h-64 rounded-full bg-gray-700' src={newMap.picture} alt=""/>
          </div>
          <div className="w-96 text-center space-y-4 font-black uppercase">
            <p className="font-black text-4xl"></p>
            <p className="text-2xl">IDR {(newMap.final_price).toLocaleString('id')}</p>
          </div>
          <div className='flex flex-col w-96 text-center space-y-7'>
            <button className="h-14 rounded-2xl primary-brown-background text-white font-bold text-xl">Add to Cart</button>
            {/*  onClick={handleClickToCart} */}
            <button className="h-14 rounded-2xl primary-yellow-background primary-brown font-bold text-xl">Ask Staff</button>
          </div>
        </div>
        </div>
      </div>
    <div className='delivery-height space-y-10 flex flex-col'>
      <div className='delivery-text space-y-7 bg-white rounded-lg p-10'>
      <div className="flex flex-row">
        <p className="text-3xl">{newMap.delivery_on}</p>
      </div>
        <div className="flex flex-row text-justify">
          <p className="text-3xl">{newMap.item_description}</p>
        </div>
      <div className="flex-1 flex flex-col space-y-8">
        <div className="text-center">
        <p className="font-black text-xl">Choose size</p>
      </div>
      <div>
        <div className="flex flex-row space-x-24 justify-center">
      {
        variants.map((variantName, newIdx) => {
          return (
            <div key={newIdx} className="flex text-center relative">
              <button onClick={() => handleVariantTabClick(variantName)} className={`h-8 w-8 rounded-full ${variantName === tab ? 'bg-gray-300' : 'bg-yellow-400'} text-xl font-bold`}>{variantName}</button>
            </div>
          )
        })
      }
        </div>
    </div>

      </div>
    </div>
      <div className="delivery-choosing space-y-10 space-x-4">
        <p className="text-center font-black text-xl">Choose Delivery Method</p>
        <button className="w-36 h-9 bg-gray-200 relative rounded-lg">Dine In</button>
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

    </div>
      )
    })
    }
        <div className="">
          {props.items.variantDetail.length > 0 && <ItemAmountCounter checkoutData={newData}/>}
        </div>
      </div>
    <Footer/>
    </div>
    )
  }
const mapStateToProps = (state) => ({
  auth: state.auth,
  items: state.items
})

const mapDispatchToProps = { addItems, getDetailItem, getItemsAndVariants, getDetailVariant }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(ProductDetail)
