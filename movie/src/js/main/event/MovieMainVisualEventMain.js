import React from "react";

import '../../../scss/main/event/MovieMainVisualEventMain.scss';

const MovieMainVisualEventMain = () => {

    return(
        <>
            <div id="movieMainVisualEventMainWrapper">
                <div className="movie-main-visual-event-main-box">

                    <div className="movie-main-visual-event-left-box">
                        <div className="movie-main-visual-event-top-box">

                            <div className="movie-main-visual-event-top-list-box" id="firstEventBox">
                                <div className="movie-main-visual-event-top-list" id="firstEvent"></div>
                            </div>
                            <div className="movie-main-visual-event-top-list-box" id="secondEventBox">
                                <div className="movie-main-visual-event-top-list" id="secondEvent"></div>
                            </div>
                            <div className="movie-main-visual-event-top-list-box" id="thirdEventBox">
                                <div className="movie-main-visual-event-top-list" id="thirdEvent"></div>
                            </div>
                            
                        </div>

                        <div className="movie-main-visual-event-bottom-box">

                            <div className="movie-main-visual-event-bottom-list-box" id="bottomFirstEventBox">
                                <div className="movie-main-visual-event-bottom-list" id="bottomFirstEvent"></div>
                            </div>
                            <div className="movie-main-visual-event-bottom-list-box" id="bottomSecondEventBox">
                                <div className="movie-main-visual-event-bottom-list" id="bottomSecondEvent"></div>
                            </div>

                        </div>
                    </div>

                    <div className="movie-main-visual-event-right-box">

                        <div className="movie-main-visual-event-side-box">
                            <div className="movie-main-visual-event-side"></div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </>
    );
}

export default MovieMainVisualEventMain;