import React from 'react';
import { useNavigate } from "react-router-dom";
import Jolof from './Image/Foo1.png';

const MealItem = ({ data }) => {
  console.log(data)
  let navigate = useNavigate();
  return (
    <>
        {
            (!data) ? "Not Found" : data.map(meal => {
              return(
                <div className="card" key={meal.idMeal} onClick={()=>navigate(`/${meal.idMeal}`)}>
                  <img src={meal.strMealThumb} alt=""/>
                  <h3>{meal.strMeal}</h3>
                </div>
              )
            })
        }
    </>
  )
}

export default MealItem;