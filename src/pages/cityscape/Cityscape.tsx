
import React from 'react';
import './cityscape.scss';
import { getCityscapeImgs } from '../../apis/cityscape';
import { useImgs } from '../../hooks/imgs';
import Carousel from 'nuka-carousel';

export default function Cityscape() {
    const [imgs] = useImgs([], getCityscapeImgs);
    return (
        <div className="cityscape--wrapper func--full-height">
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
