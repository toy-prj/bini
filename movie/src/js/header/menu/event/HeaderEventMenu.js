import React from "react";

import '../../../../scss/header/menu/event/HeaderEventMenu.scss';

const HeaderEventMenu = () => {

    return(
        <>
        <div id="headerEventMenuWrapper">
            <ul className="header-event-menu">
                
                <li className="header-event-menu-list">
                    <p className="header-event-menu-list-text">영화</p>
                </li>
                <li className="header-event-menu-list">
                    <p className="header-event-menu-list-text">제휴할인</p>
                </li>
                <li className="header-event-menu-list">
                    <p className="header-event-menu-list-text">HOT</p>
                </li>

            </ul>
        </div>
        </>
    );
}

export default HeaderEventMenu;