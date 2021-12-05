import React, { useState, useEffect } from 'react';
import './landscape.scss';
import { getLandscapeImgs } from '../../apis/landscape';
import { useImgs } from '../../hooks/imgs';
import Carousel from 'nuka-carousel';

interface ImageType {
    src: string,
}

export default function Landscape() {

    const [imgs] = useImgs([], getLandscapeImgs);
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
