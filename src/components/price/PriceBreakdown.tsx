import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Ingredient from "../Ingredient";
import { IingredientPriceBreakdown } from "../../types";
import {Typography} from "@mui/material";

const PriceBreakdown = () => {
    const { id } = useParams();
    const GET_PRICE_BREAKDOWN_URL = `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=b481e94a42d048aea4fd333d678b0f76`;

    const [ ingredientsBreakdown, setIngredientsBreakdown ] = useState({ ingredients: [], totalCost: 0 });

    useEffect(() => {
        axios.get(GET_PRICE_BREAKDOWN_URL)
            .then(response => {
                setIngredientsBreakdown(response.data);
            })
            .catch(err => console.log(err));
    }, [GET_PRICE_BREAKDOWN_URL])

        return (
            <div>
                <Typography gutterBottom variant="h2" component="div">Price breakdown</Typography>
                {ingredientsBreakdown.ingredients.map((ingredient: IingredientPriceBreakdown, i: number) =>
                        <Ingredient key={i} name={ingredient.name} price={ingredient.price} />
                )}
                <Typography gutterBottom variant="h5" component="div">Total cost: {ingredientsBreakdown.totalCost}</Typography>
            </div>
        )
}

export default PriceBreakdown;