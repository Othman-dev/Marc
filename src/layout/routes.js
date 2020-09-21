import Sixieme from '../viewsAccount/Sixieme/Sections/Geography';
import Cinquieme from '../viewsAccount/Cinquieme/Sections/Geography';
import Quatrieme from '../viewsAccount/Quatrieme/Sections/Geography';
import Troisieme from '../viewsAccount/Troisieme/Sections/Geography';
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
