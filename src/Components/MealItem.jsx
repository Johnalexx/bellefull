import React from 'react'
import Jolof from './Image/Foo1.png';

export const MealItem = () => {
  return (
    <>
        <div className="card">
            <img src={Jolof} alt=""/>
            <h3>Spicy Jollof Rice</h3>
        </div>
    </>
  )

}

export default MealItem;