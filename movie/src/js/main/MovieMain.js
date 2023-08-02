import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight }from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight }from 'react-icons/ai';

import '../../scss/main/MovieMain.scss';
import MovieMainAdContents from "./MovieMainAdContents";

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
                        
                        <div className="main-visual-ad-contents-box">
                            <MovieMainAdContents />
                        </div>
                    </div>

                </div>












            </div>
        </>
    );
}

export default MovieMain;