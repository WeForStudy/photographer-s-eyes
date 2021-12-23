
import React from 'react';
import SlidePage from '../../components/sider-page/SliderPage';

import { getArchitectureImgs } from '../../apis/architecture';
import { useImgs } from '../../hooks/imgs';

export default function Architecture() {
    const [imgs] = useImgs([], getArchitectureImgs);

    return (
        <SlidePage imgs={imgs}></SlidePage>
    )
}
