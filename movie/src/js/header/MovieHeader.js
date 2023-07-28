import React from "react";

import '../../scss/header/MovieHeader.scss';

const MovieHeader = () => {

    return (
        <>
            <div id="Header-Wrapper">
                <ul className="header-top">
                    <li className="ht-social-login">
                        <div className="social-login-box">
                            <div className="kakao"></div>
                            <div className="naver"></div>
                            <div className="google"></div>
                        </div>
                    </li>
                    <li className="ht-main-logo">
                        <div className="main-logo"></div>
                    </li>
                    <li className="ht-login">
                        <div className="login"></div>
                    </li>
                </ul>

                <div className="header-bottom">
                    
                </div>


            </div>

        </>
    );
}

export default MovieHeader;