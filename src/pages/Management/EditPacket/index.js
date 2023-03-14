import PacketServices from '@/services/PacketServices';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastSuccess, toastError } from '@/hooks/useToast';

import PacketForm from '@/components/PacketForm';

function EditPacket() {
    const [packetEdition, setPacketEdition] = useState({});

    const { id } = useParams('/manage/packet/edit');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await PacketServices.get(id);
            setPacketEdition(result);
        };
        fetchApi();
    }, [id]);

    const handleCommit = async (data) => {
        try {
            await PacketServices.update(id, data);
            toastSuccess('Your packet has been updated');
        } catch (error) {
            toastError(error);
        }
    };

    return (
        <>
            <Toaster toastOptions={{ style: { fontSize: '1.4rem' } }} />

            <div className="packet-modifying-container">
                <h1 className="packet-modifying-title text-success">Edit Packet</h1>

                <PacketForm packetEdition={packetEdition} onCommit={handleCommit} />
            </div>
        </>
    );
}

export default EditPacket;
