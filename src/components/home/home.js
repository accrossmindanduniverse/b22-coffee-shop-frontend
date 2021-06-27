import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
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

function Home() {
  return (
    <div className="parent">
      <div>
        <Navbar />
      </div>
      <div className="banner w-screen">
        <div className="flex flex-col space-y-10 pt-7">
          <div className="w-full relative flex justify-end items-end pr-20">
            <div className="pr-28 relative">
              <FiSearch className="fas fa-search absolute left-3 top-3" />
              <input className="bg-gray-100 pl-10 h-10 w-64 rounded-full" type="text" placeholder="Search" />
            </div>
          </div>
          <div className="flex-1 space-y-10 first-content relative left-44">
            <div>
              <p className="font-bold text-6xl text-white">Start Your Day with Coffee and Good Meals</p>
            </div>

            <div className="leading-5 w-full">
              <p className="text-white text-2xl font-bold">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            </div>

            <div>
              <button type="button" className="w-96 h-24 rounded-xl text-xl primary-btn primary-brown-text font-bold">Get Started</button>
            </div>

          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl justify-center items-center relative top-52 m-44">

            <div className="flex md:justify-center items-center space-x-64 divide-x-2 h-44">

              <div className="flex flex-row space-x-5 items-center relative">

                <div className="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center">
                  <p className="text-center text-xl font-bold">
                    <BsFillPersonFill className="primary-brown-text fas fa-user" />
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-black text-2xl">90+</p>
                  <p className="text-2x">Staff</p>
                </div>

              </div>

              <div className="flex flex-row space-x-5 relative pl-10 items-center">

                <div className="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center">
                  <p className="text-center text-xl font-bold">
                    <ImLocation2 className="primary-brown-text fas fa-map-marker-alt" />
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-black text-2xl">30+</p>
                  <p className="text-2x">Stores</p>
                </div>

              </div>

              <div className="flex flex-row space-x-5 relative items-center pl-10">

                <div className="h-10 w-10 rounded-full bg-yellow-400 flex justify-center items-center">
                  <p className="text-xl font-bold text-center ">
                    <BsPeopleFill className="primary-brown-text fas fa-map-marker-alt" />
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-black text-2xl">800+</p>
                  <p className="text-2x">Customers</p>
                </div>

              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-row pt-80 relative space-x-96 justify-center items-center">

            <div>
              <img className="w-full" src={teamWork} alt="" />
            </div>
            <div className="flex flex-col space-y-7">
              <p className="font-bold text-2xl">We Provide Good Coffee and Healthy Meals</p>
              <p className="w-96">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
              <div className="flex flex-row space-x-2 items-center">
                <div className=" w-5 h-5 rounded-full bg-green-300 flex justify-center items-center">
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

          <div className="flex flex-col p-20 container-2nd justify-center items-center space-y-20 pt-32">

            <div className="flex justify-center items-center flex-col space-y-7">
              <p className="font-bold text-4xl">Here is People&apos;s Favorite</p>
              <p className="text-xl">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            </div>

            <div className="flex flex-row space-x-32">

              <div className="flex-1 flex flex-col space-x-3 border-2 stores-offer space-y-56 justify-center items-center p-10 bg-white">
                <div className="space-y-32">
                  <div>
                    <img className="w-40 h-40 rounded-full" src={hazelnut} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Hazelnut Latte</p>
                  </div>
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
                      <p>Ice / Hot</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Sliced Banana on Top</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col text-center space-y-5">
                  <p className="font-bold text-2xl">IDR 25.000</p>
                  <button type="button" className="rounded-full order-btn w-32 h-14">Order Now</button>
                </div>
              </div>

              <div className="flex-1 flex flex-col space-x-3 stores-offer border-2 h-full space-y-48 justify-center items-center p-10 bg-white">
                <div className="space-y-32">
                  <div>
                    <img className="w-40 h-40 rounded-full" src={pinky} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Pinky Promise</p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>1 Shot of Coffee</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Vanilla Whipped Cream</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Chocolate Biscuits</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Strawberry Syrup</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Sliced Strawberry on Top</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col text-center space-y-5">
                  <p className="font-bold text-2xl">IDR 30.000</p>
                  <button type="button" className="rounded-full order-btn w-32 h-14">Order Now</button>
                </div>

              </div>

              <div className="flex-1 flex flex-col space-x-3 stores-offer border-2 h-full space-y-40 justify-center items-center p-10 bg-white">
                <div className="space-y-32">
                  <div>
                    <img className="w-40 h-40 rounded-full" src={wings} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Chicken Wings</p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-row space-x-2">
                      <AiOutlineCheck className="text-green-300 text-xs text-center" />
                      <p>Wings</p>
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
                </div>

                <div className="flex-1 flex flex-col text-center space-y-5">
                  <p className="font-bold text-2xl">IDR 40.000</p>
                  <button type="button" className="rounded-full order-btn w-32 h-14">Order Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-world-map w-full items-center space-y-32">

            <div className="space-y-5 text-center map-spot-txt pt-14">
              <p className="font-bold text-4xl">Visit Our Store in the Spot on the Map Below</p>
              <p className="text-xl">See our store in every city on the spot and spen your good day there. See you soon!</p>
            </div>

            <div>
              <img className="world-img" src={global} alt="" />
            </div>

          </div>

          <div className="flex flex-col space-y-5 bg-white w-full h-full relative bottom-20 pt-20">

            <div className="text-center">
              <p className="font-black text-4xl">Our Partners</p>
            </div>

            <div className="flex flex-row space-x-20 partners-container h-44 items-center justify-center">
              <img className="w-44 h-24" src={netflix} alt="" />
              <img className="w-36 h-12" src={reddit} alt="" />
              <img className="w-44 h-36" src={amazon} alt="" />
              <img className="w-44 h-16" src={discord} alt="" />
              <img className="w-44 h-14" src={spotify} alt="" />
            </div>

            <div className="text-center space-y-5 flex flex-col justify-center items-center">
              <p className="font-bold text-4xl tracking-wide">Loved by Thousands of Happy Customer</p>
              <p className="text-2xl customers-love">These are the stories of our customers who have visited us with great pleasure.</p>
            </div>

            <div className="flex flex-row space-x-20 p-20 left-72 relative customer-container">

              <div className="flex flex-col border-2 bg-white customer-testi space-y-6 p-5 rounded-xl">

                <div className="flex flex-row space-x-4">
                  <div>
                    <img className="w-14 h-14 rounded-full" src={robert} alt="" />
                  </div>
                  <div className="flex-1">
                    <p className="text-bold text-xl">Viezha Robert</p>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <p>4.5</p>
                    <em className="fas fa-star text-sm text-yellow-300" />
                  </div>
                </div>

                <div>
                  <p className="tracking-wide">
                    &dquo;“Wow... I am very happy to spend my whole day here.
                    the Wi-fi is good, and the coffee and meals tho.
                    I like it here!! Very recommended!&dquo;
                  </p>
                </div>

              </div>
              <div className="flex flex-col border-2 bg-white customer-testi space-y-6 p-5 rounded-xl">

                <div className="flex flex-row space-x-4">
                  <div>
                    <img className="w-14 h-14 rounded-full" src={yessica} alt="" />
                  </div>
                  <div className="flex-1">
                    <p className="text-bold text-xl">Yessica Christy</p>
                    <p>Shanxi, China</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <p>4.5</p>
                    <em className="fas fa-star text-sm text-yellow-300" />
                  </div>
                </div>

                <div>
                  <p className="tracking-wide">
                    “I like it because I like to travel far and still
                    can make my day better just by drinking their Hazelnut Latte&dquo;
                  </p>
                </div>

              </div>
              <div className="flex flex-col border-2 bg-white customer-testi space-y-6 p-5 rounded-xl">

                <div className="flex flex-row space-x-4">
                  <div>
                    <img className="w-14 h-14 rounded-full" src={kim} alt="" />
                  </div>
                  <div className="flex-1">
                    <p className="text-bold text-xl">Kim Young Jou</p>
                    <p>Seoul, South Korea</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <p>4.5</p>
                    <em className="fas fa-star text-sm text-yellow-300" />
                  </div>
                </div>

                <div>
                  <p className="tracking-wide">
                    “This is very unusual for my taste, I haven’t liked coffee before
                    but their coffee is the best! and yup,
                    you have to order the chicken wings, the best in town!&dquo;
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="flex flex-row p-20 relative bottom-48 w-full h-full bg-white">

            <div className="flex-1 flex flex-row space-x-5 items-center pl-72">
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

          <div className="flex flex-row promo-container bg-white rounded-2xl shadow-lg justify-center items-center relative m-auto">

            <div className="space-y-7 p-10">
              <p className="font-bold text-4xl">Check our promo today!</p>
              <p className="text-xl">Let&apos;s see the deals and pick yours!</p>
            </div>
            <div className="pr-10">
              <button type="button" className="w-52 h-16 rounded-xl text-xl primary-btn primary-brown-text font-bold">See Promo</button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
