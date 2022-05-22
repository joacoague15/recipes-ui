import {useContext, useEffect} from "react";

import {CartIngredientsContext} from "../../CartIngredientsContext";

const AllCartDisplayed = () => {
    const { cartIngredients, setCartIngredients } = useContext(CartIngredientsContext);

    useEffect(() => {
        const storedRecipeData:any= window.localStorage.getItem('cart')
        setCartIngredients(JSON.parse(storedRecipeData))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {cartIngredients.map((ingredient: any, i: number) =>
                <h2 key={i}>{ingredient.name}</h2>
            )}
        </div>
    )
}

export default AllCartDisplayed;