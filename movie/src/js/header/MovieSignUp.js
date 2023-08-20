import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiFillLock, AiOutlineLeft }from 'react-icons/ai';
import { BsPersonFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

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
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title"><GiSmartphone /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="휴대폰 번호를 입력해주세요"
                                        required
                                        />
                                </div>
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-title-box">
                                        <p className="header-sign-up-user-info-title"><LiaBirthdayCakeSolid /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-info-input"
                                        type="text"
                                        name="birth"
                                        id="birth"
                                        placeholder="생년월일을 입력해주세요"
                                        required
                                    />
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    <div className="header-sign-in-btn-box">
                        <button className="header-sign-in-btn">
                            <p className="header-sign-in-btn-text">회원가입</p>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieSignUp;