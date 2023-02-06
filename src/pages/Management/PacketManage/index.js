// import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import PacketServices from '@/services/PacketServices';
import './PacketManage.scss'

function PacketManage() {
    const [packets, setPackets] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await PacketServices.getAll();
            setPackets(result);
        };
        fetch();
    }, []);

    return (
        <div className='manage-container'>
            <h1 className="manage-title text-success">
                Manage Packets
            </h1>

            <a
                href="./add_package.php"
                type="button"
                className="btn btn-outline-primary manage-btn"
            >
                Add
            </a>

            <table className="table table-hover">
                <thead>
                    <tr className='manage-header-table'>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody className='manage-text-table'>
                    {packets.map((packet) => {
                        return (
                            <tr key={packet._id}>
                                <td></td>
                                <td>
                                    <img src={require(`src/assets` + packet.img)} alt={packet.title} style={{width: '100px'}} />
                                </td>
                                <td>
                                    <img src={require(`src/assets` + packet.logo)} alt={packet.title} style={{width: '100px'}} />
                                </td>
                                <td> {packet.title}</td>
                                <td>{packet.location}</td>
                                <td>{packet.type}</td>
                                <td>{packet.oldPrice}</td>
                                <td>{packet.newPrice}</td>
                                <td>{packet.description}</td>
                                <td>{packet.colorBtn}</td>
                                <td>{packet.colorIcon}</td>
                                <td>
                                    <a
                                        href=""
                                        type="button"
                                        className="btn btn-outline-danger manage-btn"
                                    >
                                        Delete
                                    </a>
                                    <a
                                        href="."
                                        type="button"
                                        className="btn btn-outline-warning manage-btn"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PacketManage;
