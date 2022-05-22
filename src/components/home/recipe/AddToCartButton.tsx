import { useContext } from "react";
import axios from "axios";

import { CartIngredientsContext } from "../../../CartIngredientsContext";
import { IcartButton } from "../../../types";


const AddToCartButton = (props: IcartButton) => {
    const { id } = props;

    const { cartIngredients, setCartIngredients } = useContext(CartIngredientsContext);

    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b481e94a42d048aea4fd333d678b0f76&includeNutrition=false`;

    const deduplicateCartIngredients = () => {
        return Array.from(new Set(cartIngredients.map((ingredient: any) => ingredient.name)))
            .map(name => {
                return cartIngredients.find((ingredient: any) => ingredient.name === name)
            })
    }

    const saveInLocalStorage = () => {
        window.localStorage.setItem('cart', JSON.stringify(deduplicateCartIngredients()));
    }

    const fetchIngredients = () => {
        axios.get(GET_RECIPE_INGREDIENTS_URL)
            .then(response => {
                setCartIngredients([...cartIngredients, ...response.data.extendedIngredients]);
            })
            .then(() => { saveInLocalStorage() }
            )
            .catch(err => console.log(err));
    }

    return <button onClick={fetchIngredients}>Add to cart</button>
}

export default AddToCartButton;