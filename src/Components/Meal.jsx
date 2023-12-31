import React, { useEffect } from 'react';
import { useState } from 'react';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

const Meal=()=> {
    const [url,changeUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [meal,changeMeal]=useState();
    const [show, setShow]=useState(false);
    const [search, setSearch]=useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            changeMeal(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        changeUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>{
        if(evt.key=="Enter"){
            changeUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    return(
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search your Meal Recipe</h1>
                    <h4>Bruhhh</h4>
                    <h3 className="infoo">Please search Meal (some functions not working yet)</h3>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" 
                    onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
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