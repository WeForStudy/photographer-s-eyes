
import React, { useState } from 'react';
import './cityscape.scss';
import { getCityscapeImgs } from '../../apis/cityscape';
import { useImgs } from '../../hooks/imgs';
import { ImageType } from '../../types/ImageType';

export default function Cityscape() {
    const [imgs] = useImgs([], getCityscapeImgs);
    const [currentImgShowIndex, setCurrentImgShowIndex] = useState<number>(0);
    function handleImageClick(img: ImageType, isEven: boolean) {
        // console.log(currentImgShowIndex);
        // setInterval(() => {
        //     console.log('from timer', currentImgShowIndex);
        // }, 1000);
        const gap: number = 2;
        if (isEven) {
            if (currentImgShowIndex !== 0) {
                setCurrentImgShowIndex(currentImgShowIndex - gap);
            }
        } else {
            if (currentImgShowIndex < imgs.length - gap) {
                setCurrentImgShowIndex(currentImgShowIndex + gap);
            }
        }
    }
    return (
        <div className="cityscape--wrapper func--full-height">
            <div className="pics">
                {
                    imgs.map((image, idx) => {
                        const isEven = idx % 2 === 0;
                        const classNames: string[] = [];
                        classNames.push(isEven ? 'left' : 'right');
                        if (currentImgShowIndex === idx || currentImgShowIndex + 1 === idx) {
                            classNames.push('is-show');
                        }
                        return <img key={image.src} src={image.src} onClick={() => handleImageClick(image, isEven)} alt="Opps." className={classNames.join(' ')} />
                    })
                }
            </div>
        </div>
    )
}
