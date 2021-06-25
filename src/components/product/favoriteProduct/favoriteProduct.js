import React from 'react'
import { connect } from 'react-redux';
import { getItemCategories } from '../../../redux/actions/items'
import { Link } from 'react-router-dom';
import './favoriteProduct.css'

const FavoriteProduct = (props) => {
  const getItemsByCategory = props.data
  return (
      <div>
          <div className='grid md:grid-cols-4 grid-rows-2 gap-10 p-10'>
              {
          getItemsByCategory.map((dataMap, index) => {
          console.log(dataMap)
          return (
              <div key={index} className='shadow-2xl grid-display h-full'>

                  <div className='flex flex-col text-center items-center justify-center space-y-3 h-full'>
                      <div className='flex justify-center'>
                          <img className='h-24 w-24 rounded-full bg-gray-300' alt="" src={dataMap.picture}/>
                      </div>
                      <div>
                          <Link className='font-bold text-4xl hover:text-red-900' to={{
                    pathname: `/product-detail/${dataMap.id}`,
                    state: {
                      getId: dataMap.id
                    }
                    }}>
                              {dataMap.name}
                          </Link>
                      </div>
                      <div className='h-full flex items-end relative product-price'>
                          <div className='font-bold text-xl primary-brown'>
                              {dataMap.price}
                          </div>
                      </div>
                  </div>

              </div>
          )
        })
      }
          </div>
      </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.items
})

const mapDispatchToProps = { getItemCategories }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteProduct)
