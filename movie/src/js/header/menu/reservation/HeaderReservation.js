import React from "react";
import HeaderReservationProgress from "./HeaderReservationProgress";
import HeaderReservationSelectCinemaStyle from "./HeaderReservationSelectCinemaStyle";

import '../../../../scss/header/menu/reservation/HeaderReservation.scss';

const HeaderReservation = ({ scrollPosition }) => {

    return(
        <>
            <div className={ scrollPosition < 130 ? "header-movie-reservation-wrapper" : "header-movie-reservation-wrapper-sticky"}>
                <div className="header-movie-reservation-box">

                    <div className="header-movie-reservation-progress-box">
                        <HeaderReservationProgress />
                    </div>

                    <div className="header-movie-reservation-info-box">
                        <div className="header-movie-reservation-select-cinema-style-info-box">
                            <HeaderReservationSelectCinemaStyle />
                        </div>
                    </div>













                </div>
            </div>
        </>
    );
}

export default HeaderReservation;