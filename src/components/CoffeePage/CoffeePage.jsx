import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCoffeeByID } from '../../services/coffee';

const CoffeePage = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState("");

  useEffect(() => {
    getCoffeeByID(id).then((data) => setCoffee(data));
  }, []);

  
  return (
    <>
      { coffee ? (
        <div>
          <img src={coffee.imageUrl} />
          <h4>{coffee.roasters}</h4>
          <h3>{coffee.name}</h3>
          
        </div>
        
      ) : <h2>Loading </h2>
      }
    </>
      
  )
};

export default CoffeePage;