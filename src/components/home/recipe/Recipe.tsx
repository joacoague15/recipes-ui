import Information from "./Information";
import PricingButton from "./PricingButton";
import IngredientsButton from "./IngredientsButton";
import AddToCartButton from "./AddToCartButton";
import { IRecipe } from "../../types/HomeTypes";

const Recipe = (props: IRecipe) => {
    const { title, carbs, fat, protein, image } = props;

    return(
        <div>
            <Information title={title} carbs={carbs} fat={fat} protein={protein} image={image} />
            <PricingButton />
            <IngredientsButton />
            <AddToCartButton />
        </div>
    )
}

export default Recipe;