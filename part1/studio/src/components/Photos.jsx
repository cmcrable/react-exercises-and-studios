import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <img src="https://hips.hearstapps.com/hmg-prod/images/delish-211105-one-pan-sausage-gnocchi-007-ab-web-1637553340.jpg?crop=0.663xw:0.690xh;0.160xw,0.198xh&resize=1200:*" 
        style = {{height: 500}} alt="Recipe Photo" className={styles.imageUpdates} />
    )
}