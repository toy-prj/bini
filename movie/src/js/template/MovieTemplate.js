import React from "react";
import MovieHeader from "../header/MovieHeader";
import MovieMain from "../main/MovieMain";

import '../../scss/template/MovieTemplate.scss';
import MovieFooter from "../footer/MovieFooter";

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