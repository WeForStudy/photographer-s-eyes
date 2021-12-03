import React from 'react';
import './header-select.scss';
import { HeaderItemProp } from './HeaderItem';
import HeaderItem from './HeaderItem';

interface HeaderSelectProps {
  title: string;
  children: HeaderItemProp[];
}

export default function HeaderSelect(props: HeaderSelectProps) {
  const { title, children } = props;
  return (
    <div className="header-select--wrapper">
      <div className="nav-title">{title}<span className="iconfont icon icon-arrow-right-bold"></span>
      </div>
      <div className="nav-subitem--wrapper">
        {
          children.map(child => <HeaderItem key={child.to} to={child.to} title={child.title}></HeaderItem>)
        }
      </div>
    </div>
  )
}