import recipedata from "./recipe.json";

function RecipeImage() {
  <img className="recipeImage" src={recipedata.recipeImage} alt={recipedata.name}/>
   return
   <div>
    {recipedata.recipeImage}
   </div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 