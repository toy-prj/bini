import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import HeaderReservationMenu from './reservation/HeaderReservationMenu';
import HeaderMovieMenu from './movie/HeaderMovieMenu';
import HeaderCinemaMenu from "./cinema/HeaderCinemaMenuList";
import HeaderEventMenu from "./event/HeaderEventMenu";
import HeaderStoreMenu from "./store/HeaderStoreMenu";

import '../../../scss/header/menu/HeaderMenu.scss';

const HeaderMenu = () => {
    
    const [isHoveredReservation, setIsHoveredReservation] = useState(false); // 예매
    const [isHoveredMovie, setIsHoveredMovie] = useState(false); // 영화
    const [isHoveredCinema, setIsHoveredCinema] = useState(false); // 영화관
    const [isHoveredEvent, setIsHoveredEvent] = useState(false); // 이벤트
    const [isHoveredStore, setIsHoveredStore] = useState(false); // 스토어

    // 예매 hover
    const reservationMouseEnter = () => {
        setIsHoveredReservation(true);
        setIsHoveredMovie(false);
        setIsHoveredCinema(false);
        setIsHoveredEvent(false);
        setIsHoveredStore(false);
    }

    const reservationMouseLeave = () => {
        setIsHoveredReservation(false);
    }
    
    // 영화 hover 
    const movieMouseEnter = () => {
        setIsHoveredMovie(true);
        setIsHoveredReservation(false);
        setIsHoveredCinema(false);
        setIsHoveredEvent(false);
        setIsHoveredStore(false);
    }

    const movieMouseLeave = () => {
        setIsHoveredMovie(false);
    }
    
    // 영화관 hover
    const cinemaMouseEnter = () => {
        setIsHoveredCinema(true);
        setIsHoveredMovie(false);
        setIsHoveredReservation(false);
        setIsHoveredEvent(false);
        setIsHoveredStore(false);
    }

    const cinemaMouseLeave = () => {
        setIsHoveredCinema(false);
    }
    
    // 이벤트 hover
    const eventMouseEnter = () => {
        setIsHoveredEvent(true);
        setIsHoveredCinema(false);
        setIsHoveredMovie(false);
        setIsHoveredReservation(false);
        setIsHoveredStore(false);
    }

    const eventMouseLeave = () => {
        setIsHoveredEvent(false);
    }
    
    // 스토어 hover
    const storeMouseEnter = () => {
        setIsHoveredStore(true);
        setIsHoveredEvent(false);
        setIsHoveredCinema(false);
        setIsHoveredMovie(false);
        setIsHoveredReservation(false);
    }

    const storeMouseLeave = () => {
        setIsHoveredStore(false);
    }

    return(
        <>
            <div id="headerMenuWrapper">
                
                {/* header 아래쪽 메뉴 list */}
                        {/* 예매 */}
                        <Link 
                            to={'/contents/reservation'} 
                            className="header-bottom-menu-list"
                            onMouseEnter={ reservationMouseEnter }
                            onMouseLeave={ reservationMouseLeave }
                        >
                            { isHoveredReservation && <HeaderReservationMenu /> }
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Reservation"
                            >예매</p>
                        </Link>

                        {/* 영화 */}
                        <Link 
                            to={'/contents/movie'} 
                            className="header-bottom-menu-list"
                            onMouseEnter={ movieMouseEnter }
                            onMouseLeave={ movieMouseLeave }
                            >
                            { isHoveredMovie && <HeaderMovieMenu /> }
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Movie"
                            >영화</p>
                        </Link>

                        {/* 영화관 */}
                        <Link 
                            to={'/contents/cinema'} 
                            className="header-bottom-menu-list"
                            onMouseEnter={ cinemaMouseEnter }
                            onMouseLeave={ cinemaMouseLeave }
                            >
                            { isHoveredCinema && <HeaderCinemaMenu /> }
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Cinema"
                            >영화관</p>
                        </Link>

                        {/* 이벤트 */}
                        <Link 
                            to={'/contents/event'} 
                            className="header-bottom-menu-list"
                            onMouseEnter={ eventMouseEnter }
                            onMouseLeave={ eventMouseLeave }
                        >
                            { isHoveredEvent && <HeaderEventMenu /> }
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Event"
                            >이벤트</p>
                        </Link>

                        {/* 스토어 */}
                        <Link 
                            to={'/contents/store'} 
                            className="header-bottom-menu-list"
                            onMouseEnter={ storeMouseEnter }
                            onMouseLeave={ storeMouseLeave }
                        >
                            { isHoveredStore && <HeaderStoreMenu /> }
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Store"
                            >스토어</p>
                        </Link>

                    {/* header 아래쪽 sub menu */}
                    <ul className="header-bottom-sub-menu">

                        {/* 바로 예매 */}
                        <li className="header-bottom-menu-quick-reservation-box">
                            {/* TODO : 여기에 컴포넌트 호출 */}
                            <button 
                                className="header-bottom-menu-quick-reservation"
                                id="quickReservation"
                            >
                                <p className="header-bottom-menu-quick-reservation-text">
                                    바로 예매
                                </p>
                            </button>
                        </li>

                        {/* 전체 메뉴 보기 버튼 */}
                        <li className="header-bottom-menu-view-all-btn-box">
                            <button 
                                className="header-bottom-menu-view-all-btn"
                                id="viewAllBtn"
                                ><GiHamburgerMenu /></button>
                        </li>

                    </ul>
            </div>
        </>
    );
}

export default HeaderMenu;