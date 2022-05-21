import {useContext, useEffect} from "react";

import { CartIngredientsContext } from "../../../CartIngredientsContext";
import axios from "axios";


const AddToCartButton = (props: any) => {
    const { id } = props;

    const { cartIngredients, setCartIngredients } = useContext(CartIngredientsContext);

    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b481e94a42d048aea4fd333d678b0f76&includeNutrition=false`;

    const fetchIngredients = () => {
        axios.get(GET_RECIPE_INGREDIENTS_URL)
            .then(response => {
                setCartIngredients([...cartIngredients, ...response.data.extendedIngredients]);
            });
    }

    return <button onClick={fetchIngredients}>Add to cart</button>
}

export default AddToCartButton;