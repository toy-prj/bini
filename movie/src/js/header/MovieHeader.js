import React, { useState } from "react";
import MovieLogin from "./MoiveLogin";
import { MdCardMembership } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPersonFill, BsPersonFillAdd, BsPersonFillLock } from 'react-icons/bs';


import '../../scss/header/MovieHeader.scss';
import { useEffect } from "react";
import MovieSignUp from "./MovieSignUp";


const MovieHeader = () => {

    // 모달창 닫기
    const clickCloseBtn = e => {
        setOpenLogin(false);
    }

    // 로그인
    const[openLogin, setOpenLogin] = useState(false);

    // 메인화면 로그인 클릭
    const clickLogin = e => {
        setOpenLogin(true);
        setOpenSignUp(false);
    }

    // 회원가입
    const [openSignUp, setOpenSignUp] = useState(false);

    // 메인화면 회원가입 클릭
    const clickSignUp = e => {
        setOpenSignUp(true);
        setOpenLogin(false);
    }




    return (
        <>
            {openLogin && <MovieLogin clickCloseBtn={ clickCloseBtn } clickSignUp={ clickSignUp }/>}
            {openSignUp && <MovieSignUp clickCloseBtn={ clickCloseBtn }/> }            
















            {/* header 전체 */}
            <div id="headerWrapper">

                {/* header 위쪽 banner */}
                <div className="header-top-banner">

                    {/* header 로고 */}
                    <div className="header-main-logo-box">
                        <div className="header-main-logo"></div>
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
                                onClick={clickLogin}
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
            </div>

            {/* header 아래 banner */}

                <div 
                className="header-bottom-banner"
                    id="headerBottomBanner"
                >

                    {/* header 아래쪽 메뉴 */}
                    <ul className="header-bottom-menu">

                        {/* header 아래쪽 메뉴 list */}
                        {/* 예매 */}
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Reservation"
                            >예매</p>
                        </li>

                        {/* 영화 */}
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Movie"
                            >영화</p>
                        </li>

                        {/* 영화관 */}
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Cinema"
                            >영화관</p>
                        </li>

                        {/* 이벤트 */}
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Event"
                            >이벤트</p>
                        </li>

                        {/* 스토어 */}
                        <li className="header-bottom-menu-list">
                            <p 
                                className="header-bottom-menu-list-text"
                                id="Store"
                            >스토어</p>
                        </li>

                    </ul>


                    {/* header 아래쪽 sub menu */}
                    <ul className="header-bottom-sub-menu">

                        {/* 바로 예매 */}
                        <li className="header-bottom-menu-quick-reservation-box">
                            {/* TODO : 여기에 컴포넌트 호출 */}
                            <button 
                                className="header-bottom-menu-quick-reservation"
                                id="quickReservation"
                            >
                                <p className="header-bottom-menu-quick-reservation-text">
                                    바로 예매
                                </p>
                            </button>
                        </li>

                        {/* 전체 메뉴 보기 버튼 */}
                        <li className="header-bottom-menu-view-all-btn-box">
                            <button 
                                className="header-bottom-menu-view-all-btn"
                                id="viewAllBtn"
                                ><GiHamburgerMenu /></button>
                        </li>

                    </ul>

                </div>











        </>
    );
}

export default MovieHeader;
