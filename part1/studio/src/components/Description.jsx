import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.delish.com/author/17077/lena-abraham/";
    let authorPhoto = "https://hips.hearstapps.com/rover/profile_photos/846121db-9644-42e0-a4fd-cf5d105bfdf9_1576786748.file?fill=1:1&resize=120:*";
    let authorName = "Lena Abraham";
    return (
        <div className="{styles.recipeAuthorBlock}">
            <img src={authorPhoto} alt = "Image of Delish Contributor Lena Abraham" classname={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Delish: Lena Abraham</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
            <div>
                <h1>One-Pan Cheesy Sausage Gnocchi</h1>
                <p>A super-flavorful dish with minimal prep and active cooking time.</p>
            </div>
            <RecipeAuthor />
        </div>
        );
    }
}

export default RecipeDescription;