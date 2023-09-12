import React from "react";
import HeaderMenu from "./HeaderMenu";

import '../../../scss/header/menu/HeaderMenuBar.scss';

const HeaderMenuBar = ({ scrollPosition }) => {

    return(
        <>
            {/* <div className={ scrollPosition < 130 ? "header-menu-bar-wrapper" : "header-menu-bar-wrapper-none"}> */}
            <div className="header-menu-bar-wrapper">
                <div className="header-menu-bar-box">
                    <HeaderMenu />
                </div>
            </div>
        </>
    );
}

export default HeaderMenuBar;