import IRecipe from "./IRecipe";
import SubRecipe from "./SubRecipe";

export default class Recipe implements IRecipe {
  public id: number;
  public title: string;
  public subRecipes: SubRecipe[];
  public imgSrc?: string;
  public description?: string;

  public constructor(
    id: number,
    title: string,
    subRecipes: SubRecipe[],
    imgSrc?: string,
    description?: string
  ) {
    this.id = id;
    this.title = title;
    this.subRecipes = subRecipes;
    this.imgSrc = imgSrc;
    this.description = description;
  }
}
