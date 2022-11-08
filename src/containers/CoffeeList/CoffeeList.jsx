import { useEffect, useState } from "react";
import { getCoffee } from "../../services/coffee";
import style from './CoffeeList.module.scss';
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    getCoffee().then((coffees) => setCoffees(coffees));
  }, []);

  return (
    <div className={style.CoffeeList}>
      <div className={style.CoffeeList__content}>
        {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} data={coffee}/>
      ))}
      </div>
    </div>
  );
};

export default CoffeeList;