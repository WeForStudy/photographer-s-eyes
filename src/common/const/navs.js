import Home from '../../pages/home/Home';
import Landscape from '../../pages/landscape/Landscape';
import Cityscape from '../../pages/cityscape/Cityscape';
import Architecture from '../../pages/architecture/Architecture';
import Portrait from '../../pages/portrait/Portrait';
import Commercial from '../../pages/commercial/Commercial';
import Lifescape from '../../pages/lifescape/Lifescape';

const navs = [
    {
        title: '首页',
        to: 'home',
        element: Home,
    },
    {
        title: '图库',
        children: [
            {
                title: '风光',
                to: 'landscape',
                element: Landscape,
            },
            {
                title: '城市',
                to: 'cityscape',
                element: Cityscape,
            },
            {
                title: '建筑',
                to: 'architecture',
                element: Architecture,
            },
            {
                title: '人像',
                to: 'portrait',
                element: Portrait,
            },
            {
                title: '商业',
                to: 'commercial',
                element: Commercial,
            },
            {
                title: '生活',
                to: 'lifescape',
                element: Lifescape,
            },
        ]
    },
    {
        title: '项目',
        children: [
            // {
            //     title: '风光',
            //     to: 'landscape',
            //     element: Landscape,
            // },
            // {
            //     title: '城市',
            //     to: 'cityscape',
            //     element: Cityscape,
            // },
            // {
            //     title: '建筑',
            //     to: 'architecture',
            //     element: Architecture,
            // },
            // {
            //     title: '人像',
            //     to: 'portrait',
            //     element: Portrait,
            // },
            // {
            //     title: '商业',
            //     to: 'commercial',
            //     element: Commercial,
            // },
            // {
            //     title: '生活',
            //     to: 'lifescape',
            //     element: Lifescape,
            // },
        ]
    },
    {
        title: '合作',
        to: '/contact',
    }
];
export default navs;
