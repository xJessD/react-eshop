import style from './CoffeeCard.module.scss';
import { NavLink } from 'react-router-dom';

const CoffeeCard = ({data}) => {
  return (
    <div className={style.CoffeeCard}>
      <NavLink to={`products/${data.id}`}>
        <img src={data.imageUrl} />
        <h3>{data.name}</h3>  
        <p>From ${data.variant[0].price}</p>  
      </NavLink>  
    </div>
  )
};

export default CoffeeCard;