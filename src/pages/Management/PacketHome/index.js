import PacketServices from '@/services/PacketServices';
import PacketDeletedServices from '@/services/PacketDeletedServices';
import './PacketHome.scss';
import Button from '@/components/Button';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';


function PacketManage() {
    const [packets, setPackets] = useState([]);
    const [packetDeleted, setPacketDeleted] = useState([]);

    //fetch api pakcets
    useEffect(() => {
        const fetch = async () => {
            const result = await PacketServices.getAll();
            setPackets(result);
        };
        fetch();
    }, []);

    //
    const handleSendPacket = (e) => {
        const data = JSON.parse(e.target.value);
        setPacketDeleted(data);
    };

    // Delete soft packet
    const handleDeleteSoft = async (data) => {
        try {
            await PacketDeletedServices.create(data);
            await PacketServices.delete(data._id);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <div className="manage-container">
                <h1 className="manage-title text-success">Manage Packets</h1>

                <div className="manage-icon">
                    <Button to="/manage/packet/add" type="button" className="btn btn-outline-primary manage-btn">
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <Button to="/manage/trash" type="button" className="btn btn-outline-primary manage-btn">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                </div>

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
                                            value={JSON.stringify(packet)}
                                            onClick={handleSendPacket}
                                        >
                                            Delete
                                        </button>

                                        <Button
                                            to={`/manage/packet/edit/` + packet._id}
                                            type="button"
                                            className="btn btn-outline-warning manage-btn"
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div
                className="modal fade"
                id="deleteModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete packet
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <FontAwesomeIcon icon={faXmark} />
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">Do you want to delete packet?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Cancle
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleDeleteSoft(packetDeleted)}
                                data-dismiss="modal"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PacketManage;
