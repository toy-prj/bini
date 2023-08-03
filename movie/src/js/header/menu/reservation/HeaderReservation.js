import React from "react";

import '../../../../scss/header/menu/reservation/HeaderReservation.scss';
import HeaderReservationProgress from "./HeaderReservationProgress";

const HeaderReservation = () => {

    return(
        <>
            <div id="headerMovieReservationWrapper">
                <div className="header-movie-reservation-box">

                    <div className="header-movie-reservation-progress-box">
                        <HeaderReservationProgress />
                    </div>

                    













                </div>
            </div>
        </>
    );
}

export default HeaderReservation;