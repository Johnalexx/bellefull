import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
var id="";
const Recipe = () => {
    const [meal, changeMeal] = useState(); 
    const { recipeId } = useParams();
    if (recipeId !==" ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
            changeMeal(data.meals[0]);  
        })
    }
    if(meal){
      const strYoutube= meal.strYoutube;
      const str=strYoutube.split("=");
      id=str[str.length-1];
    }
  

    return (
        <>
            {
                (!meal) ? "" : <div className="content">
                    <img src={meal.strMealThumb} alt="" className="mealImgBg"/>
                    <div className="inner-content">
                        <h1>{meal.strMeal}</h1>
                        <h2>{meal.strArea} Food</h2>
                        <h3 className="mealCat">Category: {meal.strCategory}</h3>
                    </div>
                
                    <div className="recipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            <h4>{meal.strIngredient1}:{meal.strMeasure1}</h4>
                            <h4>{meal.strIngredient2}:{meal.strMeasure2}</h4>
                            <h4>{meal.strIngredient3}:{meal.strMeasure3}</h4>
                            <h4>{meal.strIngredient4}:{meal.strMeasure4}</h4>
                            <h4>{meal.strIngredient5}:{meal.strMeasure5}</h4>
                            <h4>{meal.strIngredient6}:{meal.strMeasure6}</h4>
                            <h4>{meal.strIngredient7}:{meal.strMeasure7}</h4>
                            <h4>{meal.strIngredient8}:{meal.strMeasure8}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{meal.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                       
                            {/* setVurl(meal.strYoutube)
                                //const str=meal.strYoutube.split("=");
                                //state=str[str.length-1];
                                //state="hj"    */}
                       
                       
                        <iframe width="
                        100%" height="515" title="recipeVideo"
                            src={`https://www.youtube.com/embed/${id}`}>
                        </iframe>
                    </div>

                </div>
            }

        </>
    )
}
export default Recipe