import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import './App.scss';

import account from './icons/account.svg';
import bag from './icons/shopping_bag.svg';
import menu from './icons/menu.svg';


function App() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  function sizeChangeHandler() {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  }

  useEffect(() => {
    window.addEventListener('resize', sizeChangeHandler);
    return () => {
      window.removeEventListener('resize', sizeChangeHandler);
    }
  });

  
  return (
    <>
      <nav id='main-nav'>
        <ul className='left'>
          <li>Rhythmnik</li>
          <li>Men</li>
          <li>Women</li>
          <li>Children</li>
        </ul>
        <ul className='right'>
          <li><img src={menu} alt='shopping bag'/></li>
          <li><img src={bag} alt='shopping bag'/></li>
          <li><img src={account} alt='account'/></li>
        </ul>
      </nav>
      
      <Outlet/>
    </>
  );
}

export default App;
