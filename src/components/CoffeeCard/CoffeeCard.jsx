import style from './CoffeeCard.module.scss';
import { NavLink } from 'react-router-dom';

const CoffeeCard = ({data}) => {
  return (
    <div className={style.CoffeeCard}>
      <NavLink to={`${data.id}`}>
        <img src={data.imageUrl} />
        <div className={style.CoffeeCard__content}>
          <h3>{data.name}</h3>  
          <h4> {data.roasters}</h4>
          <p>From ${data.variant[0].price}</p>  
        </div>
        
        
      </NavLink>  
    </div>
  )
};

export default CoffeeCard;