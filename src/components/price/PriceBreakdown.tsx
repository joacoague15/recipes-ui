import Ingredient from "../Ingredient";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IingredientPriceBreakdown } from "../../types";

const PriceBreakdown = () => {
    const { id } = useParams();
    const GET_PRICE_BREAKDOWN_URL = `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=b481e94a42d048aea4fd333d678b0f76`;

    const [ ingredientsBreakdown, setIngredientsBreakdown ] = useState({ ingredients: [], totalCost: 0 });

    useEffect(() => {
        axios.get(GET_PRICE_BREAKDOWN_URL)
            .then(response => {
                setIngredientsBreakdown(response.data);
            });
    }, [GET_PRICE_BREAKDOWN_URL])

        return (
            <div>
                {ingredientsBreakdown.ingredients.map((ingredient: IingredientPriceBreakdown, i: number) =>
                    <div key={i}>
                        <Ingredient name={ingredient.name} price={ingredient.price} />
                    </div>
                )}
                <h2>{ingredientsBreakdown.totalCost}</h2>
            </div>
        )
}

export default PriceBreakdown;