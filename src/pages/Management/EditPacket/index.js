import './EditPacket.scss';
import PacketServices from '@/services/PacketServices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditPacket() {
    const [packet, setPacket] = useState({});

    const { id } = useParams('/manage/packet/edit');

    useEffect(() => {
        const fetchApi = async () => {
            const result = await PacketServices.get(id);
            setPacket(result);
        };
        fetchApi();
    }, [id]);

    const handleCommit = async (e) => {
        try {
            await PacketServices.update(id, packet);
            alert('Your packet has been updated');
            e.preventDefault();
        } catch (error) {
            alert(error);
        }
    };

    const handlerReviewImage = (e, id) => {
        const imgReview = document.getElementById(id);

        imgReview.src = URL.createObjectURL(e.target.files[0]);
        imgReview.onload = function () {
            URL.revokeObjectURL(imgReview.src); // free memory
        };
    };

    return (
        <div className="packet-modifying-container">
            <h1 className="packet-modifying-title text-success">Edit Packet</h1>

            <form runat="server">
                <div className="input-group mb-3">
                    <div className="input-image">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Image</span>
                        </div>
                        <input
                            accept="image/*"
                            type="file"
                            className="form-control"
                            name="img"
                            onChange={(e) => {
                                setPacket({ ...packet, img: `/img/packages/` + e.target.files[0].name });
                                handlerReviewImage(e, 'img-review');
                            }}
                        />
                    </div>
                    <img
                        src={require(`src/assets` + (packet.img || '/img/packages/berlin.jpg'))}
                        alt="Image review"
                        id="img-review"
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-image">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Image Icon</span>
                        </div>
                        <input
                            type="file"
                            className="form-control"
                            name="icon"
                            onChange={(e) => {
                                setPacket({ ...packet, logo: `/img/packages/` + e.target.files[0].name });
                                handlerReviewImage(e, 'icon-review');
                            }}
                        />
                    </div>
                    <img
                        src={require(`src/assets` + (packet.logo || '/img/packages/berlin.png'))}
                        alt="Icon review"
                        id="icon-review"
                        style={{backgroundColor: '#999'}}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Title</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={packet.title}
                        onChange={(e) => {
                            setPacket({ ...packet, title: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Location</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={packet.location}
                        onChange={(e) => {
                            setPacket({ ...packet, location: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Type</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="type"
                        value={packet.type}
                        onChange={(e) => {
                            setPacket({ ...packet, type: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Old Price</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="oldPrice"
                        value={packet.oldPrice}
                        onChange={(e) => {
                            setPacket({ ...packet, oldPrice: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">New Price</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="newPrice"
                        value={packet.newPrice}
                        onChange={(e) => {
                            setPacket({ ...packet, newPrice: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea
                        type="text"
                        rows="5"
                        className="form-control"
                        name="description"
                        value={packet.description}
                        onChange={(e) => {
                            setPacket({ ...packet, description: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Color Button</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="colorBtn"
                        value={packet.colorBtn}
                        onChange={(e) => {
                            setPacket({ ...packet, colorBtn: e.target.value });
                        }}
                    />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Color Icon</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="colorIcon"
                        value={packet.colorIcon}
                        onChange={(e) => {
                            setPacket({ ...packet, colorIcon: e.target.value });
                        }}
                    />
                </div>
                <button onClick={handleCommit} className="btn btn-primary btn-commit">
                    Commit
                </button>
            </form>
        </div>
    );
}

export default EditPacket;
