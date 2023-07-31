import React, { useState } from "react";
import MovieLogin from "./MoiveLogin";
import { MdCardMembership } from 'react-icons/md';


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

                            <li 
                                className="header-menu-list"
                                id="MemberShip"
                            >
                                <div className="header-menu-list-icons-box">
                                    <div 
                                        className="header-menu-list-icons"
                                        id="MemberShip-Icons"
                                        ><MdCardMembership />
                                    </div>
                                </div>
                                <p 
                                    className="header-menu-list-text"
                                    id="MemberShip-Text"
                                >맴버쉽</p>
                            </li>

                            <button 
                                className="header-menu-list" 
                                id="Login"
                                onClick={clickLogin}
                            >
                                <div className="header-menu-list-icons-box">
                                    <div 
                                        className="header-menu-list-icons"
                                        id="Login-Icons"
                                        ><MdCardMembership />
                                    </div>
                                </div>
                                <p className="header-menu-list-text">로그인</p>
                            </button>

                            <button
                                className="header-menu-list"                            
                                id="SignUp"
                            >   
                                <div className="header-menu-list-icons-box">
                                    <div 
                                        className="header-menu-list-icons"
                                        id="SignUp-Icons"
                                        ><MdCardMembership />
                                    </div>
                                </div>
                                <p className="header-menu-list-text">회원가입</p>
                            </button>

                            <button
                                className="header-menu-list"                            
                                id="MyPage"
                            >   
                                <div className="header-menu-list-icons-box">
                                    <div 
                                        className="header-menu-list-icons"
                                        id="MyPage-Icons"
                                        ><MdCardMembership />
                                    </div>
                                </div>
                                <p className="header-menu-list-text">My Cinema</p>
                            </button>

                        </ul>
                    </div>

                </div>






























                <div className="header-bottom-banner">

                    <ul className="header-bottom-menu">

                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Reservation"
                            >예매</p>
                        </li>
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Movie"
                            >영화</p>
                        </li>
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Cinema"
                            >영화관</p>
                        </li>
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Event"
                            >이벤트</p>
                        </li>
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Store"
                            >스토어</p>
                        </li>

                    </ul>

                </div>




            </div>













        </>
    );
}

export default MovieHeader;
