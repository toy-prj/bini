import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

import '../../scss/header/MovieSignUpSelectInfo.scss';

const MovieSignUpSelectInfo = ({ clickCloseBtn }) => {

    

    return(
        <>
            <div className="movie-sign-up-select-info-wrapper">
                <div className="movie-sign-up-select-info-box">

                    {/* 뒤로가기 버튼 */}
                    <div className="movie-sign-up-select-info-btn-box">
                        <div className="movie-sign-up-select-info-btn-box back-box">
                            <button 
                                className="movie-sign-up-select-info-btn back"
                                type="button"
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

                </div>
            </div>
        </>
    );
}

export default MovieSignUpSelectInfo;