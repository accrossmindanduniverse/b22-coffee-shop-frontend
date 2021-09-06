/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineDownload } from 'react-icons/ai';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { BiPaperclip } from 'react-icons/bi';
import { FaTrash } from 'react-icons/fa';
import { io } from 'socket.io-client';
import {
  getChat, getChatRoom, sendChat, deleteChat, downloadFile
} from '../../redux/actions/chat';
import defaultPicture from '../../assets/defaultPicture.png';
import './chat.css';

const { REACT_APP_BACKEND_URL: APP_URL } = process.env;

const ChatRoom = (props) => {
  const socket = io(`${APP_URL}`);
  const { token } = props.auth.refreshToken;
  const signed = props.user.signed[0];
  const time = props.timeFormat;
  const { id, name, picture } = props.roomState;
  const userData = props.auth.token;
  const { room } = props.chat;
  const bottomView = useRef();
  const [chatData, setChatData] = useState({
    message: '',
    file: '',
    recipient_id: id,
  });
  const [downloadUrl, setDownloadUrl] = useState('');
  const [deleteData, setDeleteData] = useState('');
  const [modal, setModal] = useState(false);

  const scrollToBottom = () => {
    bottomView.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  console.log(props, 'test props123');

  const handleSendChat = () => {
    if (chatData.message !== '') {
      props.sendChat(token, chatData).then(() => {
        props.getChatRoom(token, id);
        props.getChat(token);
        setChatData({
          ...chatData,
          message: '',
          file: '',
        });
        scrollToBottom();
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  const showModal = (visible) => {
    setModal(visible);
    setDeleteData(id);
  };

  const handleDownload = async (url) => {
    const data = await fetch(url, (err, res) => {
      if (!err) {
        return res.blob();
      }
      return (URL.createObjectURL);
    });
    return setDownloadUrl(data);
  };

  const handleDeleteChat = () => {
    props.deleteChat(token, deleteData).then(() => {
      props.getChat(token);
      setModal(false);
      setDeleteData('');
      props.chatFunc(!props.chatState);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleGoBack = () => {
    props.chatFunc(!props.chatState);
    props.getChat(token);
    props.getChatRoom(token, id);
  };

  useEffect(() => {
    socket.on(props.auth.token.id, (data) => {
      // using signed user's id
      props.getChatRoom(token, data.sender);
    });
    props.getChatRoom(token, id);
  }, []);

  useEffect(() => {
    // using other user id
    // explanation: for accessing specific chat that means specific
    // user, we need their id first, when we already inside
    // the room we have to use our's cause the other id already catched. Because socket need
    // our id, so far I don't know what's the reason
    props.getChatRoom(token, id);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [room]);

  return (
    <div className="mobile-chat-room-parent w-full">
      {modal && (
        <div onChange={() => setModal(true)} className="modal w-screen h-screen flex justify-center items-center">
          <div className="flex flex-col bg-white rounded-xl h-60 btn ensure-btn p-5 space-y-20">
            <p className="font-bold text-2xl text-center">Are you sure want to delete the this conversation?</p>
            <div className="flex-1 font-black text-2xl flex flex-row space-x-40">
              <button
                onClick={() => showModal(false)}
                type="button"
                className="h-14 w-32 cancel-btn rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteChat}
                type="button"
                className="h-14 w-32 delete-btn rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex justify-between bg-white p-14 rounded-xl">
          <div className="flex flex-row space-x-5 md:space-x-10 p-5 md:p-0">
            <button onClick={handleGoBack} type="button" className="outline-none">
              <AiOutlineArrowLeft className="text-2xl md:text-4xl" />
            </button>
            <p className="font-bold text-2xl md:text-4xl text-gray-600">{name}</p>
          </div>
          {room.length >= 1 && (
            <div role="button" tabIndex={0} onClick={() => showModal(true)}>
              <FaTrash className="font-bold text-2xl" />
            </div>
          )}
        </div>
        <div className="room">
          <div className="space-y-5">
            {room.map((data) => (
              data.sender_id !== userData.id.toString() ? (
                <div key={data.id}>
                  {data.file !== null && (
                    <div>
                      {data.file.slice(19) === '.jpg' || data.file.slice(19) === '.png' || data.file.slice(19) === '.img' || data.file.slice(19) === '.jpeg' ? (
                        <div className="mb-4">
                          <img className="w-44 h-44 rounded-lg" src={`${APP_URL}${data.file}`} alt="user" />
                          {downloadUrl === '' ? (
                            <div>
                              <AiOutlineDownload role="button" tabIndex={0} onClick={() => handleDownload(`${APP_URL}${data.file}`)} className="text-4xl text-white" />
                            </div>
                          ) : (
                            <a className="flex flex-row" href={downloadUrl} download>
                              <AiOutlineDownload className="text-4xl text-white" />
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="w-44 h-44 mb-4 rounded-lg bg-white flex justify-center items-center">
                          <a className="flex flex-row justify-center" href={`${APP_URL}${data.file}`} download="download">
                            <AiOutlineDownload className="text-2xl text-gray-600" />
                            <p className="text-xl">{data.file.slice(20)}</p>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="rounded-xl bg-white p-7">
                    <div className="flex flex-row space-x-7">
                      <div className=" flex items-center">
                        {picture === null ? (
                          <img src={defaultPicture} className="bg-gray-400 w-24 h-24 rounded-lg object-cover" alt="user" />
                        ) : (
                          <img src={`${APP_URL}${picture}`} className="bg-gray-400 w-24 h-24 rounded-lg object-cover" alt="user" />
                        )}
                      </div>
                      <div className="space-y-5 my-10 w-full">
                        <div className="flex justify-between">
                          <p className="font-bold text-xl text-gray-600">{name}</p>
                          <p className="text-lg text-gray-400">{`${new Date(data.created_at).toLocaleDateString('en-US', time).slice(10)}`}</p>
                        </div>
                        <p className="text-xl">
                          {data.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div ref={bottomView} />
                </div>
              ) : (
                <div>
                  {data.file !== null && (
                  <div className="flex justify-end">
                    {data.file.slice(19) === '.jpg' || data.file.slice(19) === '.png' || data.file.slice(19) === '.img' ? (
                      <div className="mb-4">
                        <img className="w-44 h-44 rounded-lg" src={`${APP_URL}${data.file}`} alt="user" />
                      </div>
                    ) : (
                      <div className="w-44 h-44 mb-4 rounded-lg bg-white flex justify-center items-center">
                        <a className="flex flex-row justify-center" href={`${APP_URL}${data.file}`}>
                          <p className="text-xl">{data.file.slice(20)}</p>
                        </a>
                      </div>
                    )}
                  </div>
                  )}
                  <div className="rounded-xl bg-white p-7">
                    <div className="flex flex-row space-x-7">
                      <div className="space-y-5 my-10 w-full">
                        <div className="flex justify-between">
                          <p className="text-lg text-gray-400">{`${new Date(data.created_at).toLocaleDateString('en-US', time).slice(10)}`}</p>
                          <p className="font-bold text-xl text-gray-600">{signed.name}</p>
                        </div>
                        <div className="flex justify-end">
                          <p className="text-xl">
                            {data.message}
                          </p>
                        </div>
                      </div>
                      <div className=" flex items-center">
                        {signed.picture === null ? (
                          <img src={defaultPicture} className="bg-gray-400 w-24 h-24 rounded-lg object-cover" alt="user" />
                        ) : (
                          <img src={`${APP_URL}${signed.picture}`} className="bg-gray-400 w-24 h-24 rounded-lg object-cover" alt="user" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div ref={bottomView} />
                </div>
              )
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg flex flex-row justify-between p-7">
          <div>
            {chatData.file !== '' && (
            <div className="border-gray-150 border-2 p-1 flex justify-between">
              <p>Send file</p>
              <FaTrash
                onClick={() => setChatData({
                  ...chatData,
                  file: ''
                })}
                className="text-xl text-gray-600 cursor-pointer"
              />
            </div>
            )}
            <input
              value={chatData.message}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendChat();
                }
              }}
              onChange={(e) => {
                setChatData({
                  ...chatData,
                  message: e.target.value,
                });
              }}
              className="text-2xl w-full bg-transparent outline-none"
              placeholder="Type a message..."
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <input
                className="w-auto absolute block opacity-0"
                type="file"
                onChange={(e) => setChatData({
                  ...chatData,
                  file: e.target.files[0]
                })}
              />
              <BiPaperclip className="text-gray-600 text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatRoom.defaultProps = ({
  getChat: () => {},
  getChatRoom: () => {},
  sendChat: () => {},
  deleteChat: () => {},
  downloadFile: () => {},
  auth: [],
  chat: [],
  user: [],
});

ChatRoom.propTypes = {
  getChat: PropTypes.func,
  getChatRoom: PropTypes.func,
  sendChat: PropTypes.func,
  deleteChat: PropTypes.func,
  downloadFile: PropTypes.func,
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
  getChat, getChatRoom, sendChat, deleteChat, downloadFile
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
