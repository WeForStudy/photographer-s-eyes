import React from 'react';
import './landscape.scss';
import Carousel from 'nuka-carousel';

export default function Landscape() {
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
        <div className="landscape--wrapper">
            <Carousel
                heightMode={'first'}
                transitionMode="fade"
                cellAlign="center"
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
                    imgs.map(image => (<img key={image.src} src={image.src} alt="Opps."/>))
                }
            </Carousel>
        </div>
    )
}
