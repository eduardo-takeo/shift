import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <ul className={style.linkList}>
                <Link to="/">
                    <li className={style.link}>General</li>
                </Link>
                <Link to="/business">
                    <li className={style.link}>Business</li>
                </Link>
                <Link to="/entertainment">
                    <li className={style.link}>Entertainment</li>
                </Link>
                <Link to="/health">
                    <li className={style.link}>Health</li>
                </Link>
                <Link to="/science">
                    <li className={style.link}>Science</li>
                </Link>
                <Link to="/technology">
                    <li className={style.link}>Technology</li>
                </Link>
                <Link to="/sports">
                    <li className={style.link}>Sports</li>
                </Link>
            </ul>
            <span className={style.copyright}>Shift	&copy; - All rights reserved</span>
        </footer>
    )
}

export default Footer;