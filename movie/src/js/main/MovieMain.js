import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight }from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight }from 'react-icons/ai';
import MovieMainAdContents from "./MovieMainAdContents";
import MovieMainVisualEvent from "./event/MovieMainVisualEvent";
import MovieMainSpecialCinema from "./special/MovieMainSpecialCinema";

import '../../scss/main/MovieMain.scss';

const MovieMain = () => {

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
            <div id="movieMainWrapper">
                
                <div className="main-visual-ad-change-btn-wrapper">
                    <div className="main-visual-ad-change-btn-box" id="beforeBox">
                        <button className="main-visual-ad-change-btn" id="beforeBtn">
                            <BsChevronCompactLeft id="before"/>
                        </button>    
                    </div>

                    <div className="main-visual-ad-change-btn-box" id="afterBox">
                        <button className="main-visual-ad-change-btn" id="afterBtn">
                            <BsChevronCompactRight id="after"/>
                        </button>    
                    </div>
                </div>

                <div className="main-visual-ad-box">

                    <div className="main-visual-ad-header-background"></div>
                    <div className="main-visual-ad-footer-background"></div>

                    <div className="main-visual-ad"></div>

                    <div className="main-visual-ad-contents-wrapper">

                        <div className="main-visual-ad-contents-change-btn-box">
                            <div className="main-visual-ad-contents-change-btn">
                                <AiOutlineLeft id="beforeContents"/>
                            </div>
                            <div className="main-visual-ad-contents-change-btn">
                                <AiOutlineRight id="afterContents"/>
                            </div>
                        </div>

                        <div className="main-background"></div>
                        
                        <div className={ scrollPosition < 160 ? "main-visual-ad-contents-box" : "main-visual-ad-contents-box-sticky"}>
                            <MovieMainAdContents />
                        </div>
                    </div>

                </div>



                <div className={ scrollPosition < 600 ? "main-visual-event-box" : "main-visual-event-box-sticky"}>
                    <div className="main-visual-event">
                        <MovieMainVisualEvent />
                    </div>
                </div>


                <div className="main-visual-special-cinema-box">
                    <div className={ scrollPosition < 1100 ? "main-visual-special-cinema" : "main-visual-special-cinema-sticky"}>
                        <MovieMainSpecialCinema />
                    </div>
                </div>






            </div>
        </>
    );
}

export default MovieMain;