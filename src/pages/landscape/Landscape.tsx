import React from 'react';
import SlidePage from '../../components/sider-page/SliderPage';
import { getLandscapeImgs } from '../../apis/landscape';
import { useImgs } from '../../hooks/imgs';

export default function Landscape() {

    const [imgs] = useImgs([], getLandscapeImgs);
    return (
        <SlidePage imgs={imgs}></SlidePage>
    )
}
