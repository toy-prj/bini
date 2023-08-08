import React from "react";
import MovieHeader from "../header/MovieHeader";
import MovieMain from "../main/MovieMain";

import '../../scss/template/MovieTemplate.scss';

const MovieTemplate = () => {
    return (
        <>
            <MovieHeader />
            <MovieMain />
        </>
    );
}

export default MovieTemplate;