import React, { useState } from "react";
import MovieMainSuite from "./cinema/MovieMainSuite";
import MovieMainLivingRoom from "./cinema/MovieMainLivingRoom";
import MovieMain4DX from "./cinema/MovieMain4DX";
import MovieMainChef from "./cinema/MovieMainChef";

import '../../../scss/main/special/MovieMainSpecialCinemaMain.scss';

const MovieMainSpecialCinemaMain = () => {

    const [isSuiteHoveredList, setIsSuiteHoveredList] = useState(true);
    const [isLivingRoomHoveredList, setIsLivingRoomHoveredList] = useState(false);
    const [is4DXHoveredList, setIs4DXHoveredList] = useState(false);
    const [isChefHoveredList, setIsChefHoveredList] = useState(false);

    // Suite
    const isSuiteMouseEnter = () => {
        setIsSuiteHoveredList(true);
        setIsLivingRoomHoveredList(false);
        setIs4DXHoveredList(false);
        setIsChefHoveredList(false);
    }

    // LivingRoom
    const isLivingRoomMouseEnter = () => {
        setIsLivingRoomHoveredList(true);
        setIsSuiteHoveredList(false);
        setIs4DXHoveredList(false);
        setIsChefHoveredList(false);
    }
    
    // 4DX
    const is4DXMouseEnter = () => {
        setIs4DXHoveredList(true);
        setIsSuiteHoveredList(false);
        setIsLivingRoomHoveredList(false);
        setIsChefHoveredList(false);
    }
    
    // Chef
    const isChefMouseEnter = () => {
        setIsChefHoveredList(true);
        setIsSuiteHoveredList(false);
        setIsLivingRoomHoveredList(false);
        setIs4DXHoveredList(false);
    }
    
    
    
    
    
    
    return(
        <>
            <div className="movie-main-special-cinema-main-wrapper">
                <div className="movie-main-special-cinema-main-select-box">

                    <div className="movie-main-special-cinema-main-img-box">
                        <div className="movie-main-special-cinema-main-img">
                            { isSuiteHoveredList && <MovieMainSuite /> }
                            { isLivingRoomHoveredList && <MovieMainLivingRoom /> }
                            { is4DXHoveredList && <MovieMain4DX /> }
                            { isChefHoveredList && <MovieMainChef /> }
                        </div>
                    </div>

                    <div className="movie-main-special-cinema-main-select-menu-box">
                        <div className="movie-main-special-cinema-main-select-menu">

                            <div 
                                className="movie-main-special-cinema-main-select-menu-list"
                                id="Suite"
                                onMouseEnter={ isSuiteMouseEnter }
                            >
                                <div className="movie-main-special-cinema-main-select-menu-list-text-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-text">SUITE CINEMA</p>
                                </div>
                                <div className="movie-main-special-cinema-main-select-menu-list-tag-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-tag">#호텔 컨셉의 프리미엄관</p>
                                </div>
                            </div>
                            <div 
                                className="movie-main-special-cinema-main-select-menu-list"
                                id="LivingRoom"
                                onMouseEnter={ isLivingRoomMouseEnter }
                                >
                                <div className="movie-main-special-cinema-main-select-menu-list-text-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-text">CINE & LIVINGROOM</p>
                                </div>
                                <div className="movie-main-special-cinema-main-select-menu-list-tag-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-tag">#신개념 소셜 상영관</p>
                                </div>
                            </div>
                            <div 
                                className="movie-main-special-cinema-main-select-menu-list"
                                id="DX"
                                onMouseEnter={ is4DXMouseEnter }
                                >
                                <div className="movie-main-special-cinema-main-select-menu-list-text-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-text">4DX</p>
                                </div>
                                <div className="movie-main-special-cinema-main-select-menu-list-tag-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-tag">#모션시트 #오감체험</p>
                                </div>
                            </div>
                            <div 
                                className="movie-main-special-cinema-main-select-menu-list"
                                id="Chef"
                                onMouseEnter={ isChefMouseEnter }
                            >
                                <div className="movie-main-special-cinema-main-select-menu-list-text-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-text">CINE de CHEF</p>
                                </div>
                                <div className="movie-main-special-cinema-main-select-menu-list-tag-box">
                                    <p className="movie-main-special-cinema-main-select-menu-list-tag">#쉐프가 있는 영화관</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieMainSpecialCinemaMain;