import React from 'react';
import CocktailItem from './CocktailItem';
import Spinner from '../UI/Spinner';

const CocktailGrid = ({ items, isLoading }) => {
  return isLoading ? 
    (<Spinner />) : 
      (<section className="cards">
        {items.map(item => (
          <CocktailItem key={item.idDrink} item={item} />
        ))}
      </section>);
};

export default CocktailGrid;