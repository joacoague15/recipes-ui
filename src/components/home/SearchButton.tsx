import recipes from "../../hardCodedData/recipes";
import { ISearchButton } from "../types/HomeTypes";

const SearchButton = (props: ISearchButton) => {
    const { setFetchedRecipes } = props;

    const fetchRecipes = () => {
        setFetchedRecipes(recipes);
    }

    return (
        <button onClick={fetchRecipes}>Find recipes</button>
    )
}

export default SearchButton;