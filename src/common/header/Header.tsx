import React, { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import HeaderItem from './HeaderItem';
import HeaderSelect from './HeaderSelect';
import navs from '../const/navs';

export default function Header() {
    let [headerClassArr, setHeaderClassArr] = useState(['header--wrapper'])
    const location = useLocation()

    useLayoutEffect(() => {
      // runs on location, i.e. route, change
      const { pathname } = location;
      if (pathname === '/') {
        !(headerClassArr.includes('is-home')) && headerClassArr.push('is-home');
        setHeaderClassArr([...headerClassArr]);
      } else {
        setHeaderClassArr(headerClassArr.filter(headerClass => headerClass !== 'is-home'));
      }
    }, [location]);
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
