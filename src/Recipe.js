import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className = {style.heading}> {title} </h1>

      <ol className = {style.lists}>
        
        {ingredients.map((ingredients) => (
          <li> {ingredients.text} </li>
        ))}
        
      </ol>

      <p className={style.calories}> Total calories = {calories} </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
