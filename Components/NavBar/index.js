import React from 'react'
import css from "./style.module.css";

function NavBar () {
    return (
        <nav className={css.nav}>
        <div>Home </div>
        <div>About me</div>
        <div>Projects</div>
        <div>Contact me</div>
      </nav>
    )
}

export default NavBar