import React, { useState, useEffect } from 'react'
import Navbar from './../navbar/navbar';

const Custom = () => {
  const [ data, setData ] = useState(false)

  return (
    <div>
      <Navbar onChange={() => setData(
        Navbar != 0 && data
      )}/>
    </div>
  )
}

export default Custom
