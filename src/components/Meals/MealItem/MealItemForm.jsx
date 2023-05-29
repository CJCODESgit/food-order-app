import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref= {amountInputRef}
                label="Amount" 
                input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '0',
                max: '10',
                step: '1',
                defaultValue: '0'
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;