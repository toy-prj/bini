import React from "react";

import '../../../../scss/header/menu/movie/HeaderMovieMenu.scss';

const HeaderMovieMenu = () => {

    return(
        <>
            <div id="headerMovieMenuWrapper">

                <ul className="header-movie-menu">

                    <li className="header-movie-menu-list">
                        <p className="header-movie-menu-list-text">홈</p>
                    </li>
                    <li className="header-movie-menu-list">
                        <p className="header-movie-menu-list-text">현재상영작</p>
                    </li>
                    <li className="header-movie-menu-list">
                        <p className="header-movie-menu-list-text">상영예정작</p>
                    </li>

                </ul>

            </div>
        </>
    );
}

export default HeaderMovieMenu;