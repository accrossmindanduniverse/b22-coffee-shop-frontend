import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbar';
import Footer from '../footer/footer';
import './history.css';
import { getAllTransactions, deleteTransaction } from '../../redux/actions/items';

const History = (props) => {
  const { refreshToken, token } = props.auth;
  const history = useHistory();
  const { allTransactions } = props.items;
  const [modal, setModal] = useState({
    onClick: false,
  });

  const [checkBox, setCheckBox] = useState({
    onClick: false
  });

  const [deleteItem, setDeleteItem] = useState([]);

  const handleClickToProduct = () => {
    history.push('/product-cust');
  };

  const handleDeleteTransaction = (authToken, id) => {
    props.deleteTransaction(authToken, id).then(() => {
      setModal({
        ...modal,
        onClick: false
      });
      setDeleteItem([]);
      props.getAllTransactions(refreshToken?.token, token.id);
      setCheckBox({
        ...checkBox,
        onClick: false
      });
    });
  };

  const showModal = (visible) => {
    setModal({
      ...modal,
      onClick: visible
    });
  };

  const handleCheckBox = (data) => {
    setCheckBox({
      ...checkBox,
      onClick: data
    });
  };

  const saveItemToDelete = (item) => {
    setDeleteItem(item);
    handleCheckBox(true);
    if (checkBox.onClick) {
      setCheckBox({
        ...checkBox,
        onClick: false
      });
    }
  };

  useEffect(() => {
    if (deleteItem.length === 0) {
      props.getAllTransactions(refreshToken?.token, token.id);
    }
  }, [deleteItem]);

  const getAllItemTransactions = () => {
    props.getAllTransactions(refreshToken?.token, token.id);
  };

  useEffect(() => {
    getAllItemTransactions();
  }, []);
  return token !== null && (
  <div>
    <div>
      <Navbar />
    </div>
    {modal.onClick && (
    <div onChange={() => setModal(true)} className="modal w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-xl h-60 btn ensure-btn p-5 space-y-20">
        <p className="font-bold text-2xl text-center">Are you sure want to delete the selected items?</p>
        <div className="flex-1 font-black text-2xl flex flex-row space-x-40">
          <button
            onClick={() => showModal(false)}
            type="button"
            className="h-14 w-32 cancel-btn rounded-xl"
          >
            Cancel

          </button>
          <button
            onClick={() => handleDeleteTransaction(refreshToken.token, deleteItem)}
            type="button"
            className="h-14 w-32 delete-btn rounded-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    )}
    <div className="history-banner w-screen h-screen p-10">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="font-black text-2xl text-center text-white md:text-4xl checkout-text">Let&apos;s see what you have bought!</p>
          <button
            type="button"
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
              <button
                onClick={() => showModal(true)}
                type="button"
                className="font-black text-white text-xl checkout-text py-7 px-10"
              >
                Delete Item

              </button>
            </div>
          )
        }
        {
          allTransactions.length > 0 ? (
            <div className="mobile-history-item flex flex-col overflow-y-scroll md:h-full space-y-7 md:space-y-0 md:grid md:grid-cols-5 md:grid-rows-5 md:gap-10 rubik">
              {
              allTransactions.map((item) => (
                <div className="flex flex-row bg-white w-full py-10 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-50">
                    <img src="" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <p className="font-black">{item.code}</p>
                    </div>
                    <div>
                      <p className="font-bold">{item.total}</p>
                    </div>
                    <div className="w-72 flex flex-row">
                      <div>
                        <p>{item.payment_method}</p>
                      </div>
                      <div className="flex w-full justify-end px-12">
                        <label
                          value={allTransactions[0].id}
                          htmlFor
                          checked={handleCheckBox}
                          className="custom-checkbox"
                        >
                          <input
                            type="checkbox"
                            onClick={() => saveItemToDelete(item.id)}
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
