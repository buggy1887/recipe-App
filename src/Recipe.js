import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>Cal={calories}</p>
      <img className={style.image} src={image} alt="" />
      <a className={style.urllink} href="{url}">
        Link to recipe
      </a>
    </div>
  );
};

export default Recipe;
