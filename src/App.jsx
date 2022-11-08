import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Carousel from './components/Carousel/Carousel';
import CoffeePage from './components/CoffeePage/CoffeePage';
import Footer from './components/Footer/Footer';
import CoffeeList from './containers/CoffeeList/CoffeeList';
import Header from './containers/Header/Header';

function App() {

  const slides = [
    {url: '/bg.jpg', title: 'Title'},
    {url: '/slider1.jpg', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'}
  ]

  return (
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
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
