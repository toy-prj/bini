import React from "react";

import '../../scss/header/MovieSignUpCompletion.scss';
import { FaCheckCircle } from "react-icons/fa";

const MovieSignUpCompletion = () => {

    return(
        <>
            <div className="movie-sign-up-completion-wrapper">
                <div className="movie-sign-up-completion-box">

                    <div className="movie-sign-up-completion-img-box">
                        <div className="movie-sign-up-completion-img"><FaCheckCircle /></div>
                    </div>

                    <div className="movie-sign-up-completion-text-box">
                        <p className="movie-sign-up-completion-text">환영합니다</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieSignUpCompletion;