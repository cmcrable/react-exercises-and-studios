import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredients = ['1/2 lb. fresh Italian sausage', '2 tbsp. extra-virgin olive oil', '1 (17.5-oz.) package fresh gnocchi', '2 c. jarred marinara', '1 c. water'];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}