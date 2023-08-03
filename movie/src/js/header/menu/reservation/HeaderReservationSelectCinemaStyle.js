import React, { useState } from "react";

import '../../../../scss/header/menu/reservation/HeaderReservationSelectCinemaStyle.scss';
import HeaderReservationSelectAll from "./HeaderReservationSelectAll";
import HeaderReservationSelectSpecial from "./HeaderReservationSelectSpecial";

const HeaderReservationSelectCinemaArea = () => {

    const [isOpenSelectAll, setIsOpenSelectAll] = useState(false);
    const [isOpenSelectSpecial, setIsOpenSelectSpecial] = useState(false);

    const clickSelectAll = () => {
        setIsOpenSelectAll(true);
        setIsOpenSelectSpecial(false);
    }
    
    const clickSelectSpecial = () => {
        setIsOpenSelectSpecial(true);
        setIsOpenSelectAll(false);
    }

    return(
        <>

            <div id="headerReservationSelectCinemaWrapper">

                <div className="header-movie-reservation-select-cinema-style-text-box">
                    <p className="header-movie-reservation-select-cinema-style-text">광주터미널</p>
                </div>

                <div className="header-movie-reservation-select-cinema-style-box">
                    <button 
                        className="header-movie-reservation-select-all"
                        type="button"
                        onClick={ clickSelectAll }
                        >
                        <p className="header-movie-reservation-select-text">전체</p>   
                    </button>
                    <button 
                        className="header-movie-reservation-select-special"
                        type="button"
                        onClick={ clickSelectSpecial }
                    >
                        <p className="header-movie-reservation-select-text">스페셜관</p>   
                    </button>
                </div>

                <div className="header-movie-reservation-selected-style-box">
                    { isOpenSelectAll && <HeaderReservationSelectAll /> }
                    { isOpenSelectSpecial && <HeaderReservationSelectSpecial /> }
                </div>
                



            </div>
        </>
    );
}

export default HeaderReservationSelectCinemaArea;