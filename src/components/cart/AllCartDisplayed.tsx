import { useContext, useEffect } from "react";
import { Card, Typography } from '@mui/material';

import { CartIngredientsContext } from "../../CartIngredientsContext";

const AllCartDisplayed = () => {
    const { cartIngredients, setCartIngredients } = useContext(CartIngredientsContext);

    useEffect(() => {
        const storedRecipeData:any= window.localStorage.getItem('cart')
        setCartIngredients(JSON.parse(storedRecipeData))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Typography gutterBottom variant="h2" component="div">Cart</Typography>
            {cartIngredients && cartIngredients.map((ingredient: any, i: number) =>
                <Card key={i}>
                    <h2>{ingredient.name}</h2>
                </Card>
            )}
        </div>
    )
}

export default AllCartDisplayed;