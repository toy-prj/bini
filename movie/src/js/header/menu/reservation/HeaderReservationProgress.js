import React from "react";

import '../../../../scss/header/menu/reservation/HeaderReservationProgress.scss';

const HeaderReservationProgress = () => {

    return(
        <>
            <div id="headerReservationProgressWrapper">

                <div className="header-movie-progress-box">
                    <div 
                        className="header-movie-progress" 
                        id="showTime"
                    >
                        <p className="header-movie-progress-text">01</p>
                        <p className="header-movie-progress-text">상영 시간</p>
                    </div>
                </div>
                <div className="header-movie-progress-box">
                    <div 
                        className="header-movie-progress" 
                        id="peopleSeats"
                    >
                        <p className="header-movie-progress-text">02</p>
                        <p className="header-movie-progress-text">인원/좌석</p>
                    </div>
                </div>
                <div className="header-movie-progress-box">
                    <div 
                        className="header-movie-progress" 
                        id="payment"
                    >
                        <p className="header-movie-progress-text">03</p>
                        <p className="header-movie-progress-text">결제</p>
                    </div>
                </div>
                <div className="header-movie-progress-box">
                    <div 
                        className="header-movie-progress" 
                        id="paymentCompleted"
                    >
                        <p className="header-movie-progress-text">04</p>
                        <p className="header-movie-progress-text">결제완료</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HeaderReservationProgress;