import React from 'react';
import './footer.scss';
import { email } from '../const/email'; 

export default function Footer() {
  const icons = [
    {
      src: './icons/500px.svg',
      title: '500px',
      link: 'https://500px.com.cn/community/user-details/d51181108439d8025c243823370d39218',
    },
    {
      src: './icons/tuchong.png',
      title: 'Tuchong',
      link: 'https://haoranxiansheng.tuchong.com/',
    },
    // {
    //   src: './icons/sina.svg',
    //   title: 'Sina Weibo',
    //   link: 'https://500px.com.cn/community/user-details/d51181108439d8025c243823370d39218',
    // },
  ];
  const handleIconImgClick = (link: string) => {
    window.open(link);
  }
  function handleSubmit() {

  }
  return(
    <div className="footer--wrapper">
        <section className="top">
          <div className="contact-me--wrapper">
            <div className="title">联系我</div>
            <div className="content">
              <a href={`mailto:${email}`}>
                <div className="text">HAORAOJIANG</div>
                <img className="icon-item" src={"./icons/email.svg"} alt={icons[0].title} />
              </a>
            </div>
          </div>
          <div className="follow-me--wrapper">
            <div className="title">关注我</div>
            <div className="content">
              {
                icons.map(icon => <img className="icon-item" key={icon.src} src={icon.src} onClick={() => handleIconImgClick(icon.link)} alt={icon.title} />)
              }
            </div>
          </div>
          <div className="subscribe-me--wrapper">
            <div className="title">订阅最新消息</div>
            <div className="input--wrapper">
              <input type="text" className="subscribe-input" placeholder="请输入您的邮箱" />
              <img className="submit-icon-item" src={"./icons/submit.svg"} onClick={() => handleSubmit()} alt={icons[0].title} />
            </div>
            <button className="subscribe-button" onClick={() => handleSubmit()} >订阅</button>
          </div>
        </section>
        <div className="copyright">
          COPYRIGHT 2021 HAORAN JIANG, ALL RIGHTS RESERVED
        </div>
    </div>
  )
}
