import React from "react";
import MovieFooterMenuList from "./MovieFooterMenuList";

import '../../scss/footer/MovieFooter.scss';

const MovieFooter = () => {

    return(
        <>  
            <div className="movie-footer-wrapper">
                <div className="movie-footer-box">

                    <div className="movie-footer-top">
                        <div className="movie-footer-top-menu">
                            <MovieFooterMenuList />
                        </div>
                    </div>

                    <div className="movie-footer-bottom">

                    </div>









                </div>
            </div>
        </>
    );
}

export default MovieFooter;