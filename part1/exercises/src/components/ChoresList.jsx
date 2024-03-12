import React from 'react'
import classes from './ChoresList.module.css'

export default function ChoresList () {
   const chores = ["Wash Dishes", "Do Laundry", "Clean Bathrooms"];
   return (
   <div>
      <h3 className = {classes.choresHeading}>Chores</h3>
      <ol>
         <li className={classes.choresText}>{chores[0]}</li>
         <li className={classes.choresText}>{chores[1]}</li>
         <li className={classes.choresText}>{chores[2]}</li>
      </ol>
   </div>
   );
}