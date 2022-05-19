import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import { IRecipe } from "../../types/HomeTypes";
import Recipe from "./recipe/Recipe";

const RecipeSearcher = () => {
    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);

    const [fetchedRecipes, setFetchedRecipes] = useState([]);

    return (
        <div>
            <div>
                <SearchBar label='Max carbs' nutrients={carbs} setNutrients={setCarbs} />
                <SearchBar label='Max rotein' nutrients={protein} setNutrients={setProtein}  />
                <SearchBar label='Max Fat' nutrients={fat} setNutrients={setFat} />
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