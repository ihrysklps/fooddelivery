import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlueBox from './components/BlueBox';
import MenuCategories from './components/MenuCategories';
import TopDishes from './components/TopDishes';
import FullMenu from './components/FullMenu';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import './App.css';

function App() {
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <BlueBox onViewMenuClick={scrollToMenu} />
              <div className="main-content">
                <MenuCategories />
                <TopDishes />
                <div ref={menuRef} id="menu-section">
                  <FullMenu />
                </div>
              </div>
            </>
          } />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 