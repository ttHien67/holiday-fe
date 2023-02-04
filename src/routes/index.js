import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';
import PacketDetailPage from '../pages/PacketDetail';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage },
    { path: '/packet/:id', component: PacketDetailPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
