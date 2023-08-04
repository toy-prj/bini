import React from "react";

import '../../../../scss/header/menu/store/HeaderStoreMenu.scss';

const HeaderStoreMenu = ({ scrollPosition }) => {

    return(
        <>
        <div className={ scrollPosition < 130 ? "header-store-menu-wrapper" : "header-store-menu-wrapper_none"}>
            
            <ul className="header-store-menu">
                
                <li className="header-store-menu-list">
                    <p className="header-store-menu-list-text">베스트</p>
                </li>
                <li className="header-store-menu-list">
                    <p className="header-store-menu-list-text">관람권</p>
                </li>
                <li className="header-store-menu-list">
                    <p className="header-store-menu-list-text">스낵음료</p>
                </li>
                <li className="header-store-menu-list">
                    <p className="header-store-menu-list-text">포토카드</p>
                </li>

            </ul>
        </div>
        </>
    );
}

export default HeaderStoreMenu;