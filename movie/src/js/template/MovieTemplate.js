import React from "react";
import MovieHeader from "../header/MovieHeader";

import '../../scss/template/MovieTemplate.scss';
import MovieMain from "../main/MovieMain";

const MovieTemplate = () => {
    return (
        <>
            <MovieHeader />
            <MovieMain />
        </>
    );
}

export default MovieTemplate;