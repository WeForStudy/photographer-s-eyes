import React from 'react';
import Carousel from 'nuka-carousel';
import './home.scss';

export default function Home() {
    return (
        <div className="home--wrapper">
            <div className="controlers--wrapper"></div>
            <Carousel
                heightMode={'first'}
                autoplay={true}
                autoplayReverse={true}
                autoplayInterval={3000}
                defaultControlsConfig = {
                    {
                        // hidden the paging-dots by class
                        pagingDotsContainerClassName: 'paging-dots--container',
                        prevButtonText: ' ',
                        prevButtonClassName: 'prev-button iconfont icon-arrow-left-bold',
                        nextButtonText: ' ',
                        nextButtonClassName: 'next-button iconfont icon-arrow-right-bold',
                    }
                }
                speed={1500}
            >
                <img src="./imgs/bg-2.jpeg" alt="Opps."/>
                <img src="./imgs/bg-4.jpeg" alt="Opps."/>
            </Carousel>
            <span className="iconfont icon-arrow-left-bold"></span>
        </div>
    )
}
