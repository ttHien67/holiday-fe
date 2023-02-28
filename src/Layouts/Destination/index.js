import './Destination.scss';
import Button from '@/components/Button';

function Destination({ data, packets }) {
    // loc packet trung ten trong danh sach destination
    return (
        <div className="destination-section">
            <div className="content-section">
                <h2 className="des__sub-title">OUR PROPOSALS</h2>
                <h1 className="des__title">
                    OUR
                    <span className="des__title-underline">DESTINATIONS</span>
                </h1>
                <div className="des__list">
                    {data.map((destination, index) => {
                        let newArrayPacket = [];
                        return (
                            <div className="col-3 des__item" key={index}>
                                <img src={require(`src/assets` + destination.img)} alt="" className="des__item-img" />
                                <div className="des__item-content">
                                    <div className="des__item-content-img">
                                        <img src={require(`src/assets` + destination.logo)} alt="" />
                                    </div>
                                    <div className="des__item-content-text">
                                        <h1 className="des__item-title">{destination.title}</h1>
                                        <p className="des__item-text">{destination.text}</p>
                                    </div>
                                </div>
                                <div className="des__item--hover">
                                    <h1 className="des__item--hover-title">Packets</h1>
                                    <div className="des__item--hover-list">
                                        {destination.packages.map((packet, index) => {
                                            // Filter packets have same title in destination
                                            newArrayPacket = packets.filter((_packet) => _packet.title === packet);
                                            return (
                                                <Button
                                                    to={`/packet/` + newArrayPacket[0]?._id}
                                                    className="des__item--hover-item"
                                                    key={index}
                                                >
                                                    {newArrayPacket[0]?.title}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                    <div className="des__item--hover-btn">
                                        <Button to={`/packets/` + destination._id} className="des__item--hover-btn-link">
                                            VIEW DESTINATION
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Destination;
