import { ISearchBarProps } from "../types/HomeTypes";

const SearchBar = (props: ISearchBarProps) => {
    const { label, setNutrients } = props;

    return (
        <label>
            {label}
            <input onChange={e => setNutrients(e.target.value)} type="text" name="name" />
        </label>
    )

}

export default SearchBar;