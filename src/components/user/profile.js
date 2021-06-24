import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BsPencil } from 'react-icons/bs'
import Footer from '../footer/footer';
import { updateProfile } from '../../redux/actions/user';
import './profile.css'

const Profile = (props) => {
  const defaultData = props.auth.token

  const [ contacts, setContacts ] = useState({
    username: '',
    phone_number: '',
    user_address: '',
    name: '',
    first_name: '',
    last_name: ''
  })

  const [ modal, setModal ] = useState({
    onClick: false
  })

  const handleUpdateProfile = (token, id, data) => {
    props.updateProfile(token, id, data).then((res) => {
    setContacts({
      ...contacts,
      username: '',
      phone_number: '',
      user_address: '',
      name: '',
      first_name: '',
      last_name: ''
    })
    setModal({
      ...modal,
      onClick: false,
      id: 0
    })
    console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  console.log(contacts)

  return (
  <div>
  <div className="profile-banner">
    <div className="pl-36 pt-52 flex">
      <div className="user-profile-box flex justify-center">
        <div className= "absolute top-52">
          <p className="primary-shadow font-bold text-white text-4xl">User Profile</p>
        </div>
      </div>

      <div className="primary user-profile absolute bg-white user-description items-center rounded-lg p-4">
        <div className="flex-col flex items-center h-full justify-between">
          <div className='space-y-7'>
            <div className='flex justify-center'>
              <img className="h-32 w-32 rounded-full" src={defaultData.userData.picture} alt=""/>
            </div>
            <div className="flex-col leading-9 text-center">
              <div>
                <p className="font-bold text-2xl">{defaultData.userData.name}</p>
              </div>
              <div>
                <p>{defaultData.userData.username}</p>
              </div>
            </div>
          </div>
            <div className="text-center">
              <p>No Order Yet</p>
            </div>
        </div>
        <div>
        </div>
      </div>

      <div id='user-contacts' className="user-profile primary flex-1 bg-white absolute justify-center items-center rounded-lg">
        <div className="flex flex-col">
          <div className="flex-1 flex flex-row pt-5">
            <div className="flex-1 w-96 relative pl-10">
              <p className="font-bold text-gray-600 text-2xl">Contacts</p>
            </div>
              <div className="flex-1 flex justify-end items-end relative">
                <div className="pr-5 pb-2">
                    <button className="text-one-bg relative top-1 h-6 w-6 rounded-full text-center flex items-center justify-center">
                      <BsPencil className='text-white' onClick={() => {
                        setModal({
                          ...modal,
                          onClick: true
                        })
                        setContacts({
                          ...contacts,
                          username: defaultData.userData.username,
                          phone_number: defaultData.userData.phone_number,
                          user_address: defaultData.userData.user_address
                        })
                      }}/>
                    </button>
                </div>
            </div>
          </div>

          <div className='flex-1 pt-5'>
            <div className="flex flex-row h-96 pl-10">

              <div className="flex-1">
                <div className="user-contact-modal flex flex-col">
                  <div className="flex-1">
                    <label className="text-gray-400">Email Address: </label>
                    <div className="bottom-border">
                      <input value={contacts.username} type="text" placeholder='' onChange={(e) => 
                        setContacts({
                          ...contacts,
                          username: e.target.value
                        })
                      }/>
                    </div>
                  </div>
                  <div className="flex-1 pt-36">
                    <label className="text-gray-400"> Delivery Address </label>
                    <div className="bottom-border-2nd">
                      <input value={contacts.user_address} type="text" placeholder='' onChange={(e) => 
                        setContacts({
                          ...contacts,
                          user_address: e.target.value
                        })
                      }/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="user-contact-modal">
                  <label className="text-gray-400">Mobile Number: </label>
                  <div className="bottom-border">
                    <input value={contacts.phone_number} type="text" placeholder='' onChange={(e) => 
                        setContacts({
                          ...contacts,
                          phone_number: e.target.value
                        })
                      }/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    <div className="user-details border-2 bg-white flex-1">
      <div className="flex flex-row">

      <div className="flex flex-col">

        <div className="flex-1 flex flex-row pt-5">
          <div className="flex-1 w-96 relative pl-10">
            <p className="font-bold text-gray-600 text-2xl">Details</p>
          </div>
            <div id='contacts-pen' className="flex-1 flex justify-end items-end relative">
              <div className="details-pen pb-2">
              <button className="text-one-bg relative top-1 h-6 w-6 rounded-full text-center flex items-center justify-center">
                <BsPencil className='text-white' onClick={() => {
                        setModal({
                          ...modal,
                          onClick: true
                        })
                        setContacts({
                          ...contacts,
                          name: defaultData.userData.name,
                          first_name: defaultData.userData.first_name,
                          last_name: defaultData.userData.last_name
                        })
                      }}/>
            </button>
              </div>
          </div>
        </div>

        <div className='flex-1 pt-5'>
          <div className="flex flex-row h-96 pl-10 space-x-10">

            <div className="flex-1">
              <div className="user-contact-modal flex flex-col">
                <div className="flex-1">
                  <label className="text-gray-400">Display name: </label>
                  <div className="bottom-border">
                    <input value={contacts.name} type="text" placeholder='' onChange={(e) => 
                      setContacts({
                        ...contacts,
                        name: e.target.value
                      })
                    }/>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-gray-400">First name: </label>
                  <div className="bottom-border-2nd">
                  <input value={contacts.first_name} type="text" placeholder='' onChange={(e) => 
                      setContacts({
                        ...contacts,
                        first_name: e.target.value
                      })
                    }/>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-gray-400">Last name: </label>
                  <div className="bottom-border-2nd">
                  <input value={contacts.last_name} type="text" placeholder='' onChange={(e) => 
                      setContacts({
                        ...contacts,
                        last_name: e.target.value
                      })
                    }/>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 pl-20">

              <div className="flex flex-col">

                <div className="flex-1 user-contact-modal">
                  <div className="text-gray-400">
                    <p>DD/MM/YY:</p>
                  </div>
                  <div className="bottom-border">
                    <p>03/04/90</p>
                  </div>
                </div>
                
                <div className="user-contact-modal pt-10 flex flex-col space-y-5">
                  <div className="flex flex-row space-x-3">
                    <div className="flex justify-center items-center">
                      <label className="radio">
                        <input type="radio" name="gender"/>
                        <span className="item"></span>
                      </label>
                    </div>
                    <div>
                      <span>Male</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-row space-x-3">
                    <div className="flex justify-center items-center">
                      <label className="radio">
                        <input type="radio" name="gender"/>
                        <span className="item"></span>
                      </label>
                    </div>
                    <div>
                      <span>Female</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex-1 flex flex-col space-y-8 pl-24">
              <div className="font-bold text-white text-2xl flex items-center justify-center text-center relative bottom-14">
                <p className="w-72">
                  Do you want to save the change?
                </p>
              </div>
              <div className="flex-1 flex flex-col space-y-5 w-96">
                <button className="text-one-bg h-16 rounded-2xl font-bold text-white text-xl" onClick={()=> handleUpdateProfile(defaultData.refreshToken, defaultData.userData.id, contacts)}>Save Change</button>
                <button className="text-two-bg save-changes-color h-16 rounded-2xl font-bold text-xl">Cancel</button>
              </div>
              <div className="flex-1 flex flex-col space-y-3 save-changes-color">
                <div className="flex border-2 space-x-44 items-center h-16 rounded-2xl bg-white">
                  <button className="font-bold pl-3">Eddit Password</button>
                </div>
                <div className="flex border-2 space-x-60 items-center h-16 rounded-2xl bg-white">
                  <button className="font-bold pl-3">Log Out</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

        </div>
      </div>

    </div>
      
    </div>
    <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = { updateProfile }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
