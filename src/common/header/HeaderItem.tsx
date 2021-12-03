import React from 'react';
import { Link } from "react-router-dom";
import './header-item.scss';

export interface HeaderItemProp {
    title: string;
    to: string;
}

export default function HeaderItem(props: HeaderItemProp) {
    const { to, title } = props;
    return (
        <Link to={to} className="nav-item--wrapper">
            <div className="nav-item">{title}</div>
        </Link>
    )
}
