import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdCardMembership } from 'react-icons/md';
import { BsPersonFill, BsPersonFillAdd, BsPersonFillLock } from 'react-icons/bs';
import MovieLogin from "./MoiveLogin";
import MovieSignUp from "./MovieSignUp";
import HeaderMenuBar from "./menu/HeaderMenuBar";
// import HeaderMenu from "./menu/HeaderMenu";

import '../../scss/header/MovieHeader.scss';

const MovieHeader = () => {

    // 모달창 닫기
    const clickCloseBtn = () => {
        setOpenLogin(false);
    }

    // 로그인
    const [openLogin, setOpenLogin] = useState(false);

    // 메인화면 로그인 클릭
    const clickLogin = () => {
        setOpenLogin(true);
        setOpenSignUp(false);
    }

    // 회원가입
    const [openSignUp, setOpenSignUp] = useState(false);

    // 메인화면 회원가입 클릭
    const clickSignUp = () => {
        setOpenSignUp(true);
        setOpenLogin(false);
    }

    









    // 새로 고침(임시)
    const reload = () => {
        window.onload.href='/';
    }
    


    // sticky header 
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });














    return (
        <>
            {openLogin && <MovieLogin clickCloseBtn={ clickCloseBtn } clickSignUp={ clickSignUp }/>}
            {openSignUp && <MovieSignUp clickCloseBtn={ clickCloseBtn }/> }            

            {/* header 전체 */}
            <div id='headerWrapper'>
                <div className="header-box">

                    {/* header 위쪽 banner */}
                    <div className={ scrollPosition < 130 ? "header-top-banner" : "header-top-banner_none"}>

                        {/* header 로고 */}
                        <div className="header-main-logo-box">
                            <Link 
                                to={'/'} 
                                className="header-main-logo"
                                onClick={ reload }
                            >Logo</Link>
                        </div>

                        {/* header 위쪽 메뉴 */}
                        <div className="header-menu-box">
                            <ul className="header-menu">

                                {/* header 위쪽 메뉴 list */}
                                {/* 맴버쉽 */}
                                <li 
                                    className="header-menu-list"
                                    id="memberShip"
                                >
                                    <div className="header-menu-list-icons-box">
                                        <div 
                                            className="header-menu-list-icons"
                                            id="memberShipIcons"
                                            ><MdCardMembership />
                                        </div>
                                    </div>
                                    <p 
                                        className="header-menu-list-text"
                                        id="memberShipText"
                                    >맴버쉽</p>
                                </li>

                                {/* 로그인 */}
                                <button 
                                    className="header-menu-list" 
                                    id="Login"
                                    onClick={ clickLogin }
                                >
                                    <div className="header-menu-list-icons-box">
                                        <div 
                                            className="header-menu-list-icons"
                                            id="loginIcons"
                                            ><BsPersonFillLock />
                                        </div>
                                    </div>
                                    <p className="header-menu-list-text">로그인</p>
                                </button>

                                {/* 회원가입 */}
                                <button
                                    className="header-menu-list"                            
                                    id="signUp"
                                    onClick={ clickSignUp }
                                >   
                                    <div className="header-menu-list-icons-box">
                                        <div 
                                            className="header-menu-list-icons"
                                            id="signUpIcons"
                                            ><BsPersonFillAdd />
                                        </div>
                                    </div>
                                    <p className="header-menu-list-text">회원가입</p>
                                </button>

                                {/* 마이페이지 */}
                                <button
                                    className="header-menu-list"                            
                                    id="myPage"
                                >   
                                    <div className="header-menu-list-icons-box">
                                        <div 
                                            className="header-menu-list-icons"
                                            id="myPageIcons"
                                            ><BsPersonFill />
                                        </div>
                                    </div>
                                    <p className="header-menu-list-text">My Cinema</p>
                                </button>

                            </ul>
                        </div>

                    </div>

                    {/* header 아래 banner */}
                    <div 
                        className="header-bottom-banner"
                        id="headerBottomBanner"
                    >
                        {/* header 아래쪽 메뉴 */}
                        <ul className="header-bottom-menu">
                            {/* <HeaderMenu /> */}
                            <HeaderMenuBar scrollPosition={ scrollPosition }/>
                        </ul>

                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieHeader;
