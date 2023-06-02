import React from "react";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

   const cartCtx = useContext(CartContext);

   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
   }, 0);

   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

   useEffect (() => {
    setBtnIsHighlighted(true);
   }, [])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;