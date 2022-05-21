import { CartIngredientsContext } from "../../CartIngredientsContext";

import { useContext } from "react";

const AllCartDisplayed = () => {
    const { cartIngredients } = useContext(CartIngredientsContext);

    return (
        <div>
            {cartIngredients.map((ingredient: any, i: number) =>
                <h2 key={i}>{ingredient.name}</h2>
            )}
        </div>
    )
}

export default AllCartDisplayed;