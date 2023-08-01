import React from "react";
import { MdOutlineClose } from 'react-icons/md';
import '../../scss/header/MovieLogin.scss';

const MovieLogin = ( {clickCloseBtn, clickSignUp} ) => {

    

    return(
        <>
            {/* 로그인 모달 */}
            <div id="Header-Login-Wrapper">
                <div className="header-login-box">

                    {/* 닫기 */}
                    <div id="Close-Login-Modal-Wrapper">
                        <button 
                            className="header-login-close-btn"
                            type="button"  
                            onClick={ clickCloseBtn }
                        ><MdOutlineClose id="Login-Modal-Close-Btn"/></button>
                    </div>

                    {/* Logo */}
                    <div className="header-login-logo-box">
                        <div className="header-login-logo"></div>
                    </div>

                    {/* 사용자 정보 입력 창 */}
                    <div className="header-login-user-info-box">
                        <div className="header-login-user-email-box">
                            <input 
                                className="header-login-user-email" 
                                id="Email" 
                                placeholder="이메일을 입력해주세요"
                            />
                        </div>
                        <div className="header-login-user-password-box">
                            <input 
                                className="header-login-user-password" 
                                id="PW" 
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>
                    </div>

                    {/* 로그인 유지 */}
                    <div className="header-login-keep-login-wrapper">
                        <div className="header-login-keep-login-box">
                            <input 
                                className="header-login-keep-login-check-btn"
                                id="KeepLogin"
                                type="checkbox"
                                name="KeepLogin"
                            ></input>
                            <label 
                                for="KeepLogin" 
                                className="header-login-keep-login-text"
                            >로그인 유지</label>
                        </div>
                    </div>

                    {/* 로그인 클릭 */}
                    <div className="header-login-login-box">
                        <button 
                            className="header-login-login" 
                            id="Login"
                            type="button"
                        >로그인</button>
                    </div>

                    {/* 사용자 정보 찾기 */}
                    <div className="header-login-find-info-wrapper">

                        <div className="header-login-find-info-box">
                            <div className="header-login-find-email-pw-box">
                                <div className="header-login-find-email">
                                    <p className="header-login-find-email-text">아이디 찾기</p>
                                </div>
                                <div className="header-login-find-pw">
                                    <p className="header-login-find-pw-text">비밀번호 찾기</p>
                                </div>
                            </div>
                        
                            <div className="header-login-signup-box">
                                <button 
                                    className="header-login-signup"
                                    onClick={ clickSignUp }
                                >회원가입</button>
                            </div>
                        </div>

                    </div>

                    {/* 빈 블럭 */}
                    <div className="block"></div>

                    {/* 소셜 로그인 문구 */}
                    <div className="header-login-social-login-text-box">
                        <p className="header-login-social-login-text">
                            다른 계정으로 간편 로그인
                        </p>
                    </div>

                    {/* 소셜 로그인 */}
                    <div className="header-login-social-login-box">
                        <div className="header-login-social-login">
                            <div className="header-login-social-login-img-box">
                                <div className="header-login-social-login-img" id="Kakao"></div>
                            </div>
                        </div>
                        <div className="header-login-social-login">
                            <div className="header-login-social-login-img-box">
                                <div className="header-login-social-login-img" id="Naver"></div>
                            </div>
                        </div>
                        <div className="header-login-social-login">
                            <div className="header-login-social-login-img-box">
                                <div className="header-login-social-login-img" id="Google"></div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </>
    );

}

export default MovieLogin;
