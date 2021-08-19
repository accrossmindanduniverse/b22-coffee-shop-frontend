import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './Search.css';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { searchItem } from '../../redux/actions/items';

const Search = (props) => {
  console.log(props.items);
  const { newPageInfo, urlParams } = props;
  const history = useHistory();
  const [searchClick, setSearchClick] = useState({
    clicked: false
  });
  const [dropDown, setDropDown] = useState({
    clicked: false
  });
  const [searchData, setSearchData] = useState({
    search: urlParams.search ? urlParams.search : '',
    sortBy: urlParams.sortBy ? urlParams.sortBy : 'name',
    sort: urlParams.sort ? urlParams.sort : 'asc',
    page: urlParams.page ? urlParams.page : '1',
  });
  let searchParams = `?search=${searchData.search}`;

  const handleSearch = (e) => {
    // eslint-disable-next-line max-len
    console.log(e.target.value);
    if (e.key === 'Enter') {
      setSearchData({
        ...searchData,
        search: e.target.value,
      });
      setTimeout(() => {
        setSearchClick({
          ...searchClick,
          clicked: false
        });
        setDropDown({
          ...dropDown,
          clicked: false
        });
      }, 400);
    }
  };

  const dropDownCustom = (visible) => {
    setDropDown({
      ...dropDown,
      clicked: visible
    });
    if (dropDown.clicked) {
      setDropDown({
        ...dropDown,
        clicked: false
      });
    }
  };

  console.log(urlParams.search, 'test');

  const handleSort = (sortData) => {
    setSearchData({
      ...searchData,
      sort: sortData
    });
  };

  const handleSortBy = (sortByData) => {
    setSearchData({
      ...searchData,
      sortBy: sortByData
    });
  };

  const handleSearchClick = () => {
    setSearchClick({
      ...searchClick,
      clicked: true
    });
  };

  console.log(searchData.page);

  useEffect(() => {
    setSearchData({
      ...searchData,
      page: newPageInfo
    });
  }, [newPageInfo]);

  useEffect(() => {
    if (searchData.search !== '') {
      props.searchItem(searchData.search, searchData.sortBy, searchData.sort, searchData.page);
      searchParams += `&page=${searchData.page}`;
      history.push(`/product-cust/${searchParams}`);
    }
  }, [searchData]);
  return (
    <div>
      {searchClick.clicked ? (
        <div>
          <div className="flex justify-center">
            <div className="flex flex-row bg-gray-100 rounded-xl mr-14 ml-14 w-full md:mr-44 md:ml-44 justify-center items-center h-10 mt-5">
              <FiSearch className="text-2xl text-gray-600 ml-1 mr-1 font-bold fas fa-search" />
              <input type="text" defaultValue={searchData.search} onClick={handleSearchClick} placeholder="Seach Item" className="mr-4 w-full h-full bg-gray-100 outline-none" onKeyDown={handleSearch} />
            </div>
          </div>
          <div className=" flex flex-col space-y-20 md:mr-96 md:ml-96">
            <div className="flex justify-center items-center">
              <p className="font-bold">Sort By</p>
              <FiChevronDown onClick={() => dropDownCustom(true)} className="text-2xl font-bold text-center cursor-pointer" />
            </div>
            {dropDown.clicked && (
            <div onChange={() => setDropDown(true)} className="relative">
              <div className=" flex flex-col space-y-5 absolute w-full bg-gray-50 rounded-lg shadow-xl justify-center -top-16">
                <div className="flex flex-col space-y-5 outline-none mr-32 ml-32">
                  <button onClick={() => handleSort('asc')} type="button" className="focus:outline-black shadow-lg bg-gray-50 rounded-md">
                    <p className="md:mt-5 md:mb-5 md:mr-10 md:ml-10 primary-sort-text tracking-widest font-black text-gray-400 text-lg md:text-xl">To Lowest</p>
                  </button>
                  <button onClick={() => handleSort('desc')} type="button" className="focus:outline-black shadow-lg bg-gray-50 rounded-md">
                    <p className="md:mt-5 md:mb-5 md:mr-10 md:ml-10 primary-sort-text tracking-widest font-black text-gray-400 text-md md:text-xl">To Highest</p>
                  </button>
                </div>
                <div className="flex flex-col items-center mt-14 justify-center">
                  <button type="button" onClick={() => handleSortBy('price')} className="primary-sort-text tracking-widest font-black text-gray-400 text-xl">Price</button>
                  <button type="button" onClick={() => handleSortBy('name')} className="primary-sort-text tracking-widest font-black text-gray-400 text-xl">Item</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex left-20 md:left-0 relative md:justify-end">
          <div className="flex flex-row bg-gray-100 rounded-xl mr-44 justify-center items-center h-10 mt-5">
            <FiSearch className="text-2xl text-gray-600 ml-1 mr-1 font-bold fas fa-search" />
            <input type="text" onClick={handleSearchClick} placeholder="Seach Item" className="mr-4 w-full h-full bg-gray-100 outline-none" onKeyDown={handleSearch} />
          </div>
        </div>
      )}
    </div>
  );
};

Search.defaultProps = {
  searchItem: () => {},
  items: [],
  urlParams: [],
  newPageInfo: []
};

Search.propTypes = {
  searchItem: PropTypes.func,
  urlParams: PropTypes.node,
  items: PropTypes.node,
  newPageInfo: PropTypes.node
};

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = { searchItem };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
