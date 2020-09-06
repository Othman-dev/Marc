import Sixieme from '../viewsAccount/Sixieme/Sixieme';
import Cinquieme from '../viewsAccount/Cinquieme/Cinquieme';
import Quatrieme from '../viewsAccount/Quatrieme/Quatrieme';
import Troisieme from '../viewsAccount/Troisieme/Troisieme';
import Board from './Board';


let routes = [
    {
        name: 'AJOUTER UN BOARD',
        path: '/board',
        component: Board,
        layout: '/account'
    },

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
    }
    
];
export default routes;
