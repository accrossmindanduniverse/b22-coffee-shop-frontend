/* eslint-disable no-unneeded-ternary */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { BsPencil } from 'react-icons/bs';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import defaultAvatar from '../../assets/default-avatar.png';
import Navbar from '../../navbar/navbar';
import { authSignOut } from '../../redux/actions/auth';
import './profile.css';
import {
  getUserSigned, updateProfile, uploadPicture, uploadErrorDefault
} from '../../redux/actions/user';

const URL = 'http://localhost:8000';

const Profile = (props) => {
  const history = useHistory();
  const defaultData = props.auth.token;
  const { refreshToken } = props.auth;
  const {
    errMsg, pictureToggle, updateToggle, picErrMsg
  } = props.user;
  const signed = props.user.signed[0];
  const [contacts, setContacts] = useState({
    name: signed?.name,
    user_address: signed?.user_address,
    username: signed?.username,
    phone_number: signed?.phone_number,
    first_name: signed?.first_name,
    last_name: signed?.last_name
  });
  const [picture, setPicture] = useState({
    picture: ''
  });
  const [success, setSuccess] = useState(false);

  const onClickSignOut = () => {
    props.authSignOut();
  };

  const handleUpdateProfile = () => {
    if (picture.picture !== '') {
      props.uploadPicture(refreshToken.token, picture);
    } else {
      props.updateProfile(refreshToken.token, defaultData.id, contacts).then(() => {
        props.getUserSigned(refreshToken.token);
        setSuccess(true);
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  useEffect(() => {
    if (pictureToggle) {
      props.updateProfile(refreshToken.token, defaultData.id, contacts).then(() => {
        props.getUserSigned(refreshToken.token);
        setSuccess(true);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [pictureToggle]);

  useEffect(() => {
    if (updateToggle) {
      setTimeout(() => {
        setSuccess(false);
        props.uploadErrorDefault();
      }, 2000);
    }
  }, [success]);

  useEffect(() => {
    if (props.auth.token !== null) {
      props.getUserSigned(refreshToken?.token);
    }
  }, []);

  return signed !== undefined && (
    <div className="profile-banner overflow-x-hidden">
      <div className="bg-white relative bottom-10 md:bottom-0">
        <Navbar />
      </div>
      {success && (
        <div className="modal w-screen h-screen flex justify-center items-center">
          <div className="flex justify-center items-center rounded-lg bg-white">
            <p className="font-bold text-2xl primary-brown-text my-14 mx-24">Profile Updated</p>
          </div>
        </div>
      )}
      <div className="md:px-44 mt-7 mb-14">
        <p className="primary-shadow primary md:py-7 text-center md:text-justify font-bold text-white text-2xl md:text-4xl">User Profile</p>
        <div className="h-14 justify-center flex md:justify-start">
          <p className="text-red-600 font-semibold text-2xl">{errMsg}</p>
        </div>
        <div className="flex flex-col md:flex-row space-x-10 md:bg-gray-50 primary rounded-xl">
          <div className="flex flex-col md:px-36 mt-14">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center mb-10">
                <img className="w-32 h-32 md:h-44 md:w-44 object-cover rounded-full mb-7" src={`${URL}${signed.picture}` ? `${URL}${signed.picture}` : defaultAvatar} alt="" />
                <p className="font-bold text-white md:text-black text-xl">{signed.name}</p>
                <p className="text-lg text-white md:text-black">{signed.username}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="h-10">
                  <p className="text-red-600 font-semibold text-xl">{picErrMsg}</p>
                </div>
                <div className="w-44 h-14 md:h-20 md:w-72 rounded-lg bg-yellow-500 flex justify-center items-center font-bold save-changes-color">
                  Choose Photo
                  <input
                    className="cursor-pointer w-auto absolute block opacity-0"
                    type="file"
                    onChange={(e) => setPicture({
                      ...picture,
                      picture: e.target.files[0]
                    })}
                  />
                </div>
                <button type="button" className="mt-7 text-one-bg w-44 h-14 md:h-20 md:w-72 rounded-lg font-bold text-white">Remove Photo</button>
              </div>
            </div>
            <div className="flex flex-col mt-14 items-center">
              <button onClick={() => history.push('/confirm-password')} type="button" className="w-44 h-14 md:h-20 md:w-72 rounded-2xl border-2 save-changes-color font-bold bg-white">Edit Password</button>
              <div className="w-60">
                <p className="tracking-wider text-center text-white md:text-black font-bold text-xl py-10">
                  Do you want to save the change?
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-7">
                <button type="button" onClick={handleUpdateProfile} className="w-52 h-14 md:w-72 md:h-20 border-1 text-one-bg font-bold text-white rounded-2xl">Save Change</button>
                <button type="button" className="w-52 h-14 md:w-72 md:h-20 border-1 save-changes-color font-bold bg-yellow-500 rounded-2xl">Cancel</button>
                <button type="button" onClick={onClickSignOut} className="w-52 h-14 md:w-72 md:h-20 border-2 rounded-2xl save-changes-color font-bold bg-white">Log Out</button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl w-80 relative right-4 md:right-0 md:w-full rounded-lg user-profile my-14 md:px-24">
            <div className="flex flex-col space-y-20 mx-24">
              <div className="flex flex-row justify-between items-center pt-14">
                <p className="font-bold text-xl">Contacts</p>
                <div className="flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full text-one-bg">
                  <BsPencil className="text-white text-lg md:text-xl" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <label htmlFor>
                  <p className="text-gray-300 font-bold text-lg">Email Address :</p>
                  <div className="border-b-2 w-full">
                    <input
                      className="w-full outline-none"
                      value={contacts.username}
                      type="text"
                      placeholder=""
                      onChange={(e) => setContacts({
                        ...contacts,
                        username: e.target.value
                      })}
                    />
                  </div>
                </label>
                <label htmlFor>
                  <p className="text-gray-300 font-bold text-lg">Mobile Number :</p>
                  <div className="border-b-2">
                    <input
                      className="w-full outline-none"
                      value={contacts.phone_number}
                      type="text"
                      placeholder=""
                      onChange={(e) => setContacts({
                        ...contacts,
                        phone_number: e.target.value
                      })}
                    />
                  </div>
                </label>
              </div>
              <label htmlFor>
                <p className="text-gray-300 font-bold text-lg">Delivery Address :</p>
                <div className="border-b-2">
                  <input
                    className="mr-24 outline-none"
                    value={contacts.user_address}
                    type="text"
                    placeholder=""
                    onChange={(e) => setContacts({
                      ...contacts,
                      user_address: e.target.value
                    })}
                  />
                </div>
              </label>
              <p className="font-bold text-xl">Details</p>
              <div className="flex flex-col md:flex-row justify-between">
                <label htmlFor>
                  <p className="text-gray-300 font-bold text-lg">Display Name :</p>
                  <div className="border-b-2">
                    <input
                      className="w-full outline-none"
                      value={contacts.name}
                      type="text"
                      placeholder=""
                      onChange={(e) => setContacts({
                        ...contacts,
                        name: e.target.value
                      })}
                    />
                  </div>
                </label>
                <label htmlFor>
                  <p className="text-gray-300 font-bold text-lg">DD/MM/YY :</p>
                  <div className="border-b-2">
                    <input
                      className="w-full outline-none"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </label>
              </div>
              <label htmlFor>
                <p className="text-gray-300 font-bold text-lg">First Name :</p>
                <div className="border-b-2">
                  <input
                    className="w-full outline-none"
                    value={contacts.first_name}
                    type="text"
                    placeholder=""
                    onChange={(e) => setContacts({
                      ...contacts,
                      first_name: e.target.value
                    })}
                  />
                </div>
              </label>
              <label htmlFor>
                <p className="text-gray-300 font-bold text-lg">Last Name :</p>
                <div className="border-b-2">
                  <input
                    className="w-full outline-none"
                    value={contacts.last_name}
                    type="text"
                    placeholder=""
                    onChange={(e) => setContacts({
                      ...contacts,
                      last_name: e.target.value
                    })}
                  />
                </div>
              </label>
              <div className="flex flex-row justify-center space-x-24 py-10 items-center">
                <div className="flex flex-row space-x-3">
                  <div className="flex justify-center items-center">
                    <label htmlFor className="radio">
                      <input type="radio" name="gender" />
                      <span className="item" />
                    </label>
                  </div>
                  <div>
                    <span>Male</span>
                  </div>
                </div>

                <div className="flex flex-row space-x-3">
                  <div className="flex justify-center items-center">
                    <label htmlFor className="radio">
                      <input type="radio" name="gender" />
                      <span className="item" />
                    </label>
                  </div>
                  <div>
                    <span>Female</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

Profile.defaultProps = ({
  updateProfile: () => {},
  authSignOut: () => {},
  getUserSigned: () => {},
  uploadPicture: () => {},
  uploadErrorDefault: () => {},
  user: [],
  auth: []
});

Profile.propTypes = {
  authSignOut: PropTypes.func,
  updateProfile: PropTypes.func,
  getUserSigned: PropTypes.func,
  uploadPicture: PropTypes.func,
  uploadErrorDefault: PropTypes.func,
  user: PropTypes.node,
  auth: PropTypes.node
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = {
  updateProfile, authSignOut, getUserSigned, uploadPicture, uploadErrorDefault
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
