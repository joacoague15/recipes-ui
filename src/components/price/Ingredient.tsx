import { Iingredient } from "../../types/HomeTypes";

const Ingredient = (props: Iingredient) => {
    if (props.price) {
        return (
            <>
                <h1>Name: {props.name}</h1>
                <h2>Price: {props.price}</h2>
            </>
        )
    }

    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Amount: {props.amount}</h2>
            <h2>Consitency: {props.consitency}</h2>
            <h2>Aisle: {props.aisle}</h2>
        </>
    )

}

export default Ingredient;