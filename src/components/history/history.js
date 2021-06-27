import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbar';
import Footer from '../footer/footer';
import './history.css';
import { getAllTransactions, deleteTransaction } from '../../redux/actions/items';

const History = (props) => {
  const { token } = props.auth;
  const history = useHistory();
  const { allTransactions } = props.items;
  const [modal, setModal] = useState({
    onClick: false,
  });

  const handleClickToProduct = () => {
    history.push('/product-cust');
  };

  const handleDeleteTransaction = (authToken, id) => {
    props.deleteTransaction(authToken, id);
    setModal({
      ...modal,
      onClick: false
    });
  };

  console.log(props);

  const getAllItemTransactions = () => {
    props.getAllTransactions(token.refreshToken, token.userData.id);
  };

  useEffect(() => {
    getAllItemTransactions();
  }, []);
  return token !== null && (
  <div>
    <div>
      <Navbar />
    </div>
    <div className="history-banner w-screen h-screen p-10">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="font-black text-white text-4xl checkout-text">Let&apos;s see what you have bought!</p>
          <button
            type="button"
            onClick={() => setModal({
              ...modal,
              onClick: true,
            })}
            className="font-black text-white text-xl checkout-text"
          >
            Select item to delete

          </button>
        </div>
        {
          !modal ? (
            <div className="flex justify-end">
              <button type="button" className="font-black text-white text-xl checkout-text py-7 px-10">Select All</button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button onClick={() => handleDeleteTransaction(token.refreshToken, allTransactions[0].id)} type="button" className="font-black text-white text-xl checkout-text py-7 px-10">Delete Item</button>
            </div>
          )
        }
        {
          allTransactions.length > 0 ? (
            <div className="grid grid-cols-5 grid-rows-5 gap-10 rubik">
              {
              allTransactions.map((item) => (
                <div className="flex flex-row bg-white w-full py-10 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-50">
                    <img src="" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p>{item.code}</p>
                    </div>
                    <div>
                      <p>{item.total}</p>
                    </div>
                    <div className="w-72 flex flex-row">
                      <div>
                        <p>{item.payment_method}</p>
                      </div>
                      <div className="flex w-full justify-end px-12">
                        <label value={allTransactions[0].id} htmlFor className="custom-checkbox">
                          <input
                            type="checkbox"
                            onChange={() => {
                              setModal({
                                ...modal,
                                onClick: allTransactions[0].id,
                              });
                            }}
                          />
                          <span className="item" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
          ) : (
            <div className="flex justify-center items-center py-52">
              <button type="button" onClick={handleClickToProduct} className="text-4xl font-bold text-gray-400 checkout-text border-2 w-96 h-32 rounded-xl">
                Buy Something
              </button>
            </div>
          )
        }
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
  );
};

History.defaultProps = ({
  getAllTransactions: () => {},
  deleteTransaction: () => {},
  auth: [],
  items: []
});

History.propTypes = {
  getAllTransactions: PropTypes.func,
  deleteTransaction: PropTypes.func,
  auth: PropTypes.node,
  items: PropTypes.node
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  items: state.items,
});

const mapDispatchToProps = { getAllTransactions, deleteTransaction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
