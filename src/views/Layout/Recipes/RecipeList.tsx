import RecipeListItem from "./RecipeListItem";
import { RecipesListWrapper } from "./Recipes.styles";
const RecipeList = () => {
  const recipes = [
    {
      id: 1,
      title: "Pasta Carbonara",
      description: "Klasyczna włoska pasta z jajkiem, boczkiem i parmezanem.",
      ingredients: ["makaron", "jajko", "boczek", "parmezan"],
      instructions:
        "Gotuj makaron, smaż boczek, wymieszaj z jajkiem i parmezanem.",
    },
    {
      id: 2,
      title: "Sałatka Cezar",
      description:
        "Świeża sałatka z kurczakiem, parmezanem i sosem czosnkowym.",
      ingredients: ["sałata", "kurczak", "parmezan", "sos czosnkowy"],
      instructions: "Zrób sos, wymieszaj z sałatą, kurczakiem i parmezanem.",
    },
    {
      id: 3,
      title: "Kurczak w sosie pieczarkowym",
      description: "Soczysty kurczak w aromatycznym sosie pieczarkowym.",
      ingredients: ["filet z kurczaka", "pieczarki", "śmietana", "cebula"],
      instructions:
        "Usmaż kurczaka, dodaj pokrojone pieczarki, cebulę, podlej śmietaną.",
    },
    {
      id: 4,
      title: "Tiramisu",
      description: "Klasyczne włoskie tiramisu z kawą i mascarpone.",
      ingredients: ["jajka", "cukier", "kawa", "mascarpone"],
      instructions:
        "Ubij jajka z cukrem, dodaj mascarpone, przygotuj kawę, maczaj biszkopty.",
    },
    {
      id: 5,
      title: "Ryż z warzywami",
      description: "Prosta i zdrowa potrawa z ryżem i świeżymi warzywami.",
      ingredients: ["ryż", "marchew", "groszek", "papryka"],
      instructions: "Gotuj ryż, podsmaż warzywa, wymieszaj.",
    },
    
    // Dodaj więcej przepisów według potrzeb
  ];

  return (
    <RecipesListWrapper>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </RecipesListWrapper>
  );
};

export default RecipeList;
