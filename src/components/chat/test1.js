/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
import { getChat, getChatRoom } from '../../redux/actions/chat';
import { searchUser, getErrorDefault } from '../../redux/actions/user';
import Footer from '../footer/footer';
import './chat.css';
import ChatRoom from './ChatRoom';
import defaultPicture from '../../assets/defaultPicture.png';
import Navbar from '../../navbar/navbar';

const { REACT_APP_BACKEND_URL: URL } = process.env;

const Test1 = (props) => {
  const socket = io(`${URL}`);
  const { latest } = props.chat;
  const signed = props.user.signed[0];
  const searchData = props.user.search;
  const latestReverse = latest.reverse();
  const [search, setSearch] = useState('');
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const history = useHistory();

  const handleGoToRoom = (data) => {
    console.log(data.id, 'room data');
    if (data?.id === signed.id) {
      history.push('/profile', [data, timeFormat]);
    } else {
      history.push('/chatRoom', [data, timeFormat]);
    }
  };

  useEffect(() => {
    socket.on(props.auth.token.id, () => {
      props.getChat(props.auth.refreshToken.token);
    });
  }, []);

  const handleSearch = () => {
    props.searchUser(props.auth.refreshToken.token, search);
    props.getErrorDefault();
  };

  useEffect(() => {
    props.getChat(props.auth.refreshToken.token);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="parent-chat">
        <div className="w-full first-content flex flex-row space-x-14 justify-center px-40 py-24">
          <div className="search-container rounded-xl flex-1 px-10">
            <div className="my-14 flex justify-center items-center">
              <div className="rounded-3xl bg-white flex flex-row items-center p-5 w-72">
                <BsSearch className="text-2xl mr-3" />
                <input
                  value={search}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <p className="text-sm text-center font-bold mb-14 text-gray-300">Choose anyone you want to talk with</p>
            <div className="search-content divide-y-2">
              {searchData.map((userData) => (
                <div
                  key={userData.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleGoToRoom({
                    id: userData.id,
                    picture: userData.picture,
                    name: userData.name,
                  })}
                  className="flex flex-row space-x-7 py-4"
                >
                  {console.log(userData, 'id123')}
                  <div>
                    {userData.picture === null ? (
                      <img src={defaultPicture} className="w-24 h-24 rounded-full bg-gray-200" alt="user" />
                    ) : (
                      <img src={`${URL}${userData.picture}`} className="w-24 h-24 rounded-full bg-gray-200" alt="user" />
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
          <div className="flex flex-col space-y-10 w-full">
            <div className="rounded-xl bg-white p-14">
              <p className="font-bold text-4xl text-gray-600">Chat Room</p>
            </div>
            <div className="list">
              <div>
                <div className="space-y-5">
                  {latestReverse.map((userData) => (
                    <div
                      role="button"
                      tabIndex={0}
                      key={userData.id}
                      onClick={() => handleGoToRoom({
                        id: userData.id,
                        picture: userData.picture,
                        name: userData.name,
                      })}
                      className="rounded-xl bg-white p-7 cursor-pointer"
                    >
                      <div className="flex justify-center items-center flex-row space-x-7">
                        <div>
                          {userData.picture === null ? (
                            <img src={defaultPicture} className="w-24 h-24 rounded-full bg-cover" alt="user" />
                          ) : (
                            <img src={`${URL}${userData.picture}`} className="w-24 h-24 rounded-full bg-cover" alt="user" />
                          )}
                        </div>
                        <div className="space-y-5 my-10 flex-1">
                          <div className="flex flex-row justify-between ">
                            <p className="font-bold text-xl text-gray-600">{userData.name}</p>
                            <p className="font-bold text-gray-400">
                              {`${new Date(
                                userData.created_at,
                              )
                                .toLocaleDateString('en-US', timeFormat)
                                .slice(0, 9)}`}

                            </p>
                          </div>
                          <p className="h-24 text-xl overflow-hidden">{userData.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

Test1.defaultProps = ({
  getChatRoom: () => {},
  getChat: () => {},
  searchUser: () => {},
  getErrorDefault: () => {},
  auth: [],
  user: [],
  chat: [],
});

Test1.propTypes = {
  getChatRoom: PropTypes.func,
  getChat: PropTypes.func,
  searchUser: PropTypes.func,
  getErrorDefault: PropTypes.func,
  auth: PropTypes.node,
  chat: PropTypes.node,
  user: PropTypes.node,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  chat: state.chat,
  user: state.user,
});

const mapDispatchToProps = {
  getChat, searchUser, getErrorDefault, getChatRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(Test1);
