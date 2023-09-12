import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import '../../scss/header/MovieSignUpProgressBar.scss';

const MovieSignUpProgressBar = () => {

    return (
        <>
            {/* 진행상황 bar */}
            <div className="header-sign-up-progress-bar-box">

            <div className="header-sign-up-progress-bar"></div>

            <div className="header-sign-up-progress-bar-title-box">
                <div className="header-sign-up-progress-bar-title">
                    <p className="header-sign-up-progress-bar-title-text">약관동의</p>
                </div>
                <div className="header-sign-up-progress-bar-title">
                    <p className="header-sign-up-progress-bar-title-text">정보입력</p>
                </div>
                <div className="header-sign-up-progress-bar-title">
                    <p className="header-sign-up-progress-bar-title-text">가입완료</p>
                </div>
            </div>

            <div className="header-sign-up-progress-bar-icons"><FaCheckCircle /></div>
            <div className="header-sign-up-progress-bar-icons"><FaCheckCircle /></div>
            <div className="header-sign-up-progress-bar-icons"><FaCheckCircle /></div>

            </div>
        </>
    )

}

export default MovieSignUpProgressBar;