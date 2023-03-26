import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import './App.scss';

import account from './icons/account.svg';
import bag from './icons/shopping_bag.svg';
import menu from './icons/menu.svg';


function App() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', sizeChangeHandler);
    return () => {
      window.removeEventListener('resize', sizeChangeHandler);
    }
  });

  function sizeChangeHandler() {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  }

  function mouseEnterHandler(e: String) {
    setShowCategories(true);
  }
  
  function mouseLeaveHandler() {
    setShowCategories(false)
  }

  

  
  return (
    <>
      <nav id='main-nav'>
        <div className='top-bar'>
          <ul className='left'>
            <li>Rhythmnik</li>
            <li onMouseEnter={() => mouseEnterHandler("men")} onMouseLeave={mouseLeaveHandler}>Men</li>
            <li onMouseEnter={() => mouseEnterHandler("women")} onMouseLeave={mouseLeaveHandler}>Women</li>
            <li onMouseEnter={() => mouseEnterHandler("children")} onMouseLeave={mouseLeaveHandler}>Children</li>
          </ul>
          <ul className='right'>
            <li><img src={menu} alt='shopping bag'/></li>
            <li><img src={bag} alt='shopping bag'/></li>
            <li><img src={account} alt='account'/></li>
          </ul>
        </div>

        <div className={`categories ${showCategories? 'show' : ''}`}>
          <div>
            <ul>
              <h3>Lorem Ipsum</h3>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
            </ul>
            <ul>
              <h3>Lorem Ipsum</h3>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
            </ul>
            <ul>
              <h3>Lorem Ipsum</h3>
              <li>Dolor</li>
              <li>Dolor</li>
              <li>Dolor</li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Outlet/>
    </>
  );
}

export default App;
