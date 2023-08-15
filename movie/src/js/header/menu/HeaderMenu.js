import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderReservationMenu from './reservation/HeaderReservationMenu';
import HeaderReservation from './reservation/HeaderReservation';
import HeaderMovieMenu from './movie/HeaderMovieMenu';
import HeaderCinemaMenu from "./cinema/HeaderCinemaMenuList";
import HeaderEventMenu from "./event/HeaderEventMenu";
import HeaderStoreMenu from "./store/HeaderStoreMenu";
import MovieViewAllMenu from "./subMenu/MovieViewAllMenu";
import MovieSubMenu from "./subMenu/MovieSubMenu";

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

    // 전체 메뉴 버튼
    const [isOpenViewAllMenu, setIsOpenViewAllMenu] = useState(false);

    const viewAllMenu = () => {
        setIsOpenViewAllMenu(true);
    }

    // 예매하기
    const [isOpenReservation, setIsOpenReservation] = useState(false);
    
    const clickReservation = () => {
        setIsOpenReservation(true);
    }

    // sticky header 
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });



    return(
        <>
            { isOpenViewAllMenu && <MovieViewAllMenu scrollPosition={ scrollPosition }/> }
            { isOpenReservation && <HeaderReservation scrollPosition={ scrollPosition }/> }

            <div className={scrollPosition < 130 ? "header_menu_wrapper" : "sticky_header_bottom_menu"}>
                <div className="header-bottom-menu">


                        {/* header 아래쪽 메뉴 list */}
                        {/* 예매 */}
                        <Link 
                            to={'/contents/reservation'} 
                            className="header-bottom-menu-list"
                            onMouseEnter={ reservationMouseEnter }
                            onMouseLeave={ reservationMouseLeave }
                            onClick={ clickReservation }
                            >
                            { isHoveredReservation && <HeaderReservationMenu scrollPosition={ scrollPosition }/> }
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
                            { isHoveredMovie && <HeaderMovieMenu scrollPosition={ scrollPosition }/> }
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
                            { isHoveredCinema && <HeaderCinemaMenu scrollPosition={ scrollPosition }/> }
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
                            { isHoveredEvent && <HeaderEventMenu scrollPosition={ scrollPosition }/> }
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
                            { isHoveredStore && <HeaderStoreMenu scrollPosition={ scrollPosition }/> }
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Store"
                                >스토어</p>
                        </Link>
                    </div>
                
                {/* header 아래쪽 sub menu */}
                <div className="header-bottom-sub-menu">
                    <MovieSubMenu 
                        viewAllMenu={ viewAllMenu } 
                        scrollPosition={ scrollPosition }
                        clickReservation={ clickReservation }
                    />
                </div>

            </div>
        </>
    );
}

export default HeaderMenu;