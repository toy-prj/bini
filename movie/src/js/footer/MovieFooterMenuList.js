import React from "react";

import '../../scss/footer/MovieFooterMenuList.scss';

const MovieFooterMenuList = () => {

    return(
        <>
            <div className="movie-footer-menu-list-wrapper">
                <div className="movie-footer-menu-list-box">

                    <div className="movie-footer-menu-notice-box">
                        <div className="movie-footer-menu-list">
                            <p className="movie-footer-menu-list-text">공지사항</p>
                        </div>
                    </div>

                    <ul className="movie-footer-menu-box">
                        <li className="movie-footer-menu-list">
                            <p className="movie-footer-menu-list-text">회사소개</p>
                        </li>
                        <li className="movie-footer-menu-list">
                            <p className="movie-footer-menu-list-text">이용약관</p>
                        </li>
                        <li className="movie-footer-menu-list">
                            <p className="movie-footer-menu-list-text">편성기준</p>
                        </li>
                        <li className="movie-footer-menu-list">
                            <p className="movie-footer-menu-list-text">개인정보처리방침</p>
                        </li>
                        <li className="movie-footer-menu-list">
                            <p className="movie-footer-menu-list-text">이메일주소무단수집거부</p>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default MovieFooterMenuList;