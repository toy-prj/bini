import React from "react";

import '../../../../scss/header/menu/reservation/HeaderReservationSelectAll.scss';

const HeaderReservationSelectAll = () => {

    return(
        <>
            <div id="HeaderReservationSelectAllWrapper">
                <div className="header-reservation-select-all-box">

                    <div className="header-reservation-select-all-area-box">
                        <div className="header-reservation-select-all-area">
                            <p className="header-reservation-select-all-area-text">지역(23)</p>
                        </div>
                    </div>
                    
                    <div className="header-reservation-select-all-detail-area-box">
                        <div className="header-reservation-select-all-detail-area">
                            <p className="header-reservation-select-all-detail-area-text">광주터미널</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default HeaderReservationSelectAll;