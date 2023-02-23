import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';
import PacketDetailPage from '../pages/PacketDetail';
import ContactForm from '@/pages/Contact'

import PacketManagement from '@/pages/Management/PacketHome'
import AddPacket from '@/pages/Management/AddPacket'
import EditPacket from '@/pages/Management/EditPacket'

import ContactManagement from '@/pages/ContactManagement/ContactHome'

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage },
    { path: '/packet/:id', component: PacketDetailPage },
    
    { path: '/contact/:id', component: ContactForm },
    { path: '/contact', component: ContactForm },
];

const privateRoutes = [
    {path: '/manage/packets', component: PacketManagement},
    {path: '/manage/packet/add', component: AddPacket},
    {path: '/manage/packet/edit/:id', component: EditPacket},

    {path: '/manage/contacts', component: ContactManagement},
];

export { publicRoutes, privateRoutes };
