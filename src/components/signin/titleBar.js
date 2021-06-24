import React from 'react'
import './signin.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TitleBar = (props) => {
  console.log(props)
  return (
    <div>
    <div className='flex md:flex-row justify-between px-44 py-16'>
        <div className='items-center flex'>
          <p className='primary-text font-bold text-lg'>
            Coffee Shop
          </p>
        </div>
        <div className='signup-btn rounded-full '>
          <Link className='text-center primary-text font-bold text-lg' to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(TitleBar)
