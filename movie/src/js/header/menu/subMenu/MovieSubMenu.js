import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import '../../../../scss/header/menu/subMenu/MovieSubMenu.scss';

const MovieSubMenu = ({ viewAllMenu }) => {

    return(
        <>
            <div id="movieSubMenuWrapper">
                <div className="movie-sub-menu-box">

                    {/* 바로 예매 */}
                    <div className="header-bottom-menu-quick-reservation-box">
                        <Link 
                            to={'/contents/reservation'} 
                            className="header-bottom-menu-quick-reservation"
                            id="quickReservation"
                            >
                            <p className="header-bottom-menu-quick-reservation-text">
                                바로 예매
                            </p>
                        </Link>
                    </div>

                    {/* 전체 메뉴 보기 버튼 */}
                    <div className="header-bottom-menu-view-all-btn-box">
                        <button 
                            className="header-bottom-menu-view-all-btn"
                            id="viewAllBtn"
                            onClick={ viewAllMenu }
                            ><GiHamburgerMenu /></button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieSubMenu;