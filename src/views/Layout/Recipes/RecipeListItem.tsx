// RecipeListItem.jsx
import React from "react";
import {
  RecipesArticleWrapper,
  RecipesTitleWrapper,
  RecipesContentWrapper,
} from "./Recipes.styles";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
  return (
    <RecipesArticleWrapper>
      <RecipesTitleWrapper>
        <h3>{recipe.title}</h3>
        {recipe.ingredients && (
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </RecipesTitleWrapper>
      <RecipesContentWrapper>
        <p>{recipe.instructions}</p>
        {/* Dodaj kod do obsługi obrazków, jeśli potrzebujesz */}
      </RecipesContentWrapper>
        <Link to={`recipe/${recipe.id}`}>Podgląd...</Link>
      {/* @ts-expect-error */}
      {/* Dodaj przycisk, jeśli potrzebujesz */}
    </RecipesArticleWrapper>
  );
};

export default RecipeListItem;
