
import React, { useState } from 'react';
import './lifescape.scss';
import { getLifescapeImgs } from '../../apis/lifescape';
import { useImgs } from '../../hooks/imgs';
import { ImageType } from '../../types/ImageType';

export default function Lifescape() {
    const [imgs] = useImgs([], getLifescapeImgs);
    const [currentImgShowIndex, setCurrentImgShowIndex] = useState<number>(0);
    function handleImageClick(img: ImageType, isEven: boolean) {
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
        <div className="lifescape--wrapper func--full-height">
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
