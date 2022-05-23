import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import Recipe from "./recipe/Recipe";
import { IRecipe } from "../../types";

const RecipeSearcher = () => {
    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);

    const [fetchedRecipes, setFetchedRecipes] = useState([]);
    const [isFetchingRecipes, setIsFetchingRecipes] = useState(false);

    useEffect(() => {
        const storedRecipeData:any = window.localStorage.getItem('recipes')
        setFetchedRecipes(JSON.parse(storedRecipeData))
    }, [])

    useEffect(() => {
        if (isFetchingRecipes) {
            window.localStorage.setItem('recipes', JSON.stringify(fetchedRecipes))
            setIsFetchingRecipes(false);
        }
    }, [fetchedRecipes, isFetchingRecipes, setIsFetchingRecipes])

    return (
        <div>
            <div className='center'>
                <SearchBar label='Max carbs' nutrients={carbs} setNutrients={setCarbs} />
                <SearchBar label='Max protein' nutrients={protein} setNutrients={setProtein}  />
                <SearchBar label='Max fat' nutrients={fat} setNutrients={setFat} />
            </div>
            <div className='center'>
                <SearchButton setFetchedRecipes={setFetchedRecipes} setIsFetchingRecipes={setIsFetchingRecipes} carbs={carbs} protein={protein} fat={fat} />
            </div>
            <div>
                {fetchedRecipes.map((recipe: IRecipe) =>
                    <div className='center' key={recipe.id}>
                        <Recipe id={recipe.id} title={recipe.title} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.fat} calories={recipe.calories} image={recipe.image}  />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecipeSearcher;