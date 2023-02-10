import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';
import PacketDetailPage from '../pages/PacketDetail';

import PacketManagement from '@/pages/Management/PacketManage'
import AddPacket from '@/pages/Management/AddPacket'

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage },
    { path: '/packet/:id', component: PacketDetailPage },
];

const privateRoutes = [
    {path: '/manage/packets', component: PacketManagement},
    {path: '/manage/packet/add', component: AddPacket},
];

export { publicRoutes, privateRoutes };
