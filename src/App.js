import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/UI/Header';
import Search from './components/UI/Search';
import CocktailGrid from './components/cocktails/CocktailGrid';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {   
    const getItems = async () => {
      let drinkArr = [];
      let result;

      if (query) {
        result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
        console.log(result.data.drinks)
        drinkArr = [...result.data.drinks];
      } else {
        for (let i=0; i<12; i++) {
          result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
          drinkArr.push(result.data.drinks[0]);
        }
      }
      
      setItems(drinkArr);
      setIsLoading(false);
    }

    getItems();
    
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={ (value) => setQuery(value) } />
      <CocktailGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
