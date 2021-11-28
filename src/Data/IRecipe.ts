import ISubRecipe from "./ISubRecipe";

export default interface IRecipe {
  id: number;
  title: string;
  subRecipes: ISubRecipe[];
  imgSrc?: string;
  description?: string;
}
