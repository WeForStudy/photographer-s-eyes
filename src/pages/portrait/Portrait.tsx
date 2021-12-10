
import React, { useState, useEffect } from 'react';
import './portrait.scss';
import { getPortraitImgs } from '../../apis/portrait';
import { useImgs } from '../../hooks/imgs';
import { ImageType } from '../../types/ImageType';

export default function Portrait() {
    const [imgs] = useImgs([], getPortraitImgs);
    const [leftArrs, setLeftArrs] = useState<Array<ImageType>>([]);
    const [rightArrs, setRightArrs] = useState<Array<ImageType>>([]);
    const [currentImgShowIndex, setCurrentImgShowIndex] = useState<number>(0);
    function handleImageClick(img: ImageType, isEven: boolean) {
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
    useEffect(() => {
        imgs.forEach((image, index) => {
            const isEven = index % 2 === 0;
            if (isEven) {
                leftArrs.push(image);
            } else {
                rightArrs.push(image);
            }
        });
        setLeftArrs([...leftArrs]);
        setRightArrs([...rightArrs]);
    }, [imgs]);
    return (
        <div className="portrait--wrapper func--full-height">
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
                {/* {
                    imgs.map((image, idx) => {
                        const isEven = idx % 2 === 0;
                        let className: string = isEven ? 'left' : 'right';
                        const imgClassNames: string[] = ['img'];
                        if (currentImgShowIndex === idx || currentImgShowIndex + 1 === idx) {
                            imgClassNames.push('is-show');
                        }
                        return <img key={image.src} src={image.src} onClick={() => handleImageClick(image, isEven)} alt="Opps." className={imgClassNames.join(' ')} />
                    })
                } */}
            </div>
        </div>
    )
}
