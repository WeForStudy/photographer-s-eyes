import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import HeaderItem from './HeaderItem';
import navs from '../const/navs';

export default function Header() {
    let [headerClassArr, setHeaderClassArr] = useState(['header--wrapper'])
    const location = useLocation()

    useEffect(() => {
      // runs on location, i.e. route, change
      const { pathname } = location;
      if (pathname === '/home') {
        headerClassArr.push('is-home');
        setHeaderClassArr([...headerClassArr, 'is-home'])
      } else {
        setHeaderClassArr(headerClassArr.filter(headerClass => headerClass !== 'is-home'));
      }
    }, [location])
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
