import Ingredient from "../Ingredient";
import { Iingredient } from "../../types/HomeTypes";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const AllRecipeIngredients = () => {
    const { id } = useParams();
    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b481e94a42d048aea4fd333d678b0f76&includeNutrition=false`;

    const [ingredientsData, setIngredientsData] = useState([]);

    useEffect(() => {
            axios.get(GET_RECIPE_INGREDIENTS_URL)
                .then(response => {
                    setIngredientsData(response.data.extendedIngredients);
                });
    }, [])

    return (
        <div>
            {ingredientsData.map((ingredient: Iingredient, i) =>
                    <Ingredient key={i} name={ingredient.name} amount={ingredient.amount} consitency={ingredient.consitency} aisle={ingredient.aisle} />
            )}
        </div>
    )
}

export default AllRecipeIngredients;