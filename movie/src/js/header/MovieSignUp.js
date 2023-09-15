import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiFillLock, AiOutlineLeft, AiOutlineMail }from 'react-icons/ai';
import MovieSignUpSelectInfo from "./MovieSignUpSelectInfo";
import MovieSignUpProgressBar from "./MovieSignUpProgressBar";
import MovieSignUpLogo from "./MovieSignUpLogo";

import '../../scss/header/MovieSignUp.scss';

const MovieSignUp = ({ clickCloseBtn, clickLogin, isOpenSelectInfo, clickNextSelectInfo, clickBackToSignUpBtn, successSignUp }) => {

    // 상태변수로 회원가입 입력값 관리
    const [userValue, setUserValue] = useState({
        mail: '',
        password: ''
    });

    // 검증 메시지에 대한 상태변수 관리
    const [message, setMessage] = useState({
        mail: '',
        password: '',
        passwordCheck: ''
    });

    // 검증 완료 체크에 대한 상태변수 관리
    const [correct, setCorrect] = useState({
        mail: false,
        password: false,
        passwordCheck: false
    });

    // 검증 데이터를 상태변수에 저장하는 함수
    const saveInputState = ({
        key,
        inputVal,
        flag,
        msg
    }) => {

        inputVal !== 'pass' && setUserValue({
            ...userValue,
            [key]: inputVal
        });

        setMessage({
            ...message,
            [key]: msg
        });

        setCorrect({
            ...correct,
            [key]: flag
        });
    };

    // -------------------------------------------------------------------------
    // 비밀번호 체인지 이벤트 핸들러
    const passwordHandler = e => {

        // 비밀번호가 변동되면 확인란 자동 지우기
        document.getElementById('pwCheck').value = '';
        

        setMessage({...message, passwordCheck: ''});
        setCorrect({...correct, passwordCheck: false});

        const inputVal = e.target.value;
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

        // 검증 시작
        let msg, flag;

        if (!e.target.value) { // 비밀번호가 빈칸일 때
            msg = '비밀번호는 필수입니다.';
            flag = false;
        } else if (!pwRegex.test(e.target.value)) {
            msg = '8글자 이상의 영문, 숫자, 특수문자를 포함시켜주세요.';
            flag = false;
        } else {
            msg = '사용 가능한 비밀번호입니다.';
            flag = true;
        }

        saveInputState({
            key: 'password',
            inputVal,
            msg,
            flag
        });
    }

    // 비밀번호 확인 체인지 이벤트 핸들러
    const passwordCheckHandler = e => {

        // 검증 시작
        let msg, flag;

        if (!e.target.value) { // 패스워드 확인 빈칸일 때
            msg = '비밀번호 확인은 필수입니다.';
            flag = false;
        } else if (userValue.password !== e.target.value) {
            msg = '비밀번호가 일치하지 않습니다.';
            flag = false;
        } else {
            msg = '비밀번호가 일치합니다.'
            flag = true;
        }

        saveInputState({
            key: 'passwordCheck',
            msg,
            flag
        });
    }











    return (
        <>
            { isOpenSelectInfo && 
                <MovieSignUpSelectInfo 
                    clickCloseBtn={ clickCloseBtn }
                    clickBackToSignUpBtn={ clickBackToSignUpBtn }
                    clickLogin={ clickLogin }
                    successSignUp={ successSignUp }
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

                            {/* Logo */}
                            <div className="header-sign-up-logo-wrapper">
                                <MovieSignUpLogo />
                            </div>
                            
                            
                            {/* 진행상황 Bar */}
                            <div className="header-sign-up-progress-bar-wrapper">
                                <MovieSignUpProgressBar />
                            </div>

                            {/* 회원가입 메뉴 */}
                            <div className="header-sign-up-user-info-list-box">

                                {/* Email */}
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-verification-wrapper">
                                        <div className="header-sign-up-user-info-title-box" id="userPasswordBox">
                                            <p className="header-sign-up-user-info-title"><AiOutlineMail /></p>
                                        </div>

                                        <input 
                                            className="header-sign-up-user-info-input"
                                            name="mail"
                                            id="mail"
                                            label='Email'
                                            placeholder="이메일을 입력해주세요"
                                            maxLength={35}
                                            // onChange={ passwordHandler }
                                        />
                                        <div className="header-sign-up-user-certify-email-box">
                                            <button className="header-sign-up-user-certify-email">
                                                <p className="header-sign-up-user-certify-email-text">이메일</p>
                                                <p className="header-sign-up-user-certify-email-text">인증</p>
                                            </button>
                                        </div>
                                    </div>
                                        <span style={
                                            correct.mail
                                            ? {color:'rgb(0, 117, 255'}
                                            : {color: 'red'}
                                        }>{message.mail}</span>
                                </div>

                                {/* 비밀번호 */}
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-verification-wrapper">
                                        <div className="header-sign-up-user-info-title-box" id="userPasswordBox">
                                            <p className="header-sign-up-user-info-title"><AiFillLock /></p>
                                        </div>

                                        <input 
                                            className="header-sign-up-user-info-input"
                                            type="password"
                                            name="pw"
                                            id="pw"
                                            label='비밀번호'
                                            placeholder="비밀번호를 입력해주세요"
                                            onChange={ passwordHandler }
                                        />
                                    </div>
                                        <span style={
                                            correct.password
                                            ? {color:'rgb(0, 117, 255'}
                                            : {color: 'red'}
                                        }>{message.password}</span>
                                </div>
                                
                                {/* 비밀번호 확인 */}
                                <div className="header-sign-up-user-info-list">
                                    <div className="header-sign-up-user-info-verification-wrapper">
                                        <div className="header-sign-up-user-info-title-box" id="userPasswordCheckBox">
                                            <p className="header-sign-up-user-info-title"><AiFillLock /></p>
                                        </div>

                                        <input 
                                            className="header-sign-up-user-info-input"
                                            type="password"
                                            name="pwCheck"
                                            id="pwCheck"
                                            label='비밀번호 확인'
                                            placeholder="비밀번호를 다시 입력해주세요"
                                            onChange={ passwordCheckHandler }
                                        />
                                    </div>
                                        <span style={
                                            correct.passwordCheck
                                            ? {color:'rgb(0, 117, 255'}
                                            : {color: 'red'}
                                        }>{message.passwordCheck}</span>
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