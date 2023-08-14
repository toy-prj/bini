import React from "react";
import MovieFooterMenuList from "./MovieFooterMenuList";
import MovieFooterMainInfo from "./MovieFooterMainInfo";

import '../../scss/footer/MovieFooter.scss';

const MovieFooter = () => {

    return(
        <>  
            <div className="movie-footer-wrapper">
                <div className="movie-footer-box">

                    <div className="movie-footer-header">
                        <div className="movie-footer-header-menu">
                            <MovieFooterMenuList />
                        </div>
                    </div>

                    <div className="movie-footer-main">
                        <div className="movie-footer-main-text-box">
                            <MovieFooterMainInfo />
                        </div>
                    </div>

                    <div className="movie-footer-bottom">
                        <div className="movie-footer-bottom-text-box">
                            <p className="movie-footer-bottom-text">COPYRIGHT© BINI CINEMA ALL RIGHT RESERVED.</p>
                        </div>
                    </div>









                </div>
            </div>
        </>
    );
}

export default MovieFooter;