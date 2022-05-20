const AllCartDisplayed = (props: any) => {
    return(
        <div>
            {props.cartIngredients.map((ingredient: any, i: number) =>
                <h2 key={i}>{ingredient}</h2>
            )}
        </div>
        )
}

export default AllCartDisplayed;