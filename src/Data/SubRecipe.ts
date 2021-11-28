import ISubRecipe from "./ISubRecipe";

export default class SubRecipe implements ISubRecipe {
  public id: number;
  public title?: string;
  public ingredients: string[];
  public description: string;

  public constructor(
    id: number,
    ingredients: string[],
    description: string,
    title?: string
  ) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.description = description;
  }
}
