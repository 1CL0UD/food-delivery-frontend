import { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <div className="p-5 flex justify-between items-center">
      <img src={assets.logo} alt="logo" className="w-36" />
      <ul className="navbar-menu flex list-none gap-5 text-gray-900 text-lg">
        <li
          onClick={() => {
            setMenu('home');
          }}
          className={`${menu == 'home' ? 'active' : ''} cursor-pointer`}
        >
          home
        </li>
        <li
          onClick={() => {
            setMenu('menu');
          }}
          className={`${menu == 'menu' ? 'active' : ''} cursor-pointer`}
        >
          menu
        </li>
        <li
          onClick={() => {
            setMenu('mobile-app');
          }}
          className={`${menu == 'mobile-app' ? 'active' : ''} cursor-pointer`}
        >
          mobile apps
        </li>
        <li
          onClick={() => {
            setMenu('contact-us');
          }}
          className={`${menu == 'contact-us' ? 'active' : ''} cursor-pointer`}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
          <img src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-3 min-h-3 bg-orange-600 rounded-full -top-2 -right-2"></div>
        </div>
        <button className="button bg-transparent text-gray-900 border border-solid border-orange-600 py-2 px-8 rounded-full cursor-pointer duration-500 hover:bg-orange-100">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
