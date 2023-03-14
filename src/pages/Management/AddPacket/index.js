import PacketServices from '@/services/PacketServices';
import PacketForm from '@/components/PacketForm';

import { Toaster } from 'react-hot-toast';
import { toastSuccess, toastError } from '@/hooks/useToast';

function AddPacket() {
    const handleCommit = async (data) => {
        try {
            await PacketServices.create(data);
            toastSuccess('Your packet has been created');
        } catch (error) {
            toastError(error);
        }
    };

    return (
        <>
            <Toaster toastOptions={{ style: { fontSize: '1.4rem' } }} />

            <div className="packet-modifying-container">
                <h1 className="packet-modifying-title text-success">Add Packet</h1>

                <PacketForm onCommit={handleCommit} />
            </div>
        </>
    );
}

export default AddPacket;
