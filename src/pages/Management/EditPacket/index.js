
import PacketServices from '@/services/PacketServices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            alert('Your packet has been updated');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="packet-modifying-container">
            <h1 className="packet-modifying-title text-success">Edit Packet</h1>

            <PacketForm packetEdition={packetEdition} onCommit={handleCommit}/>
        </div>
    );
}

export default EditPacket;
