import React from "react";
import HeaderCartButton from "./HeaderCartButton";

// importing image locally with react
import mealsImage from '../../assets/header.png'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>.</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="CJfoods banner with fish and white rice" />
            </div>
        </>
    )
};

export default Header;