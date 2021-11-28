import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllRecipes } from "../../API/RecipeCalls";
import Recipe from "../../Data/Recipe";
import SubRecipe from "../../Data/SubRecipe";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState<Record<number | string, Recipe>>({});
  const [recipe, setRecipe] = useState<Recipe>();

  const { recipeId } = useParams<string>();

  useEffect(() => {
    // TODO fetch from the useReducer instead of making call here again
    const asyncGetAllRecipes = async () => {
      const fetchedRecipes: Record<number | string, Recipe> =
        await getAllRecipes();
      setRecipes(fetchedRecipes);
      setRecipe(fetchedRecipes[recipeId as string]);
    };
    asyncGetAllRecipes();
  }, [recipeId]);

  if (Object.keys(recipes).length === 0) {
    return null;
  }

  if (recipe && recipe?.id) {
    return (
      <div>
        <section>
          <h2>{recipe?.title}</h2>
          <img src={recipe?.imgSrc} alt={recipe?.title} />
          {recipe?.description && <div>{recipe?.description}</div>}
        </section>
        {recipe?.subRecipes.map((sr: SubRecipe) => (
          <section>
            {sr.title && <h3>{sr.title}</h3>}
            <div>
              {sr.ingredients.map((i: string) => (
                <ol>
                  <li>{i}</li>
                </ol>
              ))}
            </div>
            <div>
              <p>{sr.description}</p>
            </div>
          </section>
        ))}
      </div>
    );
  }

  return null;
};

export default RecipeDetails;
