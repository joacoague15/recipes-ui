import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Ingredient from "../Ingredient";
import { Iingredient } from "../../types";
import {Typography} from "@mui/material";

const AllRecipeIngredients = () => {
    const [ingredientsData, setIngredientsData] = useState([]);

    const { id } = useParams();
    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b481e94a42d048aea4fd333d678b0f76&includeNutrition=false`;
    
    useEffect(() => {
            axios.get(GET_RECIPE_INGREDIENTS_URL)
                .then(response => {
                    setIngredientsData(response.data.extendedIngredients);
                })
                .catch(err => console.log(err));
        /* eslint-disable */
    }, [])

    return (
        <div>
            <Typography gutterBottom variant="h2" component="div">Ingredients</Typography>
            {ingredientsData.map((ingredient: Iingredient, i) =>
                    <Ingredient key={i} name={ingredient.name} amount={ingredient.amount} consitency={ingredient.consitency} aisle={ingredient.aisle} />
            )}
        </div>
    )
}

export default AllRecipeIngredients;