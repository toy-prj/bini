import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import MovieMainVisualEventMain from "./MovieMainVisualEventMain";

import '../../../scss/main/event/MovieMainVisualEvent.scss';

const MovieMainVisualEvent = () => {

    return(
        <>
            <div id="mainVisualEventWrapper">

                <div className="main-visual-event-header">
                    <div className="main-visual-event-header-text" id="title">
                        <p>이벤트</p>
                    </div>
                    <Link 
                        to={'/contents/event'} 
                        className="main-visual-event-header-text" id="more"
                    >
                        <p className="more-text">
                            더보기
                            <p id="rightIcons"><AiOutlineRight /></p>
                        </p>
                    </Link>
                </div>
                
                <div className="main-visual-event-main">
                    <MovieMainVisualEventMain />
                </div>







            </div>
        </>
    );
}

export default MovieMainVisualEvent;