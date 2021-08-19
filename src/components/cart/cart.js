import React, { useState, useEffect } from 'react';
import './cart.css';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbar';
import Footer from '../footer/footer';
import Transaction from './transaction';

const Cart = (props) => {
  const [total, setTotal] = useState();
  const shipping = 10000;
  const taxAndFees = total?.reduce((acc, curr) => acc + curr) * (10 / 100);
  const { items } = props.cart;
  const finalTotal = total?.reduce((acc, curr) => acc + curr);
  const dealPrice = finalTotal + taxAndFees + shipping;

  const getPrice = (data) => {
    const arrPrice = [];
    data.map((e) => {
      arrPrice.push(e.data2nd[0].final_price * e.amount);
      return e;
    });
    setTotal(arrPrice);
  };

  useEffect(() => {
    getPrice(items);
  }, []);

  return (
    <div className="cart-banner w-screen">
      <div className="relative bottom-7 md:bottom-0">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-14 md:space-y-0 md:flex-row md:space-x-32 px-20">
        <div className="flex flex-col md:mr-96 mt-10 md:mb-24">
          <p className="font-black text-2xl md:text-4xl text-white md:py-10">Checkout your item now</p>
          <div className="bg-white rounded-xl shadow-xl w-80 right-14 relative md:right-0 md:w-full">
            <div className="flex flex-col md:px-10 py-20">
              <p className="primary-brown-text text-3xl pl-7 md:pl-0 py-4 md:py-0 font-bold">Order Summary</p>
              <div className="flex flex-col px-12">
                <div className="flex flex-col space-y-5 border-b-2 py-14 overflow-auto h-72">
                  {items.map((itemMap) => (
                    <div key={itemMap.data2nd[0].id} className="flex flex-row justify-between">
                      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-8">
                        <div>
                          <img className="w-20 h-20 rounded-lg object-cover bg-gray-100" src={itemMap.data2nd[0].picture} alt="" />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <p className="text-lg font-semibold">{itemMap.data2nd[0].name}</p>
                          <p className="text-lg font-semibold">
                            x
                            {' '}
                            (
                            {itemMap.amount}
                            )
                          </p>
                          <p className="text-lg font-semibold">{itemMap.data2nd[0].variant}</p>
                        </div>
                      </div>
                      <div className="flex justify-center relative top-10 md:top-0 items-center md:mr-7">
                        <p className="text-lg font-semibold">
                          IDR
                          {' '}
                          {Number(itemMap.data2nd[0].final_price).toLocaleString('ind')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-14 pt-10">
                  <div className="flex flex-row space-x-5 md:space-x-0 justify-between">
                    <div className="flex flex-col space-y-5">
                      <p className="text-xl font-semibold">SUBTOTAL</p>
                      <p className="text-xl font-semibold">TAX & FEES</p>
                      <p className="text-xl font-semibold">SHIPPING</p>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <p className="text-xl font-semibold">
                        IDR
                        {' '}
                        {Number(finalTotal).toLocaleString('ind')}
                      </p>
                      <p className="text-xl font-semibold">
                        IDR
                        {' '}
                        {Number(taxAndFees).toLocaleString('ind')}
                      </p>
                      <p className="text-xl font-semibold">
                        IDR
                        {' '}
                        {Number(shipping).toLocaleString('ind')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between">
                    <p className="primary-brown-text text-3xl font-bold">TOTAL</p>
                    <p className="primary-brown-text text-3xl font-bold">
                      IDR
                      {' '}
                      {Number(dealPrice).toLocaleString('ind')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transaction
          total={dealPrice}
          finalTotal={finalTotal}
          taxAndFees={taxAndFees}
          shipping={shipping}
        />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

Cart.defaultProps = {
  cart: [],
};

Cart.propTypes = {
  cart: PropTypes.node,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  items: state.items,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
)(Cart);
