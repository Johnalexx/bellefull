import React from 'react';
import Jolof from './Image/Foo1.png';

const MealItem = ({ data }) => {
  console.log(data)
  return (
    <>
        {
            (!data) ? "Not Found" : data.map(meal => {
              return(
                <div className="card">
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