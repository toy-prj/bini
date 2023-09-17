import React from "react";

import '../../scss/header/MovieCertifiedEmailCompletion.scss';
import { FaCheckCircle } from "react-icons/fa";

const MovieCertifiedEmailCompletion = () => {

    return(
        <>
            <div className="movie-certified-email-completion-wrapper">
                <div className="movie-certified-email-completion-box">

                    <div className="movie-certified-email-completion-img-box">
                        <div className="movie-certified-email-completion-img"><FaCheckCircle /></div>
                    </div>

                    <div className="movie-certified-email-completion-text-box">
                        <p className="movie-certified-email-completion-text">인증 성공</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieCertifiedEmailCompletion;