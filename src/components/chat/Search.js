/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './chat.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import defaultPicture from '../../assets/defaultPicture.png';

const Search = (props) => {
  const { REACT_APP_BACKEND_URL: URL } = process.env;
  const [modal, setModal] = useState(false);

  const searchData = props.user.search;

  return (
    <div>
      <div className="md:hidden bg-white w-16 my-5 h-16 rounded-full justify-center items-center flex-end flex">
        <button type="button" onClick={() => setModal(true)}>
          <BsSearch className="text-2xl" />
        </button>
      </div>
      {modal && (
        <div className="md:hidden search-modal flex flex-col items-center py-28">
          <div className="flex flex-row">
            <button type="button" className="bg-white w-20 my-5 h-20 rounded-full justify-center items-center flex mr-14" onClick={() => setModal(false)}>
              {modal && (
                <AiOutlineClose className="text-2xl" />
              )}
            </button>
            <div className="rounded-xl bg-white flex mt-5 p-5 h-20 relative right-10">
              <input
                value={props.search}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    props.searchFucn();
                  }
                }}
                onChange={(e) => props.setSearch(e.target.value)}
                placeholder="Search"
                className="w-full outline-none text-lg"
              />
            </div>
          </div>
          <div className="mobile-search flex flex-col mt-7 p-5">
            <p className="text-lg text-center font-bold mb-7 mt-2 text-white">Choose anyone you want to talk with</p>
            <div className="search-content divide-y-2">
              {searchData.map((userData) => (
                <div
                  key={toString(userData.id)}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    props.roomFunc(true, {
                      id: userData.id,
                      picture: userData.picture,
                      name: userData.name,
                    });
                    setModal(false);
                  }}
                  className="flex flex-row space-x-7 py-4"
                >
                  <div className="justify-center flex">
                    {userData.picture === null ? (
                      <img src={defaultPicture} className="w-24 h-24 object-cover rounded-lg bg-gray-200" alt="user" />
                    ) : (
                      <img src={`${URL}${userData.picture}`} className="w-24 h-24 object-cover rounded-lg bg-gray-200" alt="user" />
                    )}
                  </div>
                  <div className="flex flex-col w-72 space-y-2 h-24 overflow-hidden mb-14">
                    <p className="text-white font-bold">{userData.username}</p>
                    <p className="text-white font-bold">{userData.name}</p>
                    <p className="text-white">
                      {userData.user_address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="hidden md:block search-container rounded-xl md:px-10">
        <div className="md:py-14 flex justify-center items-center">
          <div className="rounded-3xl bg-white flex flex-row items-center p-5 w-72">
            <BsSearch className="text-2xl mr-3" />
            <input
              value={props.search}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  props.searchFucn();
                }
              }}
              onChange={(e) => props.setSearch(e.target.value)}
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
        </div>
        <p className="text-sm text-center font-bold mb-14 text-gray-300">Choose anyone you want to talk with</p>
        <div className="search-content divide-y-2">
          {searchData.map((userData) => (
            <div
              key={toString(userData.id)}
              role="button"
              tabIndex={0}
              onClick={() => props.roomFunc(true, {
                id: userData.id,
                picture: userData.picture,
                name: userData.name,
              })}
              className="flex flex-row space-x-7 py-4"
            >
              <div className="justify-center flex">
                {userData.picture === null ? (
                  <img src={defaultPicture} className="w-24 h-24 object-cover rounded-lg bg-gray-200" alt="user" />
                ) : (
                  <img src={`${URL}${userData.picture}`} className="w-24 h-24 object-cover rounded-lg bg-gray-200" alt="user" />
                )}
              </div>
              <div className="flex flex-col w-72 space-y-2 h-24 overflow-hidden mb-14">
                <p className="text-white font-bold">{userData.username}</p>
                <p className="text-white font-bold">{userData.name}</p>
                <p className="text-white">
                  {userData.user_address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Search.defaultProps = ({
  roomFunc: () => {},
  searchFucn: () => {},
  setSearch: () => {},
  search: [],
  user: [],
});

Search.propTypes = {
  roomFunc: PropTypes.func,
  searchFucn: PropTypes.func,
  setSearch: PropTypes.func,
  search: PropTypes.node,
  user: PropTypes.node,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Search);
