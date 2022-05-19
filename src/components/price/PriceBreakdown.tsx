import prices from "../../hardCodedData/pricing";
import Ingredient from "./Ingredient";

const PriceBreakdown = () => {
    const priceOfRecipe = prices;

    return (
        <div>
            {priceOfRecipe.ingredients.map((ingredient, i) =>
            <div key={i}>
                <Ingredient name={ingredient.name} price={ingredient.price} />
            </div>
            )}
            <h2>Total price: {priceOfRecipe.totalCost}</h2>
        </div>
    )
}

export default PriceBreakdown;