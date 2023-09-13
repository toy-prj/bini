import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import MovieSignUpLogo from "./MovieSignUpLogo";
import MovieSignUpProgressBar from "./MovieSignUpProgressBar";

import '../../scss/header/MovieSignUpSelectInfo.scss';

const MovieSignUpSelectInfo = ({ clickCloseBtn, clickBackToSignUpBtn, successSignUp }) => {

    // 상태변수로 회원가입 입력값 관리
    const [userValue, setUserValue] = useState({
        name: '',
        phone: '',
        birthdate: ''
    });

    // 검증 메시지에 대한 상태변수 관리
    const [message, setMessage] = useState({
        name: '',
        phone: '',
        birthdate: ''
    });

    // 검증 완료 체크에 대한 상태변수 관리
    const [correct, setCorrect] = useState({
        name: false,
        phone: false,
        birthdate: false
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

    // ---------------------------------------------------------------------
    // 이름 입력창 체인지 이벤트 핸들러
    const nameHandler = e => {
        
        const userNameBox = document.getElementById('userNameBox');
        const userNameInput = document.getElementById('name');
        const nameRegex = /^[가-힣]{2,5}$/;
        const inputVal = e.target.value;

        // 입력값 검증
        let msg; // 검증 메시지를 저장할 변수
        let flag; // 입력 검증체크 변수
        
        if(!inputVal) {
            msg = '사용자 이름을 필수입니다.';
            flag = false; 
            userNameBox.style.backgroundColor = 'red';
            userNameBox.style.border = '1px solid red';
            userNameInput.style.border = '2px solid red';
        } else if (!nameRegex.test(inputVal)) {
            msg = '2~5글자 사이의 한글로 작성해주세요.';
            flag = false;
            userNameBox.style.backgroundColor = 'red';
            userNameBox.style.border = '1px solid red';
            userNameInput.style.border = '2px solid red';
        } else {
            msg = '사용 가능한 이름입니다.';
            flag = true;
            userNameBox.style.backgroundColor = 'rgb(0, 117, 255, .9)';
            userNameBox.style.border = '1px solid rgb(0, 117, 255, .9)';
            userNameInput.style.border = '2px solid rgb(0, 117, 255, .9)';
        }

        saveInputState({
            key: 'name',
            inputVal,
            msg,
            flag
        });
    };

    // 생년월일 체인지 이벤트 핸들러
    const birthDateHandler = e => {
        let inputVal = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
        inputVal = inputVal.substring(0, 8); // 최대 8자리까지만 유지

        const year = inputVal.substring(0, 4);
        const month = inputVal.substring(4, 6);
        const day = inputVal.substring(6, 8);

        let formattedValue = '';

        if (year) {
            formattedValue += year;
        }
        
        if (month) {
            formattedValue += '-' + month;
        }
        
        if (day) {
            formattedValue += '-' + day;
        }

        e.target.value = formattedValue;

        e.target.value = e.target.value
            .replace(/[^0-9]/g, '') // 숫자 이외의 문자 제거
            .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1-$2-$3') // YYYY-MM-DD 형식으로 변환
            .replace(/(\-{1,2})$/g, ''); // 마지막에 -가 있는 경우 제거

        saveInputState({
            key: 'birthdate',
            inputVal,
        });
    };

    // 핸드폰 번호 체인지 이벤트 핸들러
    const phoneHandler = e => {
        e.target.value = e.target.value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
            .replace(/(\-{1,2})$/g, '');
            
            let msg;
            let flag;

            if(e.target.value.length < 13) {
                msg = '올바르지 않은 형식입니다'
                flag = false;
            }

        saveInputState({
            key: 'phone',
            msg,
            flag
        });
    };

































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

                                    <div className="header-sign-up-user-info-verification-box">
                                        <div className="header-sign-up-user-select-info-title-box" id="userNameBox">
                                            <p className="header-sign-up-user-select-info-title"><BsFillPersonFill /></p>
                                        </div>

                                        <input 
                                            className="header-sign-up-user-select-info-input"
                                            type="text"
                                            name="name"
                                            id="name"
                                            label='사용자 이름'
                                            placeholder="이름을 입력해주세요"
                                            maxLength={50}
                                            autoFocus
                                            onChange={ nameHandler }
                                        />
                                    </div>
                                        <span style={
                                            correct.name
                                            ? {color:'rgb(0, 117, 255'}
                                            : {color: 'red'}
                                        }>{message.name}</span>
                                </div>

                                <div className="movie-sign-up-select-info-list">
                                    <div className="header-sign-up-user-info-verification-box">
                                        <div className="header-sign-up-user-select-info-title-box">
                                            <p className="header-sign-up-user-select-info-title "><GiSmartphone /></p>
                                        </div>

                                        <input 
                                            className="header-sign-up-user-select-info-input"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            label='핸드폰 번호'
                                            placeholder="핸드폰 번호를 입력해주세요 ( '-' 를 제외한 11자리 )"
                                            maxLength={13}
                                            onChange={ phoneHandler }
                                        />
                                    </div>
                                </div>

                                <div className="movie-sign-up-select-info-list">
                                    <div className="header-sign-up-user-info-verification-box">
                                        <div className="header-sign-up-user-select-info-title-box">
                                            <p className="header-sign-up-user-select-info-title"><MdOutlineCalendarMonth /></p>
                                        </div>

                                        <input 
                                            className="header-sign-up-user-select-info-input"
                                            type="text"
                                            name="birthdate"
                                            id="birthdate"
                                            label='생년월일'
                                            placeholder="생년월일을 입력해주세요 ( '-' 제외한 8자리 )"
                                            autoFocus
                                            onChange={ birthDateHandler }
                                        />
                                            <span style={
                                                correct.birthdate
                                                ? {color:'rgb(0, 117, 255'}
                                                : {color: 'red'}
                                            }>{message.birthdate}</span>
                                    </div>
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