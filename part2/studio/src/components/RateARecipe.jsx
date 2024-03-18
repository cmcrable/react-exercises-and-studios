import recipedata from "./recipe.json";

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe({rating}) {

  function GiveRating() {
    return rating <=5 && rating >=1 ? <h3>{stars[rating -1]}</h3> : null;

  }

  return GiveRating();
}


export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
