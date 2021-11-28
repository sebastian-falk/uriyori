import IRecipe from "../Data/IRecipe";
import Recipe from "../Data/Recipe";
import SubRecipe from "../Data/SubRecipe";

export async function getAllRecipes(): Promise<
  Record<number | string, IRecipe>
> {
  // TODO call firestore
  let description: string = "Description text";
  const ingredients: string[] = [
    "Mia",
    "Garlic",
    "Water",
    "Minced meat",
    "Soy soauce",
    "Sesamy oil",
    "Salt",
    "Peppar",
  ];
  let subRecipe: SubRecipe = new SubRecipe(1, ingredients, description);

  var recipe = new Recipe(
    1,
    "Miagog",
    [subRecipe],
    undefined,
    "Yummie soup for birthdays and every other day !"
  );

  // TODO change into dictionary before returning
  let recipeRecord: Record<number, IRecipe> = {
    [recipe.id]: recipe,
  };

  return recipeRecord;
}
