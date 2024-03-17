import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Support from './components/Support/Support';
import Accessories from './components/Accessories/Accessories';
import Shipping from './components/Shipping/Shipping';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <div className='body-principal'>
        {/* navMenu */}
        <nav className='navMenu-principal'>
          <h1 className='title-navMenu-principal'>LogicNest System</h1>

          <ul className='keyNavMenu-navMenu-principal'>
            <li className='key-navMenu-principal'>Shop</li>
            <li className='key-navMenu-principal'>Accessories</li>
            <li className='key-navMenu-principal'>Shipping</li>
            <li className='key-navMenu-principal'>About</li>
            <li className='key-navMenu-principal'>Contact</li>
          </ul>

          <ul className='icnNavMenu-navMenu-principal'>
            <li className='icn-navMenu-principal'>
              <img src="/principalWebsite/1frame/foodCar.png" alt="" />
            </li>
            <li className='icn-navMenu-principal'>
              <img src="/principalWebsite/1frame/logOut.png" alt="" />
            </li>
          </ul>
        </nav>

        {/* main */}
        <main className='main-principal'>
          <div className='ghostPc-container-main-principal'>
            <img className='ghostPc-main-principal' src="/principalWebsite/1frame/kratos.png" alt="" />
          </div>

          <div className='welcome-principal'>
            <p className='p1'>
              <span className='title1-p-welcome-principal'>Our</span> <span className='title2-p-welcome-principal'>Best</span>
            </p>
            <p className='p2'>
              <span className='title3-p-welcome-principal'>Collections</span> <span className='title4-p-welcome-principal'>For</span> <span className='title5-p-welcome-principal'>You</span>
            </p>
            <p className='subtitle-p-welcome-principal'>Transforming Ideas into Technologies, Uniting Ingenuity in the Nest of Logic</p>
            <button className='getStarted-main-principal'>Get started</button>
          </div>

          <div className='ghost-container-main-principal'>
            <img className='ghost-main-principal' src="/principalWebsite/1frame/ghost.png" alt="" />
          </div>
        </main>
      </div>

      {/* about us and services */}
      <div>
        <About />
      </div>

      {/* shop */}
      <div>
        <Shop />
      </div>

      {/* support */}
      <div>
        <Support />
      </div>

      {/* accessories */}
      <div>
        <Accessories />
      </div>

      {/* shipping */}
      <div>
        <Shipping />
      </div>

      {/* brands */}
      <div>
        <Brands />
      </div>

      {/* contact */}
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;