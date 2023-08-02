import React from "react";

import '../../scss/main/MovieMainAdContents.scss';

const MovieMainAdContents = () => {

    return(
        <>
            <div id="movieMainAdContentsWrapper">
                <div className="movie-main-ad-contents-list-box">


                    <div className="movie-main-ad-contents-list">

                        <div className="movie-main-ad-contents-list-option-background-box">
                            <div className="movie-main-ad-contents-list-option-background">
                                <div className="list-reservation-btn-box">
                                    <button className="list-reservation-btn">
                                        <p className="list-reservation-btn-text">예매하기</p>
                                    </button>
                                </div>
                                <div className="list-info-btn-box">
                                    <button className="list-info-btn">
                                        <p className="list-info-btn-text">상세정보</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="movie-main-ad-contents-img-box">
                            <div className="movie-main-ad-contents-img">사진</div>
                        </div>
                        <div className="movie-main-ad-contents-title-box">
                            <div className="movie-main-ad-contents-title">영화 제목</div>
                        </div>
                        <div className="movie-main-ad-contents-grade-box">
                            <div className="movie-main-ad-contents-reservation-rate">
                                <p className="movie-main-ad-contents-reservation-rate-text">예매율 10.8%</p>
                            </div>
                            <div className="movie-main-ad-contents-star-point">
                                <p className="movie-main-ad-contents-star-point-text">9.5</p>
                            </div>
                        </div>
                    </div>

                    





                </div>
            </div>
        </>
    );
}

export default MovieMainAdContents;