import React from 'react';
import Navbar from '../../navbar/navbar';
import Footer from '../footer/footer';
import './cart.css';

function Cart2() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-400 h-screen font-sansa text-7xl font-bold text-white flex justify-center items-center">
        <p>Oops you haven&apos;t chosen anything, yet :)</p>
      </div>
      <Footer />
    </div>
  );
}

export default Cart2;
