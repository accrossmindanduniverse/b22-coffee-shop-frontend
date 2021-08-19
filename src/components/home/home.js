/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
// import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { connect } from 'react-redux';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { searchItem } from '../../redux/actions/items';
import Navbar from '../../navbar/navbar';
import hazelnut from '../../assets/hazelnut.png';
import pinky from '../../assets/pinky.png';
import wings from '../../assets/wings.png';
import global from '../../assets/Huge-Global@2x.png';
import robert from '../../assets/robert.png';
import yessica from '../../assets/yessica.png';
import kim from '../../assets/kim.png';
import netflix from '../../assets/netflix.png';
import reddit from '../../assets/reddit.png';
import amazon from '../../assets/amazon.png';
import discord from '../../assets/discord.png';
import spotify from '../../assets/spotify.png';
import './home.css';
import teamWork from '../../assets/team-work.png';
import Footer from '../footer/footer';
import { authRefreshToken } from '../../redux/actions/auth';

function Home(props) {
  const history = useHistory();

  useEffect(() => {
    if (props.auth.token !== null) {
      props.authRefreshToken(props.auth.token?.token, {
        refreshToken: props.auth.token.refreshToken
      });
    }
  }, [props.auth.token]);

  return (
    <div className="overflow-x-hidden md:overflow-visible">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="banner w-screen">
          <div className="flex items-center md:items-start flex-col space-y-10 pt-7">
            <div className="md:space-y-44 w-80 md:ml-44 md:w-full md:max-w-2xl">
              <div className="md:top-14 relative">
                <p className="font-bold text-6xl text-white">Start Your Day with Coffee and Good Meals</p>
              </div>

              <div className="leading-5 w-full">
                <p className="text-white text-lg md:text-3xl font-bold">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
              </div>

              <div className="mr-14 ml-14 py-14 md:py-0 md:mr-0 md:ml-0">
                <button onClick={() => history.push('/product-cust')} type="button" className="flex rounded-xl primary-btn">
                  <p className="mt-4 mb-4 mr-10 ml-10 text-lg primary-brown-text font-bold md:mt-7 md:mb-7 md:mr-20 md:ml-20 md:text-2xl">Get Started</p>
                </button>
              </div>

            </div>
          </div>

          <div className="hidden md:flex flex-row sm:flex-col bg-white rounded-2xl shadow-2xl justify-center items-center m-44 top-10 relative">

            <div className="flex justify-center items-center space-x-64 divide-x-2">

              <div className="flex flex-row space-x-5 items-center m-10">

                <div className="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center">
                  <p className="text-center text-xl font-bold">
                    <BsFillPersonFill className="primary-brown-text fas fa-user" />
                  </p>
                </div>
                <div className="flex flex-col py-7 px-10">
                  <p className="font-black text-2xl">90+</p>
                  <p className="text-2x">Staff</p>
                </div>

              </div>

              <div className="flex flex-row space-x-5 pl-10 items-center m-10">

                <div className="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center">
                  <p className="text-center text-xl font-bold">
                    <ImLocation2 className="primary-brown-text fas fa-map-marker-alt" />
                  </p>
                </div>
                <div className="flex flex-col py-7 px-10">
                  <p className="font-black text-2xl">30+</p>
                  <p className="text-2x">Stores</p>
                </div>

              </div>

              <div className="flex flex-row space-x-5 items-center m-10 pl-10">

                <div className="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center">
                  <p className="text-xl font-bold text-center ">
                    <BsPeopleFill className="primary-brown-text fas fa-map-marker-alt" />
                  </p>
                </div>
                <div className="flex flex-col py-7 px-10">
                  <p className="font-black text-2xl">800+</p>
                  <p className="text-2x">Customers</p>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="flex flex-col lg:m-44 md:flex-row justify-between items-center">
              <img className="object-cover" src={teamWork} alt="" />
              <div className="flex flex-col space-y-7">
                <p className="text-center font-bold text-2xl">We Provide Good Coffee and Healthy Meals</p>
                <div className="left-2 relative md:w-96">
                  <p>
                    You can explore the menu
                    that we provide with fun and
                    have their own taste and make
                    your day better.

                  </p>
                </div>
                <div className="flex space-y-7 flex-col pb-10">
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="w-5 h-5 rounded-full bg-green-300 flex justify-center items-center">
                      <AiOutlineCheck className="text-white text-xs text-center fas fa-check" />
                    </div>
                    <p>High quality beans.</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className=" w-5 h-5 rounded-full bg-green-300 flex justify-center items-center">
                      <AiOutlineCheck className="text-white text-xs text-center fas fa-check" />
                    </div>
                    <p>Healthy meals, you can request the ingredients.</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className=" w-5 h-5 rounded-full bg-green-300 flex justify-center items-center">
                      <AiOutlineCheck className="text-white text-xs text-center fas fa-check" />
                    </div>
                    <p>Chat with our staff to get better experience for ordering.</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className=" w-5 h-5 rounded-full bg-green-300 flex justify-center items-center">
                      <AiOutlineCheck className="text-white text-xs text-center fas fa-check" />
                    </div>
                    <p>Free member card with a minimum purchase of IDR 200.000.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col container-2nd justify-center items-center space-y-20">
            <div className="flex justify-center items-center flex-col space-y-7 mt-24 text-center">
              <p className="font-bold text-4xl">Here is People&apos;s Favorite</p>
              <p className="text-xl">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-32">
              <div className="bg-white rounded-2xl border-2 mb-20">
                <div className="flex flex-col h-full space-y-14 justify-center items-center w-96">
                  <img className="w-40 h-40 rounded-full mt-14" src={hazelnut} alt="" />
                  <p className="font-bold text-xl mt-14 mb-14">Hazelnut Latte</p>
                  <div className="flex flex-col space-y-3 flex-1">
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Hazelnut Syrup</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Drums Sticks</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Mayonaise and Lemon</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Hot Fried</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Secret Recipe</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Buy 1 Get 1 only for Dine In</p>
                    </div>
                  </div>
                  <div className="flex justify-end h-full items-end pb-10">
                    <div className="flex flex-col text-center space-y-5 justify-center items-center">
                      <p className="font-bold text-2xl">IDR 30.000</p>
                      <button type="button" className="rounded-full order-btn w-32 h-14">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 mb-20">
                <div className="flex flex-col h-full space-y-14 justify-center items-center w-96">
                  <img className="w-40 h-40 rounded-full mt-14" src={pinky} alt="" />
                  <p className="font-bold text-xl mt-14 mb-14">Pinky Promise</p>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Hazelnut Syrup</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Vanilla Whipped Cream</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Hot / Ice</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Sliced Banana on top</p>
                    </div>
                  </div>
                  <div className="flex justify-end h-full items-end pb-10">
                    <div className="flex flex-col text-center space-y-5 justify-center items-center">
                      <p className="font-bold text-2xl">IDR 30.000</p>
                      <button type="button" className="rounded-full order-btn w-32 h-14">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 mb-20">
                <div className="flex flex-col h-full space-y-14 justify-center items-center w-96">
                  <img className="w-40 h-40 rounded-full mt-14" src={wings} alt="" />
                  <p className="font-bold text-xl mt-14 mb-14">Wings</p>
                  <div className="flex flex-col space-y-3 flex-1">
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Hazelnut Syrup</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Drums Sticks</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Mayonaise and Lemon</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Hot Fried</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Secret Recipe</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Buy 1 Get 1 only for Dine In</p>
                    </div>
                  </div>
                  <div className="flex justify-end h-full items-end pb-10">
                    <div className="flex flex-col text-center space-y-5 justify-center items-center">
                      <p className="font-bold text-2xl">IDR 30.000</p>
                      <button type="button" className="rounded-full order-btn w-32 h-14">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div>
            <div className="hidden lg:flex flex-col bg-world-map w-full items-center space-y-32">

              <div className="space-y-5 text-center">
                <p className="font-bold text-4xl">Visit Our Store in the Spot on the Map Below</p>
                <p className="text-xl">See our store in every city on the spot and spen your good day there. See you soon!</p>
              </div>

              <div>
                <img className="world-img object-cover" src={global} alt="" />
              </div>

            </div>

            <div className="flex flex-col space-y-5 bg-white pt-20 pb-20">

              <div className="text-center">
                <p className="font-black text-4xl">Our Partners</p>
              </div>

              <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-5 right-20 relative md:right-0 md:flex md:mr-44 ml-44 md:flex-row md:space-x-24 partners-container items-center justify-center">
                <img className="object-cover w-auto h-auto md:w-44 md:h-24" src={netflix} alt="" />
                <img className="object-cover w-auto h-auto md:w-36 md:h-12" src={reddit} alt="" />
                <img className="object-cover w-auto h-auto md:w-44 md:h-36" src={amazon} alt="" />
                <img className="object-cover w-auto h-auto md:w-44 md:h-14" src={discord} alt="" />
                <img className="object-cover w-auto h-auto md:w-48 md:h-14" src={spotify} alt="" />
              </div>
            </div>

            <div className="text-center space-y-5 flex flex-col justify-center items-center mt-24 mb-24">
              <p className="font-bold text-4xl tracking-wide">Loved by Thousands of Happy Customer</p>
              <p className="text-2xl">These are the stories of our customers who have visited us with great pleasure.</p>
            </div>

            <div className="flex space-y-5 w-auto md:space-y-0 flex-col md:flex-row md:space-x-20 md:ml-10 md:mr-10 justify-center">

              <div className="flex flex-col border-2 bg-white customer-testi space-y-6 rounded-xl">

                <div className="m-7">
                  <div className="flex flex-row space-x-4">
                    <div>
                      <img className="w-14 h-14 rounded-full" src={robert} alt="" />
                    </div>
                    <div>
                      <p className="text-bold text-xl">Viezha Robert</p>
                      <p>Warsaw, Poland</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <p>4.5</p>
                      <em className="fas fa-star text-sm text-yellow-300" />
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="tracking-wide">
                      &dquo;“Wow... I am very happy to spend my whole day here.
                      the Wi-fi is good, and the coffee and meals tho.
                      I like it here!! Very recommended!&dquo;
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex flex-col border-2 bg-white customer-testi space-y-6 rounded-xl">
                <div className="m-7">
                  <div className="flex flex-row space-x-4">
                    <div>
                      <img className="w-14 h-14 rounded-full" src={yessica} alt="" />
                    </div>
                    <div>
                      <p className="text-bold text-xl">Yessica Christy</p>
                      <p>Shanxi, China</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <p>4.5</p>
                      <em className="fas fa-star text-sm text-yellow-300" />
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="tracking-wide">
                      “I like it because I like to travel far and still
                      can make my day better just by drinking their Hazelnut Latte&dquo;
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex flex-col border-2 bg-white customer-testi space-y-6 rounded-xl">
                <div className="m-7">
                  <div className="flex flex-row space-x-4">
                    <div>
                      <img className="w-14 h-14 rounded-full" src={kim} alt="" />
                    </div>
                    <div>
                      <p className="text-bold text-xl">Kim Young Jou</p>
                      <p>Seoul, South Korea</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <p>4.5</p>
                      <em className="fas fa-star text-sm text-yellow-300" />
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="tracking-wide">
                      “This is very unusual for my taste, I haven’t liked coffee before
                      but their coffee is the best! and yup,
                      you have to order the chicken wings, the best in town!&dquo;
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="hidden md:flex flex-row bg-white md:justify-between mr-20 ml-20  mt-20 mb-20">

            <div className="flex flex-row space-x-5 items-center">
              <div className="w-12 h-5 rounded-full primary-brown-bg" />
              <div className="w-5 h-5 rounded-full bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300" />
              <div className="w-5 h-5 rounded-full bg-gray-300" />
            </div>
            <div className="flex flex-row space-x-10">
              <button type="button" className="w-16 h-16 rounded-full left-btn">
                <em className="fas fa-arrow-left" />
              </button>
              <button type="button" className="w-16 h-16 rounded-full right-btn">
                <em className="fas fa-arrow-right" />
              </button>
            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg md:ml-32 md:mr-32 top-16 relative">

            <div className="md:pt-18 md:pb-14 flex flex-col md:flex-row justify-center md:justify-between md:mr-32 md:ml-32 md:items-center space-y-10 md:space-y-0">
              <div className="space-y-7">
                <p className="font-bold text-4xl">Check our promo today!</p>
                <p className="text-xl">Let&apos;s see the deals and pick yours!</p>
              </div>
              <div>
                <button type="button" className="w-52 h-16 rounded-xl text-xl primary-btn primary-brown-text font-bold">See Promo</button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = ({
  authRefreshToken: () => {},
  auth: []
});

Home.propTypes = {
  authRefreshToken: PropTypes.func,
  auth: PropTypes.node
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { searchItem, authRefreshToken };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
