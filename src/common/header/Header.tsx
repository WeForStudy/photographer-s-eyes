import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import HeaderItem from './HeaderItem';
import navs from '../const/navs';

export default function Header() {
    return (
        <header className="header-wrapper">
            <div className="logo" ><Link to="/home">Haoran Jiang</Link></div>
            <div className="nav-list--wrapper">
                {
                    navs.map(nav => <HeaderItem key={nav.to} nav={nav}></HeaderItem>)
                }
            </div>
        </header>
    )
}
