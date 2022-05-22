import { Iinformation } from "../../../types";

const Information = (props: Iinformation) => {
    const { title, image, carbs, fat, protein, calories } = props;

    return (
        <>
            <h1>{title}</h1>
            <img src={image} alt={image} />
            <h2>Calories: {calories}</h2>
            <h2>Carbs: {carbs}</h2>
            <h2>Fat: {fat}</h2>
            <h2>Protein: {protein}</h2>
        </>
    )
}

export default Information;