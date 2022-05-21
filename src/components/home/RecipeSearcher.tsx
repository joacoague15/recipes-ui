import { useState } from "react";
import {useNavigate} from "react-router-dom";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import { IRecipe } from "../../types";
import Recipe from "./recipe/Recipe";

const RecipeSearcher = () => {
    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);

    const [fetchedRecipes, setFetchedRecipes] = useState([]);

    const navigate = useNavigate();

    const redirectToCart = () => {
        navigate('/cart');
    }

    return (
        <div>
            <div>
                <SearchBar label='Max carbs' nutrients={carbs} setNutrients={setCarbs} />
                <SearchBar label='Max rotein' nutrients={protein} setNutrients={setProtein}  />
                <SearchBar label='Max Fat' nutrients={fat} setNutrients={setFat} />
                <button onClick={redirectToCart}>Go to Cart</button>
            </div>
            <div>
                <SearchButton setFetchedRecipes={setFetchedRecipes} carbs={carbs} protein={protein} fat={fat} />
            </div>
            <div>
                {fetchedRecipes.map((recipe: IRecipe) =>
                    <div key={recipe.id}>
                        <Recipe id={recipe.id} title={recipe.title} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.fat} calories={recipe.calories} image={recipe.image}  />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecipeSearcher;