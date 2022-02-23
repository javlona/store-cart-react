import React, {useState, createContext} from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import StoreContext from './Context/Context.Store'

function App() {
  return ( 
    <StoreContext>
      <Header />
      <Hero />
      <div className="body">
        <Main />
        <Cart />
      </div>
    </StoreContext>
  );
}

export default App;
