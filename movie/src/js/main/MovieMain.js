import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsChevronCompactLeft, BsChevronCompactRight }from 'react-icons/bs';
import { AiOutlineLeft, AiOutlineRight }from 'react-icons/ai';
import MovieMainAdContents from "./MovieMainAdContents";
import MovieMainVisualEvent from "./event/MovieMainVisualEvent";
import MovieMainSpecialCinema from "./special/MovieMainSpecialCinema";
import MovieMainViewMovieAD from "./viewAD/MovieMainViewMovieAD";

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


    // // 영화 리스트 axios
    // const [movies, setMovies] = useState([]); 
    // const [isLoading, setIsLoading] = useState(true); 

    // const getMovies = () => {
    //     axios.get()
    //         .then((res) => {
    //             setMovies(res.data.movies)
    //             setIsLoading(false)
    //         })
    // }

    // useEffect(() => {
    //     getMovies()
    // }, []);

    








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



                {/* 스페셜관 */}
                <div className="main-visual-special-cinema-box">
                    <div className={ scrollPosition < 600 ? "main-visual-special-cinema" : "main-visual-special-cinema-sticky"}>
                        <MovieMainSpecialCinema />
                    </div>
                </div>


                {/* 이벤트 */}
                <div className={ scrollPosition < 900 ? "main-visual-event-box" : "main-visual-event-box-sticky"}>
                    <div className="main-visual-event">
                        <MovieMainVisualEvent />
                    </div>
                </div>


                {/* 영화 광고 */}
                <div className={ scrollPosition < 1600 ? "main-view-movie-ad-box" : "main-view-movie-ad-box-sticky"}>
                    <div className={ scrollPosition < 1600 ? "main-view-movie-ad" : "main-view-movie-ad-sticky"}>
                        <MovieMainViewMovieAD />
                    </div>
                </div>



            </div>
        </>
    );
}

export default MovieMain;