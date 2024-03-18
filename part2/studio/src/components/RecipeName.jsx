import recipedata from "./recipe.json";

function RecipeName() {
  <h1>{recipedata.name}</h1>
  //return recipedata; // causes error
  return null;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header