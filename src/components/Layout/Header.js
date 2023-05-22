import React from "react";

import mealsImage from '../../assets/header.png'

const Header = props => {
    return (
        <>
            <header>
                <h1>CJFOODS</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage} />
            </div>
        </>
    )
};

export default Header;