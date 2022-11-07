import { useEffect, useState } from "react";
import { getCoffee } from "../../services/coffee";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    getCoffee().then((coffees) => setCoffees(coffees));
  }, []);

  //console.log(coffees[1]);

  return (
    <div>
      <h2>Hello</h2>
      {coffees.map((coffees) => (
        <>
        <h1>{coffees.name}</h1>
        <img src={coffees.imageUrl} />
        </>
      ))}
    </div>
  );
};

export default CoffeeList;