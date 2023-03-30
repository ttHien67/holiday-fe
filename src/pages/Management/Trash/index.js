import Button from '@/components/Button';
import PacketDeletedServices from '@/services/PacketDeletedServices';
import PacketServices from '@/services/PacketServices';
import { useState, useEffect } from 'react';

function Trash() {
    const [packets, setPackets] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const document = await PacketDeletedServices.getAll();
            setPackets(document);
        };

        fetchApi();
    });

    const handleDelete = async (id) => {
        try {
            await PacketDeletedServices.delete(id);
        } catch (error) {
            alert(error);
        }
    };

    const handleRestore = async (data) => {
        try {
            await PacketServices.create(data);
            handleDelete(data._id);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="manage-container">
            <h1 className="manage-title text-success">Trash</h1>

            <Button to="/manage/packets" type="button" className="btn btn-outline-primary manage-btn">
                Home
            </Button>

            <table className="table table-hover">
                <thead>
                    <tr className="manage-header-table">
                        <th>ID</th>
                        <th>Images</th>
                        <th>Icons</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Type</th>
                        <th>Old Price</th>
                        <th>New Price</th>
                        <th>Description</th>
                        <th>Color Button</th>
                        <th>Color Icon</th>
                        <th>Quantity</th>
                        <th>Departure</th>
                        <th>End</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="manage-text-table">
                    {packets.map((packet) => {
                        return (
                            <tr key={packet._id}>
                                <td></td>
                                <td>
                                    <img
                                        src={require(`src/assets` + packet.img)}
                                        alt={packet.title}
                                        style={{ width: '100px' }}
                                    />
                                </td>
                                <td>
                                    <img
                                        src={require(`src/assets` + packet.logo)}
                                        alt={packet.title}
                                        style={{ width: '100px', backgroundColor: '#999' }}
                                    />
                                </td>
                                <td> {packet.title}</td>
                                <td>{packet.location}</td>
                                <td>{packet.type}</td>
                                <td>{packet.oldPrice}</td>
                                <td>{packet.newPrice}</td>
                                <td>{packet.description}</td>
                                <td>{packet.colorBtn}</td>
                                <td>{packet.colorIcon}</td>
                                <td>{packet.quantityTicket}</td>
                                <td>{packet.departureTime}</td>
                                <td>{packet.endTime}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger manage-btn"
                                        data-toggle="modal"
                                        data-target="#deleteModal"
                                        onClick={() => handleDelete(packet._id)}
                                    >
                                        Delete
                                    </button>

                                    <Button
                                        to={'/manage/trash'}
                                        type="button"
                                        className="btn btn-outline-primary manage-btn"
                                        onClick={() => handleRestore(packet)}
                                    >
                                        Restore
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Trash;
