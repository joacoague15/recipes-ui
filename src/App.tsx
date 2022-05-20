import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RecipeSearcher from "./components/home/RecipeSearcher";
import PriceBreakdown from "./components/price/PriceBreakdown";
import AllRecipeIngredients from "./components/ingredients/AllRecipeIngredients";
import AllCartDisplayed from "./components/cart/AllCartDisplayed";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<RecipeSearcher />} />
            <Route path='/pricing/:id' element={<PriceBreakdown />} />
            <Route path='/ingredients/:id' element={<AllRecipeIngredients />} />
            <Route path='/cart' element={<AllCartDisplayed cartIngredients={['Banana', 'Onions']} />} />
        </Routes>
    </div>
  );
}

export default App;
