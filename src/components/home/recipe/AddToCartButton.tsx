import {useCallback, useContext, useEffect, useState} from "react";
import axios from "axios";
import { Button } from "@mui/material";

import { CartIngredientsContext } from "../../../CartIngredientsContext";
import { IcartButton } from "../../../types";

const AddToCartButton = (props: IcartButton) => {
    const [addingToCart, setAddingToCart] = useState(false);

    const { id } = props;

    const { cartIngredients, setCartIngredients } = useContext(CartIngredientsContext);

    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b481e94a42d048aea4fd333d678b0f76&includeNutrition=false`;

    const deduplicateCartIngredients = useCallback(() => {
        return Array.from(new Set(cartIngredients.map((ingredient: any) => ingredient.name)))
            .map(name => {
                return cartIngredients.find((ingredient: any) => ingredient.name === name)
            })
    }, [cartIngredients]);

    useEffect(() => {
        if (addingToCart) {
            window.localStorage.setItem('cart', JSON.stringify(deduplicateCartIngredients()));
            setAddingToCart(false);
        }
    }, [addingToCart, setAddingToCart, cartIngredients, deduplicateCartIngredients])

    const fetchIngredients = () => {
        axios.get(GET_RECIPE_INGREDIENTS_URL)
            .then(response => {
                setAddingToCart(true);
                setCartIngredients([...cartIngredients, ...response.data.extendedIngredients]);
            })
            .catch(err => console.log(err));
    }

    return <Button onClick={fetchIngredients} variant="contained">Add to cart</Button>
}

export default AddToCartButton;