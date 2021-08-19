/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { AiOutlineCreditCard, AiOutlineBank } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import { connect } from 'react-redux';
import { finalTransaction } from '../../redux/actions/cart';
import './cart.css';

const Transaction = (props) => {
  const history = useHistory();
  const { token } = props.auth.refreshToken;
  const { signed } = props.user;
  const [getItems, setGetItems] = useState([]);
  const [getId, setGetId] = useState([]);
  const [modal, setModal] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentArr = [{
    bank: 'Bank',
    card: 'Card',
    cashOnDelivery: 'Cash On Delivery',
  }];

  const handleTransaction = () => {
    const data = {
      item_id: getId,
      total: props.total,
      tax: props.taxAndFees,
      item_amount: getItems.map((e) => e[0].amount),
      variant: getItems.map((e) => e[0].variant),
      payment_method: paymentMethod,
      user_address: signed.user_address
    };
    props.finalTransaction(token, data);
    setModal(false);
    setCustomAlert(true);
  };

  const showModal = (visible) => {
    setModal(visible);
  };

  const handleDeliveryMethod = (data) => {
    setPaymentMethod(data);
  };

  const mapAllItemsDataForTransaction = (data) => {
    const itemsArr = [];
    data.map((e) => {
      itemsArr.push([{
        id: e.data2nd[0].id,
        amount: e.amount,
        variant: e.data2nd[0].variant_code,
      },
      ]);
      return e;
    });
    setGetItems(itemsArr);
  };

  const mapAllItemsId = (id) => {
    const idArr = [];
    id.map((e) => idArr.push(e.data2nd[0].id));
    setGetId(idArr);
  };

  useEffect(() => {
    mapAllItemsDataForTransaction(props.cart.items);
  }, [signed]);

  useEffect(() => {
    mapAllItemsId(props.cart.items);
  }, [props.cart.items]);

  console.log(signed[0], 'test');

  useEffect(() => {
    setTimeout(() => {
      if (customAlert) {
        history.push('/product-cust');
        window.location.reload();
      }
    }, 4000);
  });

  return (
    <div>
      {customAlert && (
      <div className="modal w-screen h-screen flex justify-center items-center">
        <div className="flex flex-row justify-center rounded-3xl items-center bg-white border-4">
          <p className="p-14 font-black text-2xl shadow-2xl save-changes-color">Payment Success!</p>
        </div>
      </div>
      )}
      {modal && (
      <div onChange={() => setModal(true)} className="modal w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col bg-white rounded-xl w-96 md:w-auto h-60 ensure-btn p-5 space-y-20">
          <p className="font-bold text-2xl text-center">Continue buying?</p>
          <div className="flex-1 font-black text-2xl flex flex-row space-x-40">
            <button
              onClick={() => showModal(false)}
              type="button"
              className="h-14 w-32 cancel-btn rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={handleTransaction}
              type="button"
              className="h-14 w-32 continue-btn rounded-xl"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
      )}
      <div className="flex flex-col space-y-14 mt-24 mb-24">
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <p className="font-black text-white text-2xl">Address Detail</p>
            <p className="font-black text-white text-xl cursor-pointer">edit</p>
          </div>
          <div className="bg-white rounded-xl w-80 relative right-14 md:right-0 md:w-full">
            <div className="flex-col px-7 py-7">
              <div className="border-b-2 py-4">
                <p className="font-semibold text-xl">
                  <span className="font-black">Delivery </span>
                  to Street
                </p>
              </div>
              <div className="border-b-2 py-4">
                <p className="font-semibold text-xl">
                  street name
                </p>
              </div>
              <div className="border-b-2 py-4">
                <p className="font-semibold text-xl">
                  phone
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="flex items-center">
            <p className="font-black text-white text-2xl">Payment Method</p>
          </div>
          <div className="bg-white rounded-xl w-80 relative right-14 md:right-0 md:w-full">
            <form>
              <div className="flex flex-col px-10 md:px-20 py-7 space-y-6">
                <div className="border-b-2">
                  <div className="flex flex-row space-x-3 items-center py-4">
                    <div className="flex items-center">
                      <label htmlFor className="radio">
                        <input type="radio" name="choose-payment" />
                        <span tabIndex={0} role="button" onClick={() => handleDeliveryMethod(paymentArr[0].bank)} className="item" />
                      </label>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex items-center w-10 h-10 md:w-14 md:h-14 rounded-lg bg-yellow-500 justify-center">
                        <AiOutlineBank className="text-white font-bold text-lg md:text-2xl" />
                      </div>
                      <div className="flex items-center">
                        <p className="font-bold text-lg px-4 md:px-14">Bank</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2">
                  <div className="flex flex-row space-x-3 items-center py-4">
                    <div className="flex items-center">
                      <label htmlFor className="radio">
                        <input type="radio" name="choose-payment" />
                        <span tabIndex={0} role="button" onClick={() => handleDeliveryMethod(paymentArr[0].card)} className="item" />
                      </label>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex items-center w-10 h-10 md:w-14 md:h-14 rounded-lg primary-brown-background justify-center">
                        <AiOutlineCreditCard className="text-white font-bold text-lg md:text-2xl" />
                      </div>
                      <div className="flex items-center">
                        <p className="font-bold text-lg px-4 md:px-14">Card</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-2">
                  <div className="flex flex-row space-x-3 items-center py-4">
                    <div className="flex items-center">
                      <label htmlFor className="radio">
                        <input type="radio" name="choose-payment" />
                        <span tabIndex={0} role="button" onClick={() => handleDeliveryMethod(paymentArr[0].cashOnDelivery)} className="item" />
                      </label>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex items-center w-10 h-10 md:w-14 md:h-14 rounded-lg bg-yellow-400 justify-center">
                        <FaTruck className="text-black font-bold text-lg md:text-2xl" />
                      </div>
                      <div className="flex items-center">
                        <p className="font-bold text-lg px-4 md:px-14">Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {paymentMethod !== '' && (
          <div>
            {/* {signed.user_address} */}
            <button onClick={showModal} className="outline-none confirm-pay-btn text-white font-black text-lg md:text-2xl flex items-center w-full h-14 md:h-20 justify-center" type="button">
              Confirm And Pay
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

Transaction.defaultProps = ({
  finalTransaction: () => {},
  items: [],
  total: [],
  user: [],
  taxAndFees: [],
  auth: [],
  cart: []
});

Transaction.propTypes = {
  finalTransaction: PropTypes.func,
  total: PropTypes.node,
  taxAndFees: PropTypes.node,
  items: PropTypes.node,
  user: PropTypes.node,
  auth: PropTypes.node,
  cart: PropTypes.node
};

const mapStateToProps = (state) => ({
  items: state.items,
  cart: state.cart,
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = { finalTransaction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transaction);
