import axios from 'axios';

import { ISearchButton } from "../../types";
import {useEffect, useState} from "react";

const SearchButton = (props: ISearchButton) => {
    const { setFetchedRecipes, carbs, fat, protein } = props;

    let params = {};

    const SEARCH_BY_NUTRIENTS_URL = 'https://api.spoonacular.com/recipes/findByNutrients?apiKey=b481e94a42d048aea4fd333d678b0f76';

    const setCarbsParam = (nutrientAmount: number) => {
        if (nutrientAmount > 0)
            params = {...params, maxCarbs: nutrientAmount  }
    }

    const setFatParams = (nutrientAmount: number) => {
        if (nutrientAmount > 0)
            params = {...params, maxFat: nutrientAmount  }
    }

    const setProteinParams = (nutrientAmount: number) => {
        if (nutrientAmount > 0)
            params = {...params, maxProtein: nutrientAmount  }
    }

    const fetchRecipes = () => {

        setCarbsParam(carbs);
        setFatParams(fat);
        setProteinParams(protein);

        axios.get(SEARCH_BY_NUTRIENTS_URL, {
            params
        })
            .then(response => {
                console.log(response.data);
                setFetchedRecipes(response.data);
            });
    }

    return (
        <button onClick={fetchRecipes}>Find recipes</button>
    )
}

export default SearchButton;