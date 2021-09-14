/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
// import { BsSearch } from 'react-icons/bs';
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
import Search from './Search';

const URL = 'https://historycoffee.herokuapp.com';

const Chat = (props) => {
  const socket = io(`${URL}`);
  const { latest } = props.chat;
  const signed = props.user.signed[0];
  const latestReverse = latest.reverse();
  const [chatRoom, setChatRoom] = useState(false);
  const [userRoom, setUserRoom] = useState([]);
  const [search, setSearch] = useState('');
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const history = useHistory();

  const handleGoToRoom = (data1, data2) => {
    setChatRoom(data1);
    setUserRoom(data2);
    if (data2?.id === signed.id) {
      history.push('/profile');
    }
  };

  useEffect(() => {
    socket.on(props.auth.token.id, () => {
      props.getChat(props.auth.refreshToken?.token);
    });
  }, []);

  const handleSearch = () => {
    props.searchUser(props.auth.refreshToken?.token, search);
    props.getErrorDefault();
  };

  useEffect(() => {
    props.getChat(props.auth.refreshToken?.token);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="parent-chat">
        <div className="w-full first-content flex md:flex-row space-x-14 justify-center md:px-40 md:py-24">
          <Search
            searchFucn={handleSearch}
            search={search}
            setSearch={setSearch}
            roomFunc={handleGoToRoom}
          />
          {chatRoom ? (
            <ChatRoom
              chatFunc={handleGoToRoom}
              chatState={chatRoom}
              roomState={userRoom}
              timeFormat={timeFormat}
            />
          ) : (
            <div className="mobile-chat-parent flex flex-col space-y-10 md:w-full">
              <div className="rounded-xl bg-white p-14">
                <p className="font-bold text-4xl text-gray-600">Chat Room</p>
              </div>
              <div className="list space-y-5">
                {latestReverse.map((userData) => (
                  <div
                    role="button"
                    tabIndex={0}
                    key={userData}
                    onClick={() => handleGoToRoom(true, {
                      id: userData.id,
                      picture: userData.picture,
                      name: userData.name,
                    })}
                    className="mobile-chat-box rounded-xl bg-white md:p-7 cursor-pointer"
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
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

Chat.defaultProps = ({
  getChatRoom: () => {},
  getChat: () => {},
  searchUser: () => {},
  getErrorDefault: () => {},
  auth: [],
  user: [],
  chat: [],
});

Chat.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
