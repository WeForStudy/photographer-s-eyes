import React from 'react';
import Carousel from 'nuka-carousel';
import './home.scss';

export default function Home() {
    const imgs = [
        {
            src: './imgs/bg-2.jpeg',
        },
        {
            src: './imgs/bg-3.jpeg',
        },
        {
            src: './imgs/bg-4.jpeg',
        }
    ];
    return (
        <div className="home--wrapper">
            <div className="controlers--wrapper"></div>
            {/* autoplay={true}
                autoplayReverse={true}
                autoplayInterval={3000} */}
            <Carousel
                heightMode={'first'}
               
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
                {
                    imgs.map(image => (<img src={image.src} alt="Opps."/>))
                }
            </Carousel>
        </div>
    )
}
