import React from 'react';
import style from "./recipe.module.css";
const Recipie =({title,calories,image,ingredients})=>{
    return (
        <div className="recipie">
            <h1 className={style.recipe}>{title}</h1>
            <p>Calories: {calories}</p>
            <img className={style.foodimage}src={image} alt="foodimage"/>
            <ol>
                {
                ingredients.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}</ol>
        </div>
    );

}




export default Recipie;