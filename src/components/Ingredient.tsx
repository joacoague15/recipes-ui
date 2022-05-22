import { Iingredient } from "../types";

const Ingredient = (props: Iingredient) => {
    const { price, name, amount, consitency, aisle } = props;

    if (price) {
        return (
            <>
                <h1>Name: {name}</h1>
                <h2>Price: {price}</h2>
            </>
        )
    }

    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Amount: {amount}</h2>
            <h2>Consitency: {consitency}</h2>
            <h2>Aisle: {aisle}</h2>
        </>
    )

}

export default Ingredient;