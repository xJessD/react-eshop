import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { getCoffeeByID } from '../../services/coffee';
import style from './CoffeePage.module.scss';
import { increaseQty, decreaseQty } from '../../services/cart';

const CoffeePage = ({}) => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState("");
  const [cart, setCart] = useContext(CartContext);
  const [variant, setVariant] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getCoffeeByID(id).then((data) => setCoffee(data));
  }, []);

  const handleChange = (e) => {
    const currVariant = e.target.value;
    setVariant(currVariant);
    
    for (const i in coffee.variant) {
      if (coffee.variant[i].weight == currVariant) {
        setIndex(i);
      };
    };

    console.log(coffee.variant[index]['qty']);
  };

  return (
    <>
      { coffee ? (
        <div className={style.CoffeePage}>
          <div className={style.CoffeePage__content}>
            <img src={coffee.imageUrl} />
            <div className={style.CoffeePage__content_info}>

              <div className={style.contentInner}>
                <h2>{coffee.name}</h2>
                <h4> {coffee.roasters}</h4>
                
                <select className={style.select} onChange={handleChange}>
                  {coffee.variant.map((type, index) => 
                  <option a-key={index} key={index}>{type.weight}</option>)}
                </select>


                {coffee.variant[index]['qty'] === 0 ? <div className={style.soldOut}>Sold out</div> : 
                <>
                  <div className={style.currentQ}>Available quantity: {coffee.variant[index]['qty']}</div>

            
                  <button className={style.btn} onClick={() => increaseQty(coffee)}>Add to Cart</button>

                  <button className={style.btn} onClick={() => decreaseQty(coffee)}>Decrease</button>
                </>
                  }
              </div>          
        
            </div>
          </div>         
        </div>
        
      ) : <h2>Loading </h2>
      }
    </>
      
  )
};

export default CoffeePage;