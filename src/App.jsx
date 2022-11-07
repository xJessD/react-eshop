import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Carousel from './components/Carousel/Carousel';
import Header from './containers/Header/Header';

function App() {

  const slides = [
    {url: '/bg.jpg', title: 'Title'},
    {url: '', title: 'Title'},
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
          <Carousel slides={slides}/>
        }></Route>
        <Route path='/porducts'></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
