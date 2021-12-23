
import React from 'react';
import Carousel from 'nuka-carousel';
import './slider-page.scss';

export default function SlidePage(props: any) {
    const { imgs } = props;
    
    return (
        <div className="slider-page--wrapper func--full-height">
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
                    imgs.map((image: any) => (<img key={image.src} src={image.src} alt="Opps."/>))
                }
            </Carousel>
        </div>
    )
}

// SlidePage.propTypes = {
//   imgs: Array<ImageType>()
// }
