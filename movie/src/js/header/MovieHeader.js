import React, { useState } from "react";
import MovieLogin from "./MoiveLogin";

import '../../scss/header/MovieHeader.scss';


const MovieHeader = () => {

    // 로그인
    const[openLogin, setOpenLogin] = useState(false);

    const clickLogin = e => {
        setOpenLogin(true);
    }











    return (
        <>

            {openLogin && <MovieLogin />}

















            <div id="Header-Wrapper">

                <div className="header-top-banner">

                    <div className="header-main-logo-box">
                        <div className="header-main-logo"></div>
                    </div>

                    <div className="header-menu-box">
                        <ul className="header-menu">
                            <button 
                                className="header-menu-list" 
                                id="Login"
                                onClick={clickLogin}
                            >로그인</button>
                            <li className="header-menu-list">menu2</li>
                            <li className="header-menu-list">menu3</li>
                            <li className="header-menu-list">menu4</li>
                            <li className="header-menu-list">menu5</li>
                        </ul>
                    </div>

                </div>






























                <div className="header-bottom-banner">

                </div>




            </div>













        </>
    );
}

export default MovieHeader;
