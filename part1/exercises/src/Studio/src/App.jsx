
import './App.css'
import RecipeDescription from './components/Description.jsx/Description';
import RecipeIngredients from './components/Description.jsx/Ingredients';
import RecipePhoto from './components/Description.jsx/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock" />
      <div>
        <RecipePhoto />
        <div>
         <RecipeDescription />
         <RecipeIngredients />
        </div>
     </div>
    </div>
      );
}

export default App;
