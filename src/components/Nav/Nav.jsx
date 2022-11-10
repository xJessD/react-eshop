import {NavLink} from 'react-router-dom';
import style from './Nav.module.scss';

const Nav = () => {
  return (
    <nav>
        <ul className={style.Nav}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to="/products">Product</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>

        
      </nav>
  )
}

export default Nav;