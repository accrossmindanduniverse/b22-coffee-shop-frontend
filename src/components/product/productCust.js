/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import './productCust.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import qs from 'query-string';
import spaghetti from '../../assets/spaghetti.png';
import Navbar from '../../navbar/navbar';
import FavoriteProduct from './favoriteProduct/favoriteProduct';
import Footer from '../footer/footer';
import { getItemsCategory, getItemCategories, searchItem } from '../../redux/actions/items';
import Search from './Search';

const ProductCust = (props) => {
  const category = props.items.data;
  const urlParams = qs.parse(props.location.search);
  const { pageInfo } = props.items.search.items ? props.items.search : props.items;
  const [tab, setTab] = useState();
  const [categoryNames, setCategoryNames] = useState([]);
  const [newPage, setNewPage] = useState(1);
  const [page, setPage] = useState([]);

  const mapAllCategoryName = (data) => {
    const categoryName = [];

    data.forEach((row) => {
      if (!categoryName.includes(row.category_name)) categoryName.push(row.category_name);
    });
    setCategoryNames(categoryName);
  };

  const handleTabClick = (tabComp) => {
    setTab(tabComp);
    props.getItemCategories(tabComp);
  };

  const handlePageClick = (data) => {
    setNewPage(data);
  };

  useEffect(() => {
    if (props.items.search.items === undefined) {
      handlePageClick((res) => {
        props.getItemCategories(tab, res);
      });
    }
  }, [tab, newPage]);

  useEffect(() => {
    const arrPage = [];
    for (let i = 1; i <= pageInfo.totalPage; i++) {
      arrPage.push(i);
    }
    setPage(arrPage);
  }, [props.items]);

  useEffect(() => {
    props.getItemsCategory(category);
  }, []);

  useEffect(() => {
    if (category.length > 0) {
      mapAllCategoryName(category);
    }
  }, [category]);

  useEffect(() => {
    setTab(categoryNames[0]);
    props.getItemCategories(categoryNames[0]);
  }, [categoryNames[0]]);

  useEffect(() => {
    if (urlParams.search !== '') {
      props.getItemCategories(tab, '1');
    } else {
      props.searchItem(urlParams.search, 'name', 'asc', urlParams.page);
    }
  }, [tab, urlParams.search, urlParams.page]);

  console.log(urlParams, 'product');

  return (
    <div className="parent overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row border-b-2 border-t-2">

        <div className="flex flex-col border-r-2 relative">

          <div className="flex flex-col space-y-10 text-center items-center relative p-10">
            <div>
              <p className="primary-brown font-bold text-2xl">Promo For You</p>
            </div>
            <div className="w-72">
              <p>Coupons will be updated every weeks. Check them out! </p>
            </div>
          </div>

          <div className="promo-box flex flex-row relative p-24 right-20 md:right-0">
            <div className="flex items-center">
              <div className="box-1" />
              <div className="box-2" />
              <div className="box-3 flex justify-center p-12">
                <div className="flex flex-col items-center text-center space-y-10">
                  <img className="h-32 w-32 rounded-full" src={spaghetti} alt="" />
                  <div className="w-72">
                    <p className="text-3xl font-bold text-center">Beef Spaghetti 20% Off</p>
                  </div>
                  <div className="w-72">
                    <p className="text-xl">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                  </div>
                  <div className="flex-1 space-y-4 dashed-border pt-4">
                    <p className="text-xl">COUPON CODE</p>
                    <p className="font-bold text-2xl">FNPR15RG</p>
                    <p>Valid untill October 10th 2020</p>
                  </div>
                  <div className="pt-10 flex float-right w-full">
                    <button type="button" className="w-80 h-16 primary-brown-background text-white text-center rounded-2xl">Apply Coupon</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col items-start justify-end p-20 text-xl space-y-4 mt-20">
            <p className="font-bold">Terms and Condition</p>
            <p>1. You can only apply 1 coupon per day</p>
            <p>2. It only for dine in</p>
            <p>3. Buy 1 get 1 only for new user</p>
            <p>4. Should make member card to apply coupon</p>
          </div>

        </div>
        <div className="flex flex-col h-full">
          <Search newPageInfo={newPage} urlParams={urlParams} />
          {props.items.search.length === 0 && (
          <div className="p-10 flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-center">
            {
              categoryNames.map((name) => (
                <nav className={`space-x-32 px-14 ${name === tab ? 'active' : 'text-gray-300'}`}>
                  <button type="button" className="category focus:outline-none font-bold text-xl cursor-pointer" onClick={() => handleTabClick(name)}>{name}</button>
                </nav>
              ))
            }
          </div>
          )}
          <FavoriteProduct newPageInfo={newPage} className="mb-20" tab={tab} data={props.items.newDataByCategory.items ? props.items.newDataByCategory.items : props.items.dataByCategory} />
          <div className="flex justify-center mt-20 mb-20">
            <div className="flex flex-row space-x-6 top-32">
              <div className="w-7 h-7 md:w-14 md:h-14 flex justify-center items-center rounded-md bg-gray-300">
                <button type="button" className="flex justify-center  items-center">
                  <BsChevronLeft className="font-bold text-xl" />
                </button>
              </div>
              {page.map((e) => (
                <div key={String(e)} className="w-7 h-7 md:w-14 md:h-14 flex justify-center items-center rounded-md bg-gray-300">
                  <button onClick={() => handlePageClick(e)} className="flex justify-center items-center w-full h-full focus:outline-none" type="button">
                    <p className={`${e === newPage ? 'active' : 'text-gray-900'}`}>{e}</p>
                  </button>
                </div>
              ))}
              <div className="w-14 h-7 md:w-24 md:h-14 flex justify-center items-center rounded-md bg-gray-300">
                <p>
                  ...
                  {' '}
                  {' '}
                  {' '}
                  {pageInfo.totalPage}
                </p>
              </div>
              <div className="w-7 h-7 md:w-14 md:h-14 flex justify-center items-center rounded-md bg-gray-300">
                <button type="button" className="flex justify-center items-center">
                  <BsChevronRight className="font-bold text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

ProductCust.defaultProps = ({
  getItemCategories: () => {},
  searchItem: () => {},
  getItemsCategory: () => {},
  items: [],
  location: []
});

ProductCust.propTypes = {
  getItemCategories: PropTypes.func,
  searchItem: PropTypes.func,
  getItemsCategory: PropTypes.func,
  items: PropTypes.node,
  location: PropTypes.node
};

ProductCust.propTypes = {
  getItemsCategory: PropTypes.func,
};

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = { getItemsCategory, getItemCategories, searchItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCust);
