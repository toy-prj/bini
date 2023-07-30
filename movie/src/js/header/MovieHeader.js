import React, { useState } from "react";
import MovieLogin from "./MoiveLogin";

import '../../scss/header/MovieHeader.scss';


const MovieHeader = () => {

    // 로그인
    const[openLogin, setOpenLogin] = useState(false);

    // 메인화면 로그인 클릭
    const clickLogin = e => {
        setOpenLogin(true);
    }

    // 모달창 닫기
    const clickCloseBtn = e => {
        setOpenLogin(false);
    }











    return (
        <>

            {openLogin && <MovieLogin clickCloseBtn={ clickCloseBtn }/>}

















            <div id="Header-Wrapper">

                <div className="header-top-banner">

                    <div className="header-main-logo-box">
                        <div className="header-main-logo"></div>
                    </div>

                    <div className="header-menu-box">
                        <ul className="header-menu">
                            <li className="header-menu-list">
                                <p className="header-menu-list-text">맴버쉽</p>
                            </li>
                            <button 
                                className="header-menu-list" 
                                id="Login"
                                onClick={clickLogin}
                            >
                            <p className="header-menu-list-text">로그인</p>
                            </button>
                            <button
                                className="header-menu-list"                            
                                id="SignUp"
                            >   
                            <p className="header-menu-list-text">회원가입</p>
                            </button>
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
