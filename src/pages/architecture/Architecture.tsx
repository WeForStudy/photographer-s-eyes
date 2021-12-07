
import React, { useState,  useEffect, useRef } from 'react';
import './architecture.scss';
import { getArchitectureImgs } from '../../apis/architecture';
import { ImageType } from '../../types/ImageType';
import { useInterval } from './interval';

const DURATION: number = 5000;
const INTIAL_IMG_CURRENT_INDEX =  0;
let TIMER: number = 0;


export default function Architecture() {
    const [imgs, setImgs] = useState<Array<ImageType> >([]);
    const [imgCurrentIndex, setImgCurrentIndex] = useState<number>(INTIAL_IMG_CURRENT_INDEX);

    // const intervalRef = useRef();
    // const callbackRef = useRef(changeCurrentIndex);
    const intervalRef = useInterval(() => {
        if (imgCurrentIndex < imgs.length - 1) {
            setImgCurrentIndex(imgCurrentIndex + 1);
        } else {
            // console.log('???');
            setImgCurrentIndex(INTIAL_IMG_CURRENT_INDEX);
        }
    },  DURATION);
    useEffect(() => {
        getArchitectureImgs().then((res: any ) => {
            setImgs(res);
        });
    }, []);

    // useEffect(() => {
    //     callbackRef.current = changeCurrentIndex;
    // }, [changeCurrentIndex]);

    // useEffect(() => {
    //     if (imgs.length) {
    //         // setTimer();
    //         // @ts-ignore
    //         useInterval(() => {
    //             if (imgCurrentIndex < imgs.length - 1) {
    //                 setImgCurrentIndex(imgCurrentIndex + 1);
    //             } else {
    //                 // console.log('???');
    //                 setImgCurrentIndex(INTIAL_IMG_CURRENT_INDEX);
    //             }
    //         }, DURATION);
    //         // intervalRef.current = window.setInterval(() => callbackRef.current());
    //     }
    //     return () => {
    //         window.clearInterval(intervalRef.current);
    //     }
    // }, [imgs]);
    // // const [imgs] = useImgs([], getArchitectureImgs, setTimer);
    // function changeCurrentIndex() {
    //     if (imgCurrentIndex < imgs.length - 1) {
    //         setImgCurrentIndex(imgCurrentIndex + 1);
    //     } else {
    //         // console.log('???');
    //         setImgCurrentIndex(INTIAL_IMG_CURRENT_INDEX);
    //     }
    // }
    // function setTimer() {
    //     TIMER = window.setInterval(() => {
            
    //     }, DURATION);
    // }

    return (
        <div className="architecture--wrapper func--full-height">
            {imgCurrentIndex}
            {
                imgs.map((image, index) => {
                    const classes = ['img'];
                    if (imgCurrentIndex === index) classes.push('is-show');
                    return (<img key={image.src} className={classes.join(' ')} src={image.src} alt="Opps."/>)
                })
            }
        </div>
    )
}
