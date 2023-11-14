import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "Monkey Bread";
let recipeShortDesc = "This pull-apart treat is sticky and sweet!";

const RecipeAuthor = () => {
let authorLink = "https://www.thepioneerwoman.com/food-cooking/recipes/a10982/monkey-bread/";
let authorPhoto = "https://hips.hearstapps.com/hmg-prod/images/unknown-2-642af098be42c.jpeg?crop=1xw:0.7608308605341246xh;center,top&resize=640:*";
let authorName = "Leah Perez";

return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>The Pioneer Woman</a> 
       </div>
    </div>
 );
};

class RecipeDescription extends React.Component {
 render (){
    return (
    <div> 
     <div>
      <h1>{recipeTitle}</h1>
      <p>{recipeShortDesc}</p>
   </div>
   <RecipeAuthor />
  </div>
    );
 }   
}

export default RecipeDescription;