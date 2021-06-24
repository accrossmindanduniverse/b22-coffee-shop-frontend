import React, { useState, useEffect } from 'react'
import eating from '../../assets/eating.png'
// import {toggleAuth} from '../../redux/actions/auth'
// import { connect } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import './signup.css'
import { authSignUp, authSignIn } from './../../redux/actions/auth';
import { connect } from 'react-redux';
import Footer from '../footer/footer';

const SignUp = (props) => {
  const [ state, setState ] = useState({
    username: '',
    password: ''
  })

  const handleSignUp = () => {
    props.authSignUp(state.username, state.password)
  }

  console.log(props.action)

    return (
      <div>
        <div className='flex flex-col md:flex-row bg-gray-100'>
          <div className='flex-1'>
            <img className='w-screen h-screen' src={eating} alt=""/>
          </div>
          <div className='flex-1 flex flex-col'>
            <div className='flex md:flex-row justify-between px-44 py-16'>
              <div className='items-center flex'>
                <p className='primary-text font-bold text-lg'>
                  Coffee Shop
                </p>
              </div>
              <div className='signup-btn rounded-full '>
                <button onClick={() => 
                    props.history.push('/signin'
                  )} className='w-52 h-10 text-center primary-text font-bold text-lg'>Sign In</button>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center px-44 space-y-10'>
              <div className='flex justify-center'>
                <p className='text-3xl tracking-wider font-bold primary-text'>Sign Up</p>
              </div>
              <div onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSignUp()
                  }
                }} className='h-full w-full space-y-24'>
                <div className='flex flex-col space-y-10'>
                <label className="font-bold text-xl">Email Address :</label>
                  <input className='h-16 rounded-lg p-5' type="text" placeholder='Email' onChange={(e) => 
                    setState({
                      ...state,
                      username: e.target.value
                    })
                  }/>
                </div>
                <div className='flex flex-col space-y-10'>
                  <label className="font-bold text-xl">Password :</label>
                  <input className='h-16 rounded-lg p-5' type="password" placeholder='Password' onChange={(e) => 
                    setState({
                      ...state,
                      password: e.target.value
                    })
                  }/>
                </div>
                <div className='space-y-10'>
                  <button className='w-full h-16 bg-white rounded-lg' onClick={handleSignUp}>Sign Up</button>
                  <button className='w-full h-16 bg-white rounded-lg inline-block space-x-5'>
                    <FcGoogle className='inline-block' size={30}/>
                    <span>Sign Up with Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = { authSignUp, authSignIn }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(SignUp)
