import React from "react";
import MovieHeader from "../header/MovieHeader";
import MovieMain from "../main/MovieMain";
import MovieFooter from "../footer/MovieFooter";

import '../../scss/template/MovieTemplate.scss';

const MovieTemplate = () => {

    return (
        <>
            <MovieHeader />
            <MovieMain />
            <MovieFooter />
        </>
    );
}

export default MovieTemplate;