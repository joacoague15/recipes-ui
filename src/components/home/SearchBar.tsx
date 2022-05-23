import { TextField } from "@mui/material";
import '../../styles/basicStyle.css';

import { ISearchBarProps } from "../../types";

const SearchBar = (props: ISearchBarProps) => {
    const { label, setNutrients } = props;

    return <TextField onChange={e => setNutrients(e.target.value)} id="nutrient-input" label={label} variant="standard" />

}

export default SearchBar;