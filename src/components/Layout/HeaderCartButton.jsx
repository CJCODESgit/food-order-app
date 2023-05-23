import React from "react";
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props => {
    return (
        <button>
            <span>
                <CartIcon />
            </span>
            <span></span>
            <span></span>
        </button>
    )
}
export default HeaderCartButton;