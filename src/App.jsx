import { useState } from 'react'
import style from './App.module.scss';
import Carousel from './components/Carousel/Carousel';
import Header from './containers/Header/Header';
import img1 from './assets/images/bg.jpg';

function App() {
  const [count, setCount] = useState(0);

  const slides = [
    {url: '/bg.jpg', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'},
    {url: '', title: 'Title'}
  ]

  return (
    <div className={style.Container}>
      <Header />
      <Carousel slides={slides}/>
    </div>
  )
}

export default App
