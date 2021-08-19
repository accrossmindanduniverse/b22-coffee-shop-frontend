import React from 'react';
import { PropTypes } from 'prop-types';
// import { AiOutlineArrowDown } from 'react-icons/ai';
// , AiOutlineArrowUp
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItemCategories } from '../../../redux/actions/items';
import './favoriteProduct.css';

const FavoriteProduct = (props) => {
  const getItemsByCategory = props.data;
  const { items } = props.items.search;

  return items !== undefined ? (
    <div className="overflow-x-hidden">
      <div className="flex flex-row space-x-7 overflow- md:space-x-0 overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-10 md:p-10">
        {
          items.map((dataMap) => (
            <div className="shadow-2xl grid-display ml-24 relative mb-10 md:mb-0 right-10 md:right-0 md:ml-0 md:mr-0 md:h-full">

              <div className="flex flex-col text-center items-center justify-center space-y-3 h-full w-44 md:w-full">
                <div className="flex justify-center">
                  <img className="h-24 w-24 rounded-full bg-gray-300" alt="" src={dataMap.picture} />
                </div>
                <div>
                  <Link
                    className="font-bold text-4xl hover:text-red-900"
                    to={{
                      pathname: `/product-detail/${dataMap.id}`,
                      state: {
                        getId: dataMap.id,
                      },
                    }}
                  >
                    {dataMap.name}
                  </Link>
                </div>
                <div className="h-full flex items-end relative product-price">
                  <div className="font-black text-xl primary-brown">
                    IDR
                    {' '}
                    {Number(dataMap.price).toLocaleString('ind')}
                  </div>
                </div>
              </div>

            </div>
          ))
      }
      </div>
    </div>
  ) : (
    <div>
      <div className="flex flex-row space-x-7 overflow- md:space-x-0 overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-10 md:p-10">
        {
          getItemsByCategory.map((item) => (
            <div className="shadow-2xl grid-display ml-24 relative mb-10 md:mb-0 right-10 md:right-0 md:ml-0 md:mr-0 md:h-full">

              <div className="flex flex-col text-center items-center justify-center space-y-3 h-full w-44 md:w-full">
                <div className="flex justify-center">
                  <img className="h-24 w-24 rounded-full object-cover bg-gray-300" alt="" src={item.picture} />
                </div>
                <div>
                  <Link
                    className="font-bold text-4xl hover:text-red-900"
                    to={{
                      pathname: `/product-detail/${item.id}`,
                      state: {
                        getId: item.id,
                      },
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="h-full flex items-end relative product-price">
                  <div className="font-black text-xl primary-brown">
                    IDR
                    {' '}
                    {Number(item.price).toLocaleString('ind')}
                  </div>
                </div>
              </div>

            </div>
          ))
      }
      </div>
    </div>
  );
};

FavoriteProduct.defaultProps = {
  // getItemCategories: () => {},
  // newPageInfo: [],
  items: [],
  // tab: [],
  data: []
};

FavoriteProduct.propTypes = {
  // getItemCategories: PropTypes.func,
  // newPageInfo: PropTypes.node,
  // tab: PropTypes.node,
  items: PropTypes.node,
  data: PropTypes.node
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = { getItemCategories };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteProduct);
