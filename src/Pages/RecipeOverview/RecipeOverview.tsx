import React, { useEffect, useState } from "react";
import CardList from "../../Components/CardList";
import { getAllRecipes } from "../../API/RecipeCalls";
import IRecipe from "../../Data/IRecipe";

const RecipeOverview = () => {
  const [recipes, setRecipes] = useState<Record<number | string, IRecipe>>({});

  useEffect(() => {
    const asyncGetAllRecipes = async () => {
      const fetchedRecipes = await getAllRecipes();
      setRecipes(fetchedRecipes);
    };

    asyncGetAllRecipes();
  }, []);

  if (Object.keys(recipes).length === 0) {
    return null;
  }

  return <CardList recipes={recipes} />;
};

export default RecipeOverview;
