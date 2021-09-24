import './CocktailCard.css'

import { useEffect, useState } from "react"
import axios from 'axios';

const CocktailCard = () => {
  // get the cocktail data?
  const [cocktailState, setCocktailState] = useState({
    loading: false,
    cocktail: null,
  });

  useEffect(async () => {
    const result = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    setCocktailState({ loading: true, cocktail: result.data });

  }, [setCocktailState]
  )

  if (!cocktailState.loading) {
    return (
    <h4>Loading Data</h4>
  )
}
  console.log(cocktailState)


  const drinkInfo = cocktailState?.cocktail.drinks[0]

  return (
    <div className="cocktail-card">
      <h3>{drinkInfo.strDrink}</h3>
      <img src={drinkInfo.strDrinkThumb} alt="" />
      <ul>
        <li>{ drinkInfo.strIngredient1&& drinkInfo.strIngredient1 }</li>
        <li>{ drinkInfo.strIngredient2&& drinkInfo.strIngredient2 }</li>
        <li>{ drinkInfo.strIngredient3&& drinkInfo.strIngredient3 }</li>
        <li>{ drinkInfo.strIngredient4&& drinkInfo.strIngredient4 }</li>
        <li>{ drinkInfo.strIngredient5&& drinkInfo.strIngredient5 }</li>
        <li>{ drinkInfo.strIngredient6&& drinkInfo.strIngredient6 }</li>
        <li>{ drinkInfo.strIngredient7&& drinkInfo.strIngredient7 }</li>
        <li>{ drinkInfo.strIngredient8&& drinkInfo.strIngredient8 }</li>
      </ul>
      <p>
        {drinkInfo.strInstructions}
      </p>
    </div>
  )
}

export default CocktailCard