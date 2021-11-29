import React from 'react';
import Carousel from 'nuka-carousel';
import './home.scss';

export default function Home() {
    return (
        <div className="home--wrapper">
            <Carousel>
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
                <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
            </Carousel>
        </div>
    )
}
