import { useEffect, useState } from 'react';

function PacketForm({ packetEdition, onCommit }) {
    const [packet, setPacket] = useState({});

    useEffect(() => {
        setPacket(packetEdition);
    }, [packetEdition]);

    const handlerReviewImage = (e, id) => {
        const imgReview = document.getElementById(id);

        imgReview.src = URL.createObjectURL(e.target.files[0]);
        imgReview.onload = function () {
            URL.revokeObjectURL(imgReview.src); // free memory
        };
    };

    console.log(packet);

    return (
        <form runat="server" onSubmit={() => onCommit(packet)}>
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
                    src={require(`src/assets` + (packet?.img || '/img/undefined.jpeg'))}
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
                    src={require(`src/assets` + (packet?.logo || '/img/undefined.jpeg'))}
                    alt="Icon review"
                    id="icon-review"
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
                    value={packet?.title || ''}
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
                    value={packet?.location || ''}
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
                    value={packet?.type || ''}
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
                    value={packet?.oldPrice || ''}
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
                    value={packet?.newPrice || ''}
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
                    value={packet?.description || ''}
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
                    value={packet?.colorBtn || ''}
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
                    value={packet?.colorIcon || ''}
                    onChange={(e) => {
                        setPacket({ ...packet, colorIcon: e.target.value });
                    }}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-commit">
                Commit
            </button>
        </form>
    );
}

export default PacketForm;
