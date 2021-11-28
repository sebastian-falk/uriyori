import React from "react";
import { Routes, Route } from "react-router";

import RecipeOverview from "./Pages/RecipeOverview/RecipeOverview";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import NoMatch from "./Pages/NoMatch/NoMatch";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeOverview />} />
      <Route path="/recipe" element={<RecipeOverview />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      <Route path="/recipe/add" element={<AddRecipe />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
