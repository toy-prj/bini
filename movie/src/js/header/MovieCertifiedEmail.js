import React from "react";
import { AiFillSafetyCertificate, AiOutlineLeft } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import MovieSignUpLogo from "./MovieSignUpLogo";
import MovieSignUpProgressBar from "./MovieSignUpProgressBar";

import '../../scss/header/MovieCertifiedEmail.scss';

const MovieCertifiedEmail = ({ clickCloseBtn, clickSignUp, clickCertifiedEmailBtn, isOpenCertifiedEmail }) => {

    return (
        <>  
            <div className="movie-certified-email-wrapper">
                <div className="movie-certified-email-box">

                {/* 뒤로가기 / 닫기 버튼 */}
                <div className="certified-email-btn-box">
                    <div className="certified-email-back-btn-box">
                        <button 
                            className="certified-email-back-btn"
                            type="button"
                            onClick={ clickSignUp }
                        ><AiOutlineLeft /></button>
                    </div>
                    <div className="certified-email-close-btn-box">
                        <button 
                            className="certified-email-close-btn"
                            type="button"
                            onClick={ clickCloseBtn }
                        ><MdOutlineClose /></button>
                    </div>
                </div>

                {/* logo */}
                <div className="certified-email-logo-wrapper">
                    <MovieSignUpLogo />
                </div>

                {/* 진행상황 Bar */}
                <div className="certified-email-progress-bar-wrapper">
                    <MovieSignUpProgressBar />
                </div>

                {/* 인증번호 전송 메시지 출력 칸 */}
                <div className="certified-email-user-email-text-box">
                    <p className="certified-email-user-email-view-text">인증번호가 다음 이메일로 전송되었습니다 : </p>
                    <div className="certified-email-user-email-text">user@naver.com</div>
                </div>

                {/* 인증번호 입력 */}
                <div className="certified-email-input-wrapper">
                    <div className="certified-email-input-box">

                        {/* 인증번호 입력 칸*/}
                        <div className="certified-email-input-code-box">
                            <div className="header-sign-up-user-info-title-box" id="userPasswordBox">
                                <p className="header-sign-up-user-info-title"><AiFillSafetyCertificate /></p>
                            </div>
                            <input 
                                className="certified-email-input-code"
                                type="text"
                                placeholder="인증번호를 입력해주세요"
                            />
                        </div>

                        {/* 인증하기 버튼 */}
                        <div className="certified-email-verification-btn-box">
                            <button 
                                className="certified-email-verification-btn certified-code-text"
                                type="button"
                                onClick={ clickCertifiedEmailBtn }
                                >
                                <p className="certified-code-text">인증하기</p>
                            </button>
                        </div>

                    </div>
                </div>












                </div>
            </div>
        </>
    );
}

export default MovieCertifiedEmail;