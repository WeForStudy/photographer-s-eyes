import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import HeaderItem from './HeaderItem';
import HeaderSelect from './HeaderSelect';
import navs from '../const/navs';

export default function Header() {
    const location = useLocation();
    let headerClassArr: string[] = ['header--wrapper'];
    // // runs on location, i.e. route, change
    const { pathname } = location;
    if (pathname === '/') {
      !(headerClassArr.includes('is-home')) && headerClassArr.push('is-home');

    } else {
      headerClassArr = headerClassArr.filter(headerClass => headerClass !== 'is-home');
    }
  
    return (
        <header className={headerClassArr.join(' ')}>
            <div className="logo" ><Link to="/">Haoran Jiang</Link></div>
            <div className="nav-list--wrapper">
                {
                    navs.map(nav => !nav.children ? <HeaderItem key={nav.to} to={nav.to} title={nav.title}></HeaderItem> : <HeaderSelect key={nav.title} children={nav.children} title={nav.title}></HeaderSelect>)
                }
            </div>
        </header>
    )
}
