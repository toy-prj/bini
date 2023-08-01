import React from "react";
import HeaderCinemaMenuList from "./HeaderCinemaMenuList";

import '../../../../scss/header/menu/cinema/HeaderCinemaMenu.scss';

const HeaderCinemaMenu = () => {

    return (
        <>
            <div id="headerCinemaMenuWrapper">

                <ul className="header-cinema-menu">
                    <HeaderCinemaMenuList />
                </ul>

            </div>
        </>
    );
}

export default HeaderCinemaMenu;