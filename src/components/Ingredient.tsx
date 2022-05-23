import { Card } from "@mui/material";

import { Iingredient } from "../types";

const Ingredient = (props: Iingredient) => {
    const { price, name, amount, consitency, aisle } = props;

    if (price) {
        return (
            <Card sx={{ minWidth: 275 }}>
                <h1>Name: {name}</h1>
                <h2>Price: {price}</h2>
            </Card>
        )
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <h1>Name: {name}</h1>
            <h2>Amount: {amount}</h2>
            <h2>Consitency: {consitency}</h2>
            <h2>Aisle: {aisle}</h2>
        </Card>
    )

}

export default Ingredient;