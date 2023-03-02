import HomePage from '../pages/Home';
import PacketsPage from '../pages/Pakets';
import PacketDetailPage from '../pages/PacketDetail';
import ContactForm from '@/pages/Contact';

import PacketManagement from '@/pages/Management/PacketHome';
import Trash from '@/pages/Management/Trash'
import AddPacket from '@/pages/Management/AddPacket';
import EditPacket from '@/pages/Management/EditPacket';

import ContactManagement from '@/pages/ContactManagement/ContactHome';
import ContactMaking from '@/pages/ContactManagement/ContactMaking';
import ContactEdition from '@/pages/ContactManagement/ContactEdition';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/packets', component: PacketsPage },
    { path: '/packets/:id', component: PacketsPage },
    { path: '/packet/:id', component: PacketDetailPage },

    { path: '/contact/:id', component: ContactForm },
    { path: '/contact', component: ContactForm },
];

const privateRoutes = [
    { path: '/manage/packets', component: PacketManagement },
    { path: '/manage/trash', component: Trash },
    { path: '/manage/packet/add', component: AddPacket },
    { path: '/manage/packet/edit/:id', component: EditPacket },

    { path: '/manage/contacts', component: ContactManagement },
    { path: '/manage/contact/add', component: ContactMaking },
    { path: '/manage/contact/edit/:id', component: ContactEdition },
];

export { publicRoutes, privateRoutes };
