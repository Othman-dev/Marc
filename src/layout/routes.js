import Sixieme from '../viewsAccount/Sixieme/Sections/Geography';
import Cinquieme from '../viewsAccount/Cinquieme/Cinquieme';
import Quatrieme from '../viewsAccount/Quatrieme/Quatrieme';
import Troisieme from '../viewsAccount/Troisieme/Troisieme';


let routes = [

    {
        name: 'Sixieme',
        path: "/sixieme/geography",
        component: Sixieme,
        layout: '/account'
    },
    {
        name: 'Cinquieme',
        path: "/cinquieme/geography",
        component: Cinquieme,
        layout: '/account'
    },
    {
        name: 'Quatrieme',
        path: "/quatrieme/geography",
        component: Quatrieme,
        layout: '/account'

    },
    {
        name: 'Troisieme',
        path: "/troisieme/geography",
        component: Troisieme,
        layout: '/account'
    },
];
export default routes;
