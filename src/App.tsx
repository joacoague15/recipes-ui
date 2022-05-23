import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/basicStyle.css';

import RecipeSearcher from "./components/home/RecipeSearcher";
import PriceBreakdown from "./components/price/PriceBreakdown";
import AllRecipeIngredients from "./components/ingredients/AllRecipeIngredients";
import AllCartDisplayed from "./components/cart/AllCartDisplayed";
import { CartIngredientsContext } from "./CartIngredientsContext";
import RedirectionButton from "./components/RedirectionButton";

function App() {
    const [cartIngredients, setCartIngredients] = useState([]);

    return (
    <div className="App">
        <CartIngredientsContext.Provider value={{ cartIngredients, setCartIngredients }}>
            <RedirectionButton redirectTo='/' text='Home' />
            <RedirectionButton redirectTo='/cart' text='Cart' />
            <Routes>
            <Route path='/' element={<RecipeSearcher />} />
            <Route path='/cart' element={<AllCartDisplayed />} />
            <Route path='/pricing/:id' element={<PriceBreakdown />} />
            <Route path='/ingredients/:id' element={<AllRecipeIngredients />} />
        </Routes>
        </CartIngredientsContext.Provider>
    </div>
  );
}

export default App;
