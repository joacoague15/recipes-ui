import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { Iinformation } from "../../../types";

const Information = (props: Iinformation) => {
    const { title, image, carbs, fat, protein, calories } = props;

    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                        <h4>Calories: {calories}</h4>
                        <h4>Carbs: {carbs}</h4>
                        <h4>Fat: {fat}</h4>
                        <h4>Protein: {protein}</h4>
                </CardContent>
            </Card>
    )
}

export default Information;