import './AddPacket.scss';
import PacketServices from '@/services/PacketServices';
import PacketForm from '@/components/PacketForm'

function AddPacket() {

    const handleCommit = async (data) => {
        try {
            await PacketServices.create(data);
            alert('Your packet has been created');
        } catch (error) {
            alert(error);
        }
    };

    

    return (
        <div className="packet-modifying-container">
            <h1 className="packet-modifying-title text-success">Add Packet</h1>

            <PacketForm onCommit={handleCommit}/>
        </div>
    );
}

export default AddPacket;
