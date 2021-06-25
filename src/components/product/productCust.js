import React, { useState, useEffect } from 'react'
import './productCust.css'
import spaghetti from '../../assets/spaghetti.png'
import FavoriteProduct from './favoriteProduct/favoriteProduct';
import Footer from '../footer/footer'
import { connect } from 'react-redux';
import { getItemsCategory, getItemCategories } from './../../redux/actions/items';

const ProductCust = (props) => {
  const category = props.items.data
  const [tab, setTab] = useState()
  const [categoryNames, setCategoryNames] = useState([])

  const mapAllCategoryName = (data) => {
    const categoryName = []
    data.forEach((row) => {
      if (!categoryName.includes(row.category_name)) categoryName.push(row.category_name)
    })
      setCategoryNames(categoryName)
  }

  const handleTabClick = (tabComp) => {
    setTab(tabComp)
    props.getItemCategories(tabComp)
  }
  
  useEffect(() => {
    props.getItemsCategory(category)
  }, [])
    
  useEffect(() => {
    mapAllCategoryName(category)
  }, [category])


  useEffect(() => {
    if (categoryNames[0]) {
      setTab(categoryNames[0])
      props.getItemCategories(categoryNames[0])
    }
  }, [categoryNames[0]])

    return (
        <div className="parent">
            <div className='flex flex-row border-b-2 border-t-2'>
          
                <div className="flex flex-col border-r-2 relative">
    
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
                                    <div className="flex-1 space-y-4 dashed-border pt-4">
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
            
                    <div className='p-10 flex justify-center'>
                        {
              categoryNames.map((name, index) => {
                return (
                    <nav key={index} className={`nav-product space-x-32 px-14 ${name === tab ? 'active' : 'text-gray-300'}`}>
                        <div className='category font-bold text-xl cursor-pointer' onClick={() => handleTabClick(name)}>{name}</div>
                    </nav>
                )
              })
            }
                    </div>
                    <FavoriteProduct data={props.items.dataByCategory} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
  items: state.items
})

const mapDispatchToProps = { getItemsCategory, getItemCategories }

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ProductCust)
