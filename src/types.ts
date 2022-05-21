export interface ISearchBarProps {
    label: string;
    nutrients: number;
    setNutrients: Function;
}

export interface ISearchButton {
    setFetchedRecipes: Function;
    carbs: number;
    fat: number;
    protein: number;
}

export interface IRecipe {
    id: number;
    title: string;
    calories: number;
    carbs: string;
    fat: string;
    image: string;
    imageType?: string;
    protein: string;
}

export interface Iinformation {
    title: string;
    calories: number;
    carbs: string;
    fat: string;
    protein: string;
    image: string;
}

export interface Iingredient {
    name: string;
    price?: number;
    amount?: number;
    consitency?: string;
    aisle?: string;
    totalCost?: number;
}

export interface Iredirection {
    redirectTo: string;
    text: string;
}

export interface IingredientPriceBreakdown {
    ingredients: [];
    name: string;
    price: number;
    totalCost: number;
}