import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiFillLock, AiOutlineLeft }from 'react-icons/ai';
import { BsPersonFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import MovieSignUpSelectInfo from "./MovieSignUpSelectInfo";

import '../../scss/header/MovieSignUp.scss';

const MovieSignUp = ({ clickCloseBtn, clickLogin, isOpenSelectInfo, clickNextSelectInfo, clickBackToSignUpBtn }) => {

    


    return (
        <>
            { isOpenSelectInfo && 
                <MovieSignUpSelectInfo 
                    clickCloseBtn={ clickCloseBtn }
                    clickBackToSignUpBtn={ clickBackToSignUpBtn }
            /> }

            <div className={`header-sign-up-wrapper ${isOpenSelectInfo ? 'shifted' : ''}`}>
                
                <div className="header-sign-up-box">

                    {/* 버튼 관련 */}
                    <div className="header-sign-up-btn-box">
                        <div className="header-sign-up-back-btn-box">
                            <button 
                                className="header-sign-up-back-btn"
                                type="button"
                                onClick={ clickLogin }
                            ><AiOutlineLeft /></button>
                        </div>
                        <div className="header-sign-up-close-btn-box">
                            <button 
                                className="header-sign-up-close-btn"
                                type="button"
                                onClick={ clickCloseBtn }
                            ><MdOutlineClose /></button>
                        </div>
                    </div>

                    {/* 메인 */}
                    <div className="header-sign-up-user-info-wrapper">
                        <div className="header-sign-up-user-info">

                            <div className="header-sign-up-logo-box">
                                <div className="header-sign-up-logo">Logo</div>
                            </div>
                            
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

                            {/* 회원가입 메뉴 */}
                            <div className="header-sign-up-user-info-list-box">

                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title"><BsPersonFill /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="id"
                                        id="id"
                                        placeholder="이메일을 입력해주세요"
                                        required
                                        autoFocus
                                    />
                                    <div className="header-sign-up-user-certify-email-box">
                                        <button className="header-sign-up-user-certify-email">
                                            <p className="header-sign-up-user-certify-email-text">이메일</p>
                                            <p className="header-sign-up-user-certify-email-text">인증</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title"><AiFillLock /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="password"
                                        name="pw"
                                        id="pw"
                                        placeholder="비밀번호를 입력해주세요"
                                        required
                                        />
                                </div>
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title"><AiFillLock /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="pwCheck"
                                        id="pwCheck"
                                        placeholder="비밀번호를 한번 더 입력해주세요"
                                        required
                                        />
                                </div>

                            </div>

                            <div className="header-sign-up-next-btn-box">
                                <button 
                                    className="header-sign-up-next-btn"
                                    type="button"
                                    onClick={ clickNextSelectInfo }
                                >
                                    <p className="header-sign-up-next-btn-text">다음으로</p>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieSignUp;