import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import MovieMainSpecialCinemaMain from "./MovieMainSpecialCinemaMain";

import '../../../scss/main/special/MovieMainSpecialCinema.scss';

const MovieMainSpecialCinema = () => {

    return(
        <>
            <div className="movie-main-special-cinema-wrapper">
                <div className="movie-main-special-cinema-box">

                    <div className="movie-main-special-cinema-header-box">
                        <div className="movie-main-special-cinema-header-title">
                            <p className="movie-main-special-cinema-header-title-text">스페셜관</p>
                        </div>
                        <button className="movie-main-special-cinema-header-view-all">
                            <p className="movie-main-special-cinema-header-view-all-text">더보기
                                <p id="viewAll"><AiOutlineRight /></p>
                            </p>
                        </button>
                    </div>

                    <div className="movie-main-special-cinema-main-box">
                        <MovieMainSpecialCinemaMain />
                    </div>


                </div>
            </div>
        </>
    );
}

export default MovieMainSpecialCinema;