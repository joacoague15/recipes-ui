import Ingredient from "../price/Ingredient";
import { Iingredient } from "../../types/HomeTypes";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const AllRecipeIngredients = () => {
    const { id } = useParams();
    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}}/information?includeNutrition=false`;

    const [ingredientsData, setIngredientsData] = useState([]);

    useEffect(() => {
        console.log('Fetching ingredients...')

    }, []);

    return (
        <div>
            {ingredientsData.map((ingredient: Iingredient, i) =>
                    <Ingredient key={i} name={ingredient.name} amount={ingredient.amount} consitency={ingredient.consitency} aisle={ingredient.aisle} />
            )}
        </div>
    )
}

export default AllRecipeIngredients;