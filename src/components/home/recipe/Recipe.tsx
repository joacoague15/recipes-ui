import Information from "./Information";
import AddToCartButton from "./AddToCartButton";
import RedirectionButton from "../../RedirectionButton";
import { IRecipe } from "../../../types";

const Recipe = (props: IRecipe) => {
    const { id, title, carbs, fat, protein, calories, image } = props;

    return(
        <div>
            <Information title={title} carbs={carbs} fat={fat} protein={protein} calories={calories} image={image} />
            <RedirectionButton redirectTo={`/pricing/${id}`} text='See price' />
            <RedirectionButton redirectTo={`/ingredients/${id}`} text='See ingredients' />
            <AddToCartButton id={id} />
        </div>
    )
}

export default Recipe;