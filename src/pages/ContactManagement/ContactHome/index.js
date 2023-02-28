import ContactServices from '@/services/ContactServices';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ContactManagement() {
    const [contacts, setContacts] = useState([]);
    const [deleteContactID, setDeleteContactID] = useState('');

    // fetch api contacts
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await ContactServices.getAll();
                setContacts(data);
            } catch (error) {
                alert(error);
            }
        };

        fetchApi();
    });

    const handleSendID = (e) => {
        setDeleteContactID(e.target.id);
    };

    const handleDelete = async (id) => {
        try {
            await ContactServices.delete(id);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <div className="manage-container">
                <h1 className="manage-title text-success">Manage Contacts</h1>

                <Button type="button" to="/manage/contact/add" className="btn btn-outline-primary manage-btn">
                    Add
                </Button>

                <table className="table table-hover">
                    <thead>
                        <tr className="manage-header-table">
                            <th>No</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Message</th>
                            <th>Quantity</th>
                            <th>Packet ID</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="manage-text-table">
                        {contacts.map((contact, index) => {
                            return (
                                <tr key={contact._id}>
                                    <td>{index + 1}</td>
                                    <td>{contact.fullName}</td>
                                    <td>{contact.email}</td>
                                    <td> {contact.phone}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.message}</td>
                                    <td>{contact.quantity}</td>
                                    <td>{contact.packetID}</td>
                                    <td>{contact.date}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger manage-btn"
                                            data-toggle="modal"
                                            data-target="#deleteModal"
                                            id={contact._id}
                                            onClick={handleSendID}
                                        >
                                            Delete
                                        </button>

                                        <Button
                                            to={`/manage/contact/edit/` + contact._id}
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
                                Delete contact
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <FontAwesomeIcon icon={faXmark} />
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">Do you want to delete contact?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => handleDelete(deleteContactID)}
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

export default ContactManagement;
