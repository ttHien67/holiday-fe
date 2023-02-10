import './AddPacket.scss';
import PacketServices from '@/services/PacketServices';
import { useState } from 'react';

function AddPacket() {
    const [img, setImg] = useState('');
    const [logo, setLogo] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [oldPrice, setOldPrice] = useState();
    const [newPrice, setNewPrice] = useState();
    const [description, setDesription] = useState('');
    const [colorBtn, setColorBtn] = useState('');
    const [colorIcon, setColorIcon] = useState('');

    const data = {
        img,
        logo,
        title,
        location,
        type,
        oldPrice,
        newPrice,
        description,
        colorBtn,
        colorIcon,
    };

    const handleCommit = async (e) => {
        console.log(data);
        try {
            await PacketServices.create(data);
            alert('my packet' + data);
        } catch (error) {
            alert(error);
        }
        e.preventDefault();
    };

    const handlerReviewImage = (e, id) => {
        const imgReview = document.getElementById(id)
        console.log(e.target.files[0]);
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
                                setImg(`/img/packages/` + e.target.files[0].name);
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
                                setLogo(`/img/packages/` + e.target.files[0].name);
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
                            setTitle(e.target.value);
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
                            setLocation(e.target.value);
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
                            setType(e.target.value);
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
                            setOldPrice(e.target.value);
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
                            setNewPrice(e.target.value);
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
                            setDesription(e.target.value);
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
                            setColorBtn(e.target.value);
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
                            setColorIcon(e.target.value);
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
