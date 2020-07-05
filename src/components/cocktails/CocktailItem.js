import React from 'react';

const CocktailItem = ({ item }) => {
  function createIngredientsString(item) {
    let ingredientsString = "";
    for (let i=1; i<=15; i++) {
      if (item['strIngredient' + i]) {
        ingredientsString += item['strIngredient' + i] + " (" + item['strMeasure' + i] + ") "
      }
    }
    return ingredientsString;
  }
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.strDrinkThumb} alt='A thumbnail of the cocktail' />
        </div>
        <div className='card-back'>
          <h1>{item.strDrink}</h1>
          <ul>
            <li>
              <strong>Category:</strong> {item.strCategory} ({item.strAlcoholic})
            </li>
            <li>
              <strong>Ingredients:</strong> {createIngredientsString(item)}
            </li>
            <li>
              <strong>Instructions:</strong> {item.strInstructions}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default CocktailItem;