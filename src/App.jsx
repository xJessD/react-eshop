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
import ProductsPage from './pages/Products/ProductsPage';

function App() {

  // const slides = [
  //   {url: '/bg.jpg', title: 'Title'},
  //   {url: '/slider1.jpg', title: 'Title'},
  //   {url: '', title: 'Title'},
  //   {url: '', title: 'Title'},
  //   {url: '', title: 'Title'}
  // ];

  const slides = [
    {url: 'https://paradoxroasters.com/wp-content/uploads/2019/07/Paper_Moon_Large_web.jpg', id: 'WfmFnTDNreevRYvqrhQm'},
    {url: 'https://cdn.shopify.com/s/files/1/0570/1828/6270/products/CatsPjs_Web_900x.jpg', id: 'xvdWD0W3SZhLgddLsOSg'},
    {url: 'https://paradoxroasters.com/wp-content/uploads/2019/07/Purple_Rain_Large_web.jpg', id: 'o2mMU7ldmZVly8GJY9mJ'},
    {url: 'https://cdn.shopify.com/s/files/1/0533/3781/7252/products/peru_1_2_900x.jpg', id:'4D9JmezMB4P40hHmMnWh' }
]

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
            </>
          }></Route>

          <Route path='/products' element={<ProductsPage />}></Route>

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
