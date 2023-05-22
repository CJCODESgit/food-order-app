import React from "react";

// importing image locally with react
import mealsImage from '../../assets/header.png'
import classes from './Header.module.css'

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>.</h1>
                <button className={classes.button}>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="CJfoods banner with fish and white rice" />
            </div>
        </>
    )
};

export default Header;