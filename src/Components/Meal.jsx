import React, { useEffect } from 'react';
import { useState } from 'react';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

const Meal=()=> {
    const [url,changeUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [meal,changeMeal]=useState();
    const [show, setShow]=useState(false);
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data);
            changeMeal(data);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        changeUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
    return(
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search your Meal Recipe</h1>
                    <h4>Bruhhh</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" />
                </div>
                <div className="container">
                   { 
                        show ? <MealItem data={meal}/> : "Not Found" 
                   }
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
                </div>
            </div>
        </>
    )
}
export default Meal