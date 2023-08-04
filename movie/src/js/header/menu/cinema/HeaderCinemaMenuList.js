import React from "react";

import '../../../../scss/header/menu/cinema/HeaderCinemaMenuList.scss';

const HeaderCinemaMenu = ({  scrollPosition }) => {

    return (
        <>
            <div className={ scrollPosition < 130 ? "header-cinema-menu-list-wrapper" : "header-cinema-menu-list-wrapper_none"}>
                

                <ul className="header-cinema-menu-list-box">

                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">스페셜관</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">서울</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">경기/인천</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">충청/대전</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">전라/광주</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">경북/대구</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">경남/부산/울산</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">강원</p>
                    </li>
                    <li className="header-cinema-menu-list">
                        <p className="header-cinema-menu-list-text">제주</p>
                    </li>

                </ul>

            </div>
        </>
    );
}

export default HeaderCinemaMenu;