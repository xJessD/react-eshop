import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Carousel from './components/Carousel/Carousel';
import Cart from './components/Cart/Cart';
import CoffeePage from './components/CoffeePage/CoffeePage';
import Footer from './components/Footer/Footer';
import CoffeeList from './containers/CoffeeList/CoffeeList';
import Header from './containers/Header/Header';
import CartContext from './context/CartContext';

function App() {

  const slides = [
    {url: '/bg.jpg', title: 'Title'},
    {url: '/slider1.jpg', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'}
  ];

  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart, cartItems, setCartItems]}>
      <BrowserRouter>
      <div className={style.Container}>
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Carousel slides={slides}/>
              <CoffeeList />
            </>
          }></Route>

          <Route path='/products'></Route>

          <Route path='/products/:id' element={<CoffeePage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
