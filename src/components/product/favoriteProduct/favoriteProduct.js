import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const FavoriteProduct = (props) => {
  const [data, setData] = useState([])

  const handleGeData = () => {
    axios.get('http://localhost:3001/items/detail?search_category=5').then((res) => {
      setData(res.data.data)
    }).catch((err) => {
      console.log(err)
      })
  }
  
    useEffect(() => {
      handleGeData()
    }, [])
    console.log(props.location)

  return (
    <div>
      <div className='grid grid-flow-col grid-cols-1 gird-rows-1 md:grid-cols-2 grid-rows-3 gap-10 p-10'>
        {
        data.map((dataMap, index) => {
          console.log(dataMap)
          return (
            <div key={index} className='shadow-2xl grid-product h-full'>

              <div className='flex flex-col text-center items-center justify-center space-y-3 h-full'>
                <div className='flex justify-center'>
                    <img className='h-24 w-24 rounded-full' src={dataMap.image} alt=""/>
                </div>
                <div>
                  <Link onClick={() => setData([dataMap.id])} getId={dataMap.id} className='font-bold text-4xl hover:text-red-900' to={`/product-detail?id=${dataMap.id}`}>
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

export default FavoriteProduct
