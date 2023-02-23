import './AddPacket.scss';
import PacketServices from '@/services/PacketServices';
import { useState } from 'react';

function AddPacket() {
    const [packet, setPacket] = useState({});

    const handleCommit = async (e) => {
        e.preventDefault();
        try {
            await PacketServices.create(packet);
            alert('Your packet has been created');
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
            <h1 className="packet-modifying-title text-success">Add Packet</h1>

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
                    <img alt="Image review" id="img-review" />
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
                    <img alt="Icon review" id="icon-review" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Title</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
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

export default AddPacket;
