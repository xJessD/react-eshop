import Nav from "../../components/Nav/Nav";
import Title from "../../components/Title/Title";
import style from './Header.module.scss';
const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.Header__content}>
        <Title />
        <Nav />
      </div>      
    </header>
  );
};

export default Header;