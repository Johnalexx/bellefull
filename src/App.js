import React from 'react';
import Recipe from './Components/Recipe';
import Meal from './Components/Meal';
import './Components/style.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Routes>
          <Route  path="/" element={<Meal/>}/>
          <Route exact path="/:recipeId" element={<Recipe/>}/>
        </Routes>
    </div>
  );
}

export default App