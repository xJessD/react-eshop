import Nav from "../../components/Nav/Nav";
import Title from "../../components/Title/Title";
import style from './Header.module.scss';
const Header = () => {
  return (
    <header className={style.Header}>
      <Title />
      <Nav />
    </header>
  );
};

export default Header;