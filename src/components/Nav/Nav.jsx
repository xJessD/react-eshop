import style from './Nav.module.scss';

const Nav = () => {
  return (
    <nav>
        <ul className={style.Nav}>
          <li><a href=''>Home</a></li>
          <li><a href=''>Product</a></li>
        </ul>
      </nav>
  )
}

export default Nav;