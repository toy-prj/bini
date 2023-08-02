import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight }from 'react-icons/bs';

import '../../scss/main/MovieMain.scss';

const MovieMain = () => {

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

                    <div className="main-visual-ad"></div>

                    <div className="main-visual-ad-contents-box">
                        <div className="main-visual-ad-contents"></div>
                    </div>

                </div>












            </div>
        </>
    );
}

export default MovieMain;