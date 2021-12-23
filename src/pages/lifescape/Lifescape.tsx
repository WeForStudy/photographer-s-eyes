
import React, { useState } from 'react';
import './lifescape.scss';
import { getLifescapeImgs } from '../../apis/lifescape';
import { useImgs } from '../../hooks/imgs';
import { ImageType } from '../../types/ImageType';

export default function Portrait() {
    const [imgs] = useImgs([], getLifescapeImgs);
    const [currentImgShowIndex, setCurrentImgShowIndex] = useState<number>(0);
    function handleImageClick(_: ImageType, isEven: boolean) {
        const gap: number = 1;
        if (isEven) {
            if (currentImgShowIndex > 0) {
                setCurrentImgShowIndex(currentImgShowIndex - gap);
            }
        } else {
            if (currentImgShowIndex < leftArrs.length - gap) {
                setCurrentImgShowIndex(currentImgShowIndex + gap);
            }
        }
    }
    const leftArrs: Array<ImageType> = [];
    const rightArrs: Array<ImageType> = [];
    imgs.forEach((image, index) => {
        const isEven = index % 2 === 0;
        if (isEven) {
            leftArrs.push(image);
        } else {
            rightArrs.push(image);
        }
    });
    return (
        <div className="lifescape--wrapper func--full-height">
            <div className="pics">
            <div className="left">
                {
                    leftArrs.map((image, idx) => {
                        const imgClassNames: string[] = ['img'];
                        if (currentImgShowIndex === idx) {
                            imgClassNames.push('is-show');
                        }
                        return <img key={image.src} src={image.src} onClick={() => handleImageClick(image, true)} alt="Opps." className={imgClassNames.join(' ')} />
                    })
                }
            </div>
            <div className="right" >
            {
                    rightArrs.map((image, idx) => {
                        const imgClassNames: string[] = ['img'];
                        if (currentImgShowIndex === idx) {
                            imgClassNames.push('is-show');
                        }
                        return <img key={image.src} src={image.src} onClick={() => handleImageClick(image, false)} alt="Opps." className={imgClassNames.join(' ')} />
                    })
            }
            </div>
            </div>
        </div>
    )
}
