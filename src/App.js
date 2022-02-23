import React, {useState} from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="body">
        <Main />
        <Cart />
      </div>
    </div>
  );
}

export default App;
