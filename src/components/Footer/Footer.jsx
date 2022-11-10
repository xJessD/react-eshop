import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.Footer__content}>
      Created by <a href="https://github.com/xJessD">Jess</a> ☕
      </div>
      
    </div>
  );
};

export default Footer;