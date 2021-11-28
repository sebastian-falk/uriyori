import React from "react";
import Card from "./Card";
import IRecipe from "../Data/IRecipe";
import Recipe from "../Data/Recipe";

const CardList = ({
  recipes,
}: {
  recipes: Record<number | string, IRecipe>;
}) => {
  if (Object.keys(recipes).length === 0) {
    return null;
  }

  return (
    <>
      {Object.keys(recipes).map((rKey: string) => {
        let r: Recipe = recipes[rKey];
        return (
          <Card
            title={r.title}
            imgSrc={r.imgSrc}
            text={r.description}
            itemUrl={`recipe/${r.id}`}
          />
        );
      })}
    </>
  );
};

export default CardList;
