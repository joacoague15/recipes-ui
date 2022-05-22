import axios from 'axios';

import { ISearchButton } from "../../types";

const SearchButton = (props: ISearchButton) => {
    const { setFetchedRecipes, carbs, fat, protein } = props;

    const SEARCH_BY_NUTRIENTS_URL = 'https://api.spoonacular.com/recipes/findByNutrients?apiKey=b481e94a42d048aea4fd333d678b0f76';

    const noValidInput = !carbs && !fat && !protein;

    let params = {};

    const setCarbsParam = () => {
        if (carbs > 0)
            params = {...params, maxCarbs: carbs  }
    }

    const setFatParams = () => {
        if (fat > 0)
            params = {...params, maxFat: fat  }
    }

    const setProteinParams = () => {
        if (protein > 0)
            params = {...params, maxProtein: protein  }
    }

    const fetchRecipes = () => {
        setCarbsParam();
        setFatParams();
        setProteinParams();

        axios.get(SEARCH_BY_NUTRIENTS_URL, {
            params
        })
            .then(response => {
                setFetchedRecipes(response.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <button disabled={noValidInput} onClick={fetchRecipes}>Find recipes</button>
    )
}

export default SearchButton;