import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, img, ingredients}) => {
    return(
<div className={style.recipe}> 
    <h2 >{title}</h2>
    <p>{(Math.round(calories * 100) / 100).toFixed(2)} cal.</p>
    <img className={style.image} src={img} alt=""/>
    <ol>
        {ingredients.map(ingredients =>(
            <li>{ingredients.text}</li>
        ))}
    </ol>
</div>
    );
}

export default Recipe;