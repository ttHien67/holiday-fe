import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';
import PacketDetailPage from '../pages/PacketDetail';
import ContactForm from '@/pages/ContactForm'

import PacketManagement from '@/pages/Management/PacketManage'
import AddPacket from '@/pages/Management/AddPacket'
import EditPacket from '@/pages/Management/EditPacket'

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage },
    { path: '/packet/:id', component: PacketDetailPage },
    
    { path: '/packet/contact/:id', component: ContactForm },
    { path: '/packet/contact', component: ContactForm },
];

const privateRoutes = [
    {path: '/manage/packets', component: PacketManagement},
    {path: '/manage/packet/add', component: AddPacket},
    {path: '/manage/packet/edit/:id', component: EditPacket},
];

export { publicRoutes, privateRoutes };
