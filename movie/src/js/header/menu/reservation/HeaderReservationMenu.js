import React from "react";

import '../../../../scss/header/menu/reservation/HeaderReservationMenu.scss';

const HeaderReservationMenu = () => {

    return(
        <>
            {/* 예매하기 */}
            <div id="headerReservationWrapper">
                <ul className="header-reservation-menu">
                    
                    <li className="header-reservation-menu-list">
                        <p className="header-reservation-menu-list-text">예매하기</p>
                    </li>
                    <li className="header-reservation-menu-list">
                        <p className="header-reservation-menu-list-text">상영시간표</p>
                    </li>
                    <li className="header-reservation-menu-list">
                        <p className="header-reservation-menu-list-text">할인안내</p>
                    </li>

                </ul>
            </div>
        </>
    );
}

export default HeaderReservationMenu;