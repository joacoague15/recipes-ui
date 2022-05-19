import Information from "./Information";
import AddToCartButton from "./AddToCartButton";
import { IRecipe } from "../../../types/HomeTypes";
import RedirectionButton from "../../RedirectionButton";

const Recipe = (props: IRecipe) => {
    const { id, title, carbs, fat, protein, calories, image } = props;

    return(
        <div>
            <Information title={title} carbs={carbs} fat={fat} protein={protein} calories={calories} image={image} />
            <RedirectionButton redirectTo={`/pricing/${id}`} text='See price' />
            <RedirectionButton redirectTo={`/ingredients/${id}`} text='See ingredients' />
            <AddToCartButton />
        </div>
    )
}

export default Recipe;