import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';
import PacketDetailPage from '../pages/PacketDetail';

import PacketManagement from '@/pages/Management/PacketManage'

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage },
    { path: '/packet/:id', component: PacketDetailPage },
];

const privateRoutes = [
    {path: '/manage', component: PacketManagement}
];

export { publicRoutes, privateRoutes };
