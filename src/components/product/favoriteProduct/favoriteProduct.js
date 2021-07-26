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
  // const { newPageInfo } = props;
  const { items } = props.items.search;
  // const { nextPage } = props.items.pageInfo;
  // const searchNext = props.items.search.pageInfo;

  // const handleNextItems = () => {
  //   props.getItemCategories(props.tab, newPageInfo);
  // };

  // console.log(getItemsByCategory, newPageInfo, props.tab, 'data test');

  // useEffect(() => {
  //   props.getItemCategories(props.items.dataByCategory.items);
  // }, []);

  console.log(props.items, 'search check');
  console.log(getItemsByCategory, 'testtstst');

  return items !== undefined ? (
    <div>
      <div className="grid lg:grid-cols-4 grid-rows-2 gap-10 p-10">
        {
          items.map((dataMap) => (
            <div className="shadow-2xl grid-display h-full">

              <div className="flex flex-col text-center items-center justify-center space-y-3 h-full">
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
      <div className="grid lg:grid-cols-4 grid-rows-2 gap-10 p-10">
        {
          getItemsByCategory.map((item) => (
            <div className="shadow-2xl grid-display h-full">

              <div className="flex flex-col text-center items-center justify-center space-y-3 h-full">
                <div className="flex justify-center">
                  <img className="h-24 w-24 rounded-full bg-gray-300" alt="" src={item.picture} />
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
