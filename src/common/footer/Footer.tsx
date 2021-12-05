import React from 'react';
import './footer.scss';

export default function Footer() {
  const icons = [
    {
      src: './icons/500px.svg',
      title: '500px',
      link: 'https://500px.com.cn/community/user-details/d51181108439d8025c243823370d39218',
    },
    {
      src: './icons/instagram.svg',
      title: 'Instagram',
      link: 'https://500px.com.cn/community/user-details/d51181108439d8025c243823370d39218',
    },
    {
      src: './icons/sina.svg',
      title: 'Sina Weibo',
      link: 'https://500px.com.cn/community/user-details/d51181108439d8025c243823370d39218',
    },
  ];
  const handleIconImgClick = (link: string) => {
    window.open(link);
  }
  return(
    <div className="footer--wrapper">
        <section className="top">
          <div className="contact-me--wrapper">
            <div className="title">联系我</div>
            <div className="content">
              <a href="mailto:haoranjiang@gmail.com">HAORAOJIANG@GMAIL.COM</a>
              <img className="icon-item" src={icons[0].src} onClick={() => handleIconImgClick(icons[0].link)} alt={icons[0].title} />
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
              <img className="submit-icon-item" src={icons[0].src} onClick={() => handleIconImgClick(icons[0].link)} alt={icons[0].title} />
            </div>
            <button className="subscribe-button">订阅</button>
          </div>
        </section>
        <div className="copyright">
          COPYRIGHT 2021 HAORAN JIANG, ALL RIGHTS RESERVED
        </div>
    </div>
  )
}
