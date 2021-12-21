const navs = [
    {
        title: '首页',
        to: '/',
    },
    {
        title: '图库',
        children: [
            {
                title: '风光',
                to: '/landscape',
            },
            {
                title: '城市',
                to: '/cityscape',
            },
            {
                title: '建筑',
                to: '/architecture',
            },
            {
                title: '人像',
                to: '/portrait',
            },
            {
                title: '商业',
                to: '/commercial',
            },
            {
                title: '生活',
                to: '/lifescape',
            },
        ]
    },
    {
        title: '项目',
        to: '/project',
    },
    {
        title: '合作',
        to: '/contact',
    }
];
export default navs;
