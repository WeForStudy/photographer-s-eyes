
import React, { useState } from 'react';
import { getCommercialImgs } from '../../apis/commercial';
import { useImgs } from '../../hooks/imgs';
import './commercial.scss';
import Carousel from 'nuka-carousel';
import { ImageType } from '../../types/ImageType';

export default function Commercial() {
    const [imgs] = useImgs([], getCommercialImgs);
    const [isDialogueShow, setIsDialogueShow] = useState<Boolean>(false);
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const dialogueClassess = ['dialogue--wrapper'];
    if (isDialogueShow) {
        dialogueClassess.push('is-show')
    }
    function handleImageClick(image: ImageType, index: number) {
        setIsDialogueShow(true);
        setSlideIndex(index);
    }
    function handleDialogueClick(isInner: boolean = false, e?: any) {
        if (isInner) {
            e.stopPropagation();
        } else {
            setIsDialogueShow(false);
        }
    }
    return (
        <div className="commericial--wrapper func--full-height">
            <div className="preview--wrapper">
                {
                    imgs.map((image, index) => {
                        return (<div className="previewr--item" key={image.src} onClick={() => handleImageClick(image, index)} style={ {backgroundImage: `url(${image.src})`} }>
                        </div>)
                    })
                }
            </div>
            <div className={dialogueClassess.join(' ')} onClick={() => handleDialogueClick()}>
                <div className="dialogue--inner" onClick={(e) => handleDialogueClick(true, e)}>
                    <Carousel
                        heightMode={'first'}
                        slideIndex={slideIndex}
                        transitionMode={"fade"}
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
            </div>
        </div>
    )
}
