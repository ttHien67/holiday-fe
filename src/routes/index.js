import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
