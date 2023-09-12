import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import MovieSignUpLogo from "./MovieSignUpLogo";
import MovieSignUpProgressBar from "./MovieSignUpProgressBar";

import '../../scss/header/MovieSignUpSelectInfo.scss';

const MovieSignUpSelectInfo = ({ clickCloseBtn, clickBackToSignUpBtn, successSignUp }) => {

    

    return(
        <>
            

            <div className="movie-sign-up-select-info-wrapper">
                <div className="movie-sign-up-select-info-box">

                    {/* 뒤로가기/닫기 버튼 */}
                    <div className="movie-sign-up-select-info-btn-box">
                        <div className="movie-sign-up-select-info-btn-box back-box">
                            <button 
                                className="movie-sign-up-select-info-btn back"
                                type="button"
                                onClick={ clickBackToSignUpBtn }
                            >
                                <AiOutlineLeft />
                            </button>
                        </div>
                        <div className="movie-sign-up-select-info-btn-box close-box">
                            <button 
                                className="movie-sign-up-select-info-btn close"
                                type="button"
                                onClick={ clickCloseBtn }
                            >
                                <MdOutlineClose />
                            </button>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="movie-sign-up-select-info-logo-wrapper">
                        <MovieSignUpLogo />
                    </div>

                    {/* 진행 상황 Bar */}
                    <div className="movie-sign-up-select-info-progress-bar-wrapper">
                        <MovieSignUpProgressBar />
                    </div>

                    {/* 세부(선택) 사항 */}
                    <div className="movie-sign-up-user-select-info-wrapper">
                        <div className="movie-sign-up-user-select-info-box">

                            <div className="movie-sign-up-select-info-list-box">

                                <div className="movie-sign-up-select-info-list">
                                    <div className="header-sign-up-user-select-info-title-box">
                                        <p className="header-sign-up-user-select-info-title"><BsFillPersonFill /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-select-info-input"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="이름을 입력해주세요"
                                        autoFocus
                                    />
                                </div>

                                <div className="movie-sign-up-select-info-list">
                                    <div className="header-sign-up-user-select-info-title-box">
                                        <p className="header-sign-up-user-select-info-title"><GiSmartphone /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-select-info-input"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="핸드폰 번호를 입력해주세요"
                                        autoFocus
                                    />
                                </div>

                                <div className="movie-sign-up-select-info-list">
                                    <div className="header-sign-up-user-select-info-title-box">
                                        <p className="header-sign-up-user-select-info-title"><MdOutlineCalendarMonth /></p>
                                    </div>

                                    <input 
                                        className="header-sign-up-user-select-info-input"
                                        type="text"
                                        name="birth"
                                        id="birth"
                                        placeholder="생년월일을 입력해주세요"
                                        autoFocus
                                    />
                                </div>

                                {/* 회원가입 완료 버튼 */}
                                <div className="header-sign-up-completion-btn-wrapper">
                                    <button 
                                        className="header-sign-up-completion-btn"
                                        type="button"
                                        onClick={ successSignUp }
                                    >
                                        <p className="header-sign-up-completion-btn-text">회원가입</p>
                                    </button>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieSignUpSelectInfo;