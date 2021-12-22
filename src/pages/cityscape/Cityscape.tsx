
import React from 'react';
import SlidePage from '../../components/sider-page/SliderPage';
import { getCityscapeImgs } from '../../apis/cityscape';
import { useImgs } from '../../hooks/imgs';

export default function Cityscape() {
    const [imgs] = useImgs([], getCityscapeImgs);
    return (
        <SlidePage imgs={imgs}></SlidePage>
    )
}
