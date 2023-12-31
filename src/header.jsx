import React from "react";
import logos from './img/logo.png'

  const Header=()=>{
return( <header id="header" class="header-style-1">
<div class="container">
    <div class="row clearfix">
        <div class="header-clear clearfix">
            <div class="header-content-left clearfix">
                {/* <!-- LOGO START
                ============================================= --> */}
                <div class="logo">
                    <a href="index.html"><img src={logos} alt="Dugem Logo" width={100}/></a>
                </div>
                {/* <!-- LOGO END --> */}
            </div>
            <div class="header-content-center clearfix">
                <nav class="main-nav">
                    <input id="main-menu-state" type="checkbox" />
                    <label class="main-menu-btn sub-menu-trigger" for="main-menu-state">
                        <span class="main-menu-btn-icon"></span> Toggle main menu visibility
                    </label>
                    <ul id="main-menu" class="sm sm-clean">
                        <li class="menu-item"><a href="index.html" class="menu-link active">Home</a></li>
                        <li class="menu-item"><a href="about.html" class="menu-link">About</a></li>
                        <li class="menu-item"><a href="event.html" class="menu-link">Event</a></li>
                        <li class="menu-item"><a href="blog.html" class="menu-link">News</a></li>
                        <li class="menu-item"><a href="contact.html" class="menu-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
            {/* <div class="header-content-right">
                <div class="header-info head-item clearfix">
                    <div class="info-wrap">
                        <div class="search-wrap">
                            <button id="btn-search" class="btn btn--search"><i class="icon-simple-line-icons-143"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search">
                <button id="btn-search-close" class="btn--search-close"><i class="icon-themify-1"></i></button>
                <form class="search__form">
                    <input class="search__input" name="search" type="search" placeholder="Search..." />
                    <span class="search__info">Hit enter to search or ESC to close</span>
                </form>
            </div> */}
        </div>
    </div>
</div>
</header>)
}
export default Header