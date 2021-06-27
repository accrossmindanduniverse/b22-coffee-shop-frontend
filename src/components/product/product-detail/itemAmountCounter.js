/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItems } from '../../../redux/actions/cart';

const ItemAmountCounter = (props) => {
  const amountData = props.items.variantDetail[0].quantity;
  const newData = props.checkoutData;
  const [amount, setAmount] = useState(1);
  const [checkout, setCheckout] = useState();

  const onClickIncrease = () => {
    if (amount !== amountData) setAmount(amount + 1);
    if (amount >= amountData) window.alert('Item has beyond the limit');
  };

  const onClickDecrease = () => {
    if (amountData >= 0) setAmount(amount - 1);
  };

  const handleClickCheckout = (data1st, data2nd) => {
    props.addItems(data1st, data2nd);
  };

  useEffect(() => {
    if (amount > 0) {
      setCheckout(amount, newData);
    }
  }, [amount, newData]);

  return (
    <div>

      <div className="flex flex-row relative justify-center items-center space-x-10 bottom-20 px-96">

        <div className="w-screen justify-between flex flex-row px-44 items-center bg-gray-50 h-44 rounded-2xl shadow-lg">
          {
          newData.map((newMap2nd) => (
            <div key={newMap2nd.variant_code} className="w-full flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-5">
                <img className="h-24 w-24 rounded-full" src={newMap2nd.picture} alt="" />
                <div className="flex flex-col space-y-4" onChange={() => setCheckout}>
                  <p className="font-black text-2xl">{newMap2nd.name}</p>
                  <div className="flex flex-row space-x-4">
                    <p>
                      {amount}
                      {' '}
                      x
                    </p>
                    <p className="tracking-wider">
                      (
                      {newMap2nd.variant}
                      )
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-6">
                <div className="flex justify-center text-center">
                  <button type="button" onClick={onClickDecrease} disabled={amount === 1} className="h-8 w-8 rounded-full bg-yellow-400 text-xl font-black">-</button>
                </div>
                <div className="text-xl font-bold">
                  {amount}
                </div>
                <div className="flex justify-center text-center">
                  <button type="button" onClick={onClickIncrease} disabled={amount > amountData} className="h-8 w-8 rounded-full bg-yellow-400 text-xl font-black">+</button>
                </div>
              </div>
            </div>
          ))
        }
        </div>
        <div className="">
          <button type="button" onClick={() => handleClickCheckout(checkout, newData)} className="bg-yellow-400 h-44 w-56 rounded-2xl shadow-lg font-black">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  cart: state.cart,
});

const mapDispatchToProps = { addItems };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemAmountCounter);
