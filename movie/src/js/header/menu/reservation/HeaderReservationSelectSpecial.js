import React from "react";

import '../../../../scss/header/menu/reservation/HeaderReservationSelectSpecial.scss';

const HeaderReservationSelectSpecial = () => {

    return(
        <>
            <div id="HeaderReservationSelectSpecialWrapper">
                <div className="header-reservation-select-special-box">

                    <div className="header-reservation-select-special-area-box">
                        <div className="header-reservation-select-special-area">
                            <p className="header-reservation-select-special-area-text">샤롯데</p>
                        </div>
                    </div>
                    
                    <div className="header-reservation-select-special-detail-area-box">
                        <div className="header-reservation-select-special-detail-area">
                            <p className="header-reservation-select-special-detail-area-text">월드타워</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default HeaderReservationSelectSpecial;