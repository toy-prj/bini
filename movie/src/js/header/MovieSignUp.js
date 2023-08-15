import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineLeft }from 'react-icons/ai';

import '../../scss/header/MovieSignUp.scss';

const MovieSignUp = ({ clickCloseBtn, clickLogin }) => {

    return (
        <>
            <div className="header-sign-up-wrapper">
                <div className="header-sign-up-box">

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

                </div>
            </div>
        </>
    );
}

export default MovieSignUp;