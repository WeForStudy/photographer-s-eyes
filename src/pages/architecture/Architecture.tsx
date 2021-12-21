
import React, { useState,  useEffect, useRef } from 'react';
import Carousel from 'nuka-carousel';
import './architecture.scss';
import { getArchitectureImgs } from '../../apis/architecture';
import { ImageType } from '../../types/ImageType';
import { useInterval } from '../../hooks/interval';

const DURATION: number = 5000;
const INTIAL_IMG_CURRENT_INDEX =  0;

export default function Architecture() {

    useEffect(() => {
        getArchitectureImgs().then((res: any ) => {
            setImgs(res);
        });
    }, []);

    const [imgs, setImgs] = useState<Array<ImageType> >([]);
    const [imgCurrentIndex, setImgCurrentIndex] = useState<number>(INTIAL_IMG_CURRENT_INDEX);
    useInterval(() => {
        if (imgCurrentIndex < imgs.length - 1) {
            setImgCurrentIndex(imgCurrentIndex + 1);
        } else {
            setImgCurrentIndex(INTIAL_IMG_CURRENT_INDEX);
        }
    },  DURATION);
    
    return (
        <div className="architecture--wrapper func--full-height">
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
            {/* {
                imgs.map((image, index) => {
                    const classes = ['img'];
                    if (imgCurrentIndex === index) classes.push('is-show');
                    return (<img key={image.src} className={classes.join(' ')} src={image.src} alt="Opps."/>)
                })
            } */}
        </div>
    )
}
