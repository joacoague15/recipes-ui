export interface ISearchBarProps {
    label: string;
    nutrients: number;
    setNutrients: Function;
}

export interface ISearchButton {
    setFetchedRecipes: Function;
}

export interface IRecipe {
    calories?: string,
    carbs: string,
    fat: string,
    id?: number,
    image: string,
    imageType?: string,
    protein: string,
    title: string
}

export interface Iinformation {
    title: string,
    carbs: string,
    fat: string,
    protein: string,
    image: string
}