import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import HeaderItem from './HeaderItem';
import navs from '../const/navs';

// interface HeaderProps {
//     isHomepage: boolean;
// }

// #TODO fix is home class
export default function Header() {
    const headerClassArr = ['header-wrapper'];
    headerClassArr.push('is-home');
    return (
        <header className={headerClassArr.join(' ')}>
            <div className="logo" ><Link to="/home">Haoran Jiang</Link></div>
            <div className="nav-list--wrapper">
                {
                    navs.map(nav => <HeaderItem key={nav.to} nav={nav}></HeaderItem>)
                }
            </div>
        </header>
    )
}
