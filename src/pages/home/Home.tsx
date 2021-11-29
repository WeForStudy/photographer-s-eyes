import React from 'react';
import Carousel from 'nuka-carousel';
import './home.scss';

export default function Home() {
    return (
        <div className="home--wrapper">
            <Carousel
                autoplay={true}
                autoplayReverse={true}
                heightMode={'first'}
                defaultControlsConfig = {
                    {
                        // hidden the paging-dots by class
                        pagingDotsContainerClassName: 'paging-dots--container',
                        prevButtonClassName: 'prev-button',
                        // prevButtonText: ' ',
                        nextButtonClassName: 'next-button',
                        // nextButtonText: ' ',
                    }
                }
                speed={1500}
            >
                <img src="./imgs/bg-2.jpeg" alt="Opps."/>
                {/* <img src="./imgs/bg.jpeg" alt="Opps."/> */}
                {/* <img src="./imgs/bg-3.jpeg" alt="Opps."/> */}
                <img src="./imgs/bg-4.jpeg" alt="Opps."/>
            </Carousel>
        </div>
    )
}
