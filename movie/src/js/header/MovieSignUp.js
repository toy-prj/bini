import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineLeft }from 'react-icons/ai';

import '../../scss/header/MovieSignUp.scss';

const MovieSignUp = ({ clickCloseBtn, clickLogin }) => {

    return (
        <>
            <div className="header-sign-up-wrapper">
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

                            <div className="header-sign-up-user-info-list-box">

                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title">이메일</p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="id"
                                        id="id"
                                        required
                                        autoFocus
                                    />
                                </div>
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title">비밀번호</p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="password"
                                        name="pw"
                                        id="pw"
                                        required
                                    />
                                </div>
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title">비밀번호 확인</p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="pwCheck"
                                        id="pwCheck"
                                        required
                                    />
                                </div>
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title">휴대폰 번호</p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        required
                                    />
                                </div>
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title">생년월일</p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="birth"
                                        id="birth"
                                        required
                                    />
                                </div>
                                
                            </div>

                            <div className="header-sign-in-btn-box">
                                <button className="header-sign-in-btn">
                                    <p className="header-sign-in-btn-text">회원가입</p>
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