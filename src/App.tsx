import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RecipeSearcher from "./components/home/RecipeSearcher";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<RecipeSearcher />} />
        </Routes>
    </div>
  );
}

export default App;
