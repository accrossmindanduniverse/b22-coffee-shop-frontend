import React from 'react'
import './signUp.css'
import eating from '../../assets/eating.png'
import coffee1 from '../../assets/coffee-1.png'

const SignUp = () => {
  return (
    <div className='flex flex-row'>

      <div>
        <img className='eating' src={eating} alt=""/>
      </div>

      <div className='flex flex-col'>
      <div className="coffee-login flex">
        <div className="flex-1">
          <div className="flex-1 pt-8">
            <a href="/home-page/home-page.html" className="flex items-center pl-28">
              <img src={coffee1} alt=""/>
              <p className="pl-3 font-bold text-lg">Coffee Shop</p>
            </a>
          </div>
          <div className="flex-1">
            <div className="flex justify-end pr-20 relative bottom-5">
              <a className="login w-44 h-10 pt-2 rounded-full text-center" href="/login/login.html">Login</a>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='flex flex-col justify-items-center relative'>
        <div className='grid text-center pt-10 pl-16'>
          <p class="sign-up-text font-bold text-4xl">Sign Up</p>
        </div>
        <div className='flex flex-col'>
          <form>
            <label class="font-bold text-xl">Email Address :</label>
            <input className='form-input h-16 border-2 rounded-lg' type="text"/>
            <label class="font-bold text-xl">Password :</label>
            <input class="form-input h-16 border-2 rounded-lg" type="text"/>
            <label class="font-bold text-xl">Phone Number :</label>
            <input class="form-input h-16 border-2 rounded-lg" type="text"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
