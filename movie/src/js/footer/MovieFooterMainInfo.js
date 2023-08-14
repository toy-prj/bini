import React from "react";

import '../../scss/footer/MovieFooterMainInfo.scss';

const MovieFooterMainInfo = () => {

    return(
        <>
            <div className="movie-footer-main-info-wrapper">
                <div className="movie-footer-main-info-box">

                    <div className="movie-footer-main-first-info-box">
                        <div className="movie-footer-main-first-info">
                            <p className="movie-footer-main-info-text">
                                서울특별시 강남구 테헤란로7길 7 에스코빌딩 6층
                            </p>
                            <p className="movie-footer-main-info-text">고객센터 1544-0000 (유료)</p>
                        </div>
                    </div>

                    <div className="movie-footer-main-second-info-box">
                        <div className="movie-footer-main-second-info">
                            <p className="movie-footer-main-info-text">개인정보 보호 책임자 : 원석빈</p>
                            <p className="movie-footer-main-info-text">사업자등록번호 : 000-00-00000</p>
                            <p className="movie-footer-main-info-text">
                                통신판매업신고번호 : 2000-서울강남-0000
                                <p className="movie-footer-main-inr-info-text">사업자정보확인</p>
                            </p>
                        </div>
                    </div>

                    <div className="movie-footer-main-third-info-box">
                        <div className="movie-footer-main-third-info">
                            <p className="movie-footer-main-info-text">대표이사 : 원석빈</p>
                            <p className="movie-footer-main-info-text">대표이메일 : ejdrp1@naver.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieFooterMainInfo;