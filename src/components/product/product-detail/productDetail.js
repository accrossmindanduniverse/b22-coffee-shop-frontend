/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './productDetail.css';
import { connect } from 'react-redux';
import Navbar from '../../../navbar/navbar';
import Footer from '../../footer/footer';
import { getDetailItem, getItemsAndVariants, getDetailVariant } from '../../../redux/actions/items';

import ItemAmountCounter from './itemAmountCounter';
import { addItems } from '../../../redux/actions/cart';

function ProductDetail(props) {
  const { itemsAndVariants } = props.items;
  const { getId } = props.location.state;
  const { variantDetail } = props.items;
  const [defaultAmount, setDefaultAmount] = useState(false);
  const [tab, setTab] = useState();
  const [sendDataToCart, setSendDataToCart] = useState({
    data1: [],
    data2: []
  });
  const [variants, setVariants] = useState([]);
  const [newData, setNewdata] = useState([]);
  const [getNewData, setGetNewData] = useState([]);

  const mapAllVariantName = (key) => {
    const variantName = [];
    key.forEach((row) => {
      variantName.push(row.variant_code);
    });
    setVariants(variantName);
  };

  const mapNewArrItems = (allItems) => {
    const allItemsArr = [];
    allItems.map((row) => {
      if (row.variant_code === tab) {
        if (!allItemsArr.includes(row.variant_code)) allItemsArr.push(row);
      }
      return row;
    });
    setNewdata(allItemsArr);
  };

  const handleVariantTabClick = (tabComp) => {
    props.getDetailVariant(getId, tabComp);
    setTab(tabComp);
  };

  const getDataFromChild = (data) => {
    setGetNewData(data, newData);
    setSendDataToCart({
      ...sendDataToCart,
      data1: data,
      data2: newData
    });
  };

  const sendFinalData = () => {
    props.addItems(sendDataToCart.data1, sendDataToCart.data2);
  };

  console.log(defaultAmount, 'default');

  const handleTwoEvents = () => {
    setDefaultAmount(true);
    getDataFromChild();
    sendFinalData();
  };

  useEffect(() => {
    mapNewArrItems(itemsAndVariants);
  }, [itemsAndVariants]);

  useEffect(() => {
    mapAllVariantName(itemsAndVariants);
  }, [itemsAndVariants]);

  useEffect(() => {
    props.getItemsAndVariants(getId, tab);
  }, [variantDetail]);

  useEffect(() => {
    if (variants) {
      setTab(variants[0]);
      props.getDetailVariant(variants[0]);
    }
  }, [variants[0]]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {newData.map((newMap) => (
        <div className="flex flex-col md:flex-row bg-gray-50">
          <div className="md:ml-48">
            <div key={newMap.id} className="flex flex-col items-center space-y-10">
              <p className="mt-20">
                Favorite & Promo
                {' '}
                <span className="primary-brown font-bold">
                  {' '}
                  &gt;
                  {newMap.name}
                </span>
              </p>
              <div className="w-96 flex justify-center items-center ">
                <img className="w-64 h-64 rounded-full object-cover bg-gray-300" src={newMap.picture} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-black text-4xl">{newMap.name}</p>
                <p className="font-bold text-2xl">
                  IDR
                  {' '}
                  {Number(newMap.final_price).toLocaleString('ind')}
                </p>
              </div>
              <div className=" flex flex-col space-y-10 justify-center items-center pt-28 ">
                {getNewData >= 1 && (
                <button
                  onClick={handleTwoEvents}
                  type="button"
                  className="flex justify-center items-center rounded-xl primary-brown-background font-bold w-56 h-14 text-xl text-white md:w-96 md:h-20"
                >
                  Add To Cart
                </button>
                )}
                <button type="button" className="flex justify-center items-center rounded-xl primary-yellow-background font-bold w-56 h-14 text-xl primary-brown md:w-96 md:h-20">
                  Ask Staff
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-14 mb-14">
            <div className="rounded-lg bg-white md:ml-96 md:mr-96">
              <div className="flex flex-col mt-14 mb-14">
                <div className="flex flex-col space-y-7 mr-14 ml-14">
                  <p className="text-3xl">{newMap.delivery_on}</p>
                  <p className="tracking-wider text-3xl text-justify">
                    {newMap.item_description}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-20">
                  <p className="text-xl font-black text-center">Choose Size</p>
                  <div className="flex flex-row space-x-7 justify-center items-center mt-10 ">
                    {variants.map((variantName) => (
                      <div key={variantName}>
                        <div>
                          <button
                            type="button"
                            onClick={() => handleVariantTabClick(variantName)}
                            className={`h-8 w-8 rounded-full ${variantName === tab ? 'bg-gray-300' : 'bg-yellow-400'} flex justify-center items-center text-xl font-bold`}
                          >
                            {variantName}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center mt-14 mb-14">
                <p className="text-xl font-bold">Choose Delivery Method</p>
                <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 mt-14">
                  <button type="button" className="primary-brown-background rounded-lg primary-brown-background font-bold text-white w-44 h-14">
                    Dine In
                  </button>
                  <button type="button" className="primary-brown-background rounded-lg  font-bold text-white w-44 h-14">
                    Door Delivery
                  </button>
                  <button type="button" className="primary-brown-background rounded-lg primary-brown-background font-bold text-white w-44 h-14">
                    <p>Pick Up</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-row md:mb-44">
                <label>Set Time: </label>
                <input className="bg-transparent outline-none border-b-2" type="text" name="" id="" placeholder="Enter the time you'll arrive" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        {variantDetail.length > 0 && (
        <ItemAmountCounter
          getDataFromChild={getDataFromChild}
          variants={variants}
          tab={tab}
          defaultAmount={defaultAmount}
          checkoutData={newData}
        />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

ProductDetail.defaultProps = ({
  getDetailVariant: () => {},
  getItemsAndVariants: () => {},
  addItems: () => {},
  items: [],
  // user: [],
  location: []
});

ProductDetail.propTypes = {
  getDetailVariant: PropTypes.func,
  getItemsAndVariants: PropTypes.func,
  addItems: PropTypes.func,
  items: PropTypes.node,
  // user: PropTypes.node,
  location: PropTypes.node
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  // user: state.user,
  items: state.items,
});

const mapDispatchToProps = {
  addItems, getDetailItem, getItemsAndVariants, getDetailVariant,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
