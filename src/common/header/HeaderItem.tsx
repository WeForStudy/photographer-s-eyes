import React from 'react';
import { Link } from "react-router-dom";
import './header-item.scss';

interface HeaderItemNavProp {
    title: string;
    to: string;
}
interface HeaderItemProp {
    nav: HeaderItemNavProp;
}

export default function HeaderItem(props: HeaderItemProp) {
    const { nav } = props;
    return (
        <Link to={nav.to} className="nav-item--wrapper">
            <div className="nav-item">{nav.title}</div>
        </Link>
    )
}
