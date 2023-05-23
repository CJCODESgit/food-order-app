const MealItem = (props) => {
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>{props.description}</div>
            <div>{props.price}</div>
        </li>
    )
}

export default MealItem;