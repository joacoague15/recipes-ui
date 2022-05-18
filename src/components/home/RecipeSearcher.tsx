import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import { IRecipe } from "../types/HomeTypes";
import Recipe from "./recipe/Recipe";

const RecipeSearcher = () => {
    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);

    const [fetchedRecipes, setFetchedRecipes] = useState([]);

    return (
        <div>
            <div>
                <SearchBar label='Carbs' nutrients={carbs} setNutrients={setCarbs} />
                <SearchBar label='Protein' nutrients={protein} setNutrients={setProtein}  />
                <SearchBar label='Fat' nutrients={fat} setNutrients={setFat} />
            </div>
            <div>
                <SearchButton setFetchedRecipes={setFetchedRecipes} />
            </div>
            <div>
                {fetchedRecipes.map((recipe: IRecipe) =>
                    <div key={recipe.id}>
                        <Recipe title={recipe.title} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.fat} image={recipe.image} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecipeSearcher;