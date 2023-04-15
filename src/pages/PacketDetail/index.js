import { useEffect, useState } from 'react';
import iconPin from '@/assets/img/details/icon-pin-white.png';
import iconTime from '@/assets/img/details/icon-time-white.png';
import iconTypologies from '@/assets/img/details/icon-typologies-greydark.png';
import iconBattery from '@/assets/img/details/icon-battery-greydark.png';
import iconMiniage from '@/assets/img/details/icon-minage-greydark.png';
import { useParams } from 'react-router-dom';

import PacketServices from '@/services/PacketServices';
import './PacketDetail.scss';
import Button from '@/components/Button';
import PacketsLayout from '@/Layouts/Packets';

function PacketDetail() {
    let { id } = useParams('/packet');
    const [packet, setPacket] = useState([]);
    const [packets, setPackets] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await PacketServices.get(id);
            setPacket([result]);
        };
        fetchApi();
    }, [id]);

    useEffect(() => {
        const fetchApi = async () => {
            let result = await PacketServices.getAll();

            //Loc packet da hien thi ra khoi danh sach
            let resultFilter = result.filter((_result) => _result._id !== id);
            resultFilter = resultFilter.reverse();
            setPackets(resultFilter);
        };
        fetchApi();
    }, [id]);

    let days = 0;
    if (packet) {
        const departure = new Date(packet[0]?.departureTime);
        const end = new Date(packet[0]?.endTime);

        days = (end - departure) / (24 * 60 * 60 * 1000);
    }
    return (
        <>
            {packet.map((_packet) => {
                return (
                    <div className="container_content" key={_packet._id}>
                        <div
                            className="slider-detail"
                            style={{ backgroundImage: `url(${require(`src/assets` + _packet.img)})` }}
                        >
                            <div className="slider-content content-section">
                                <div className="slider__title">{_packet.title}</div>
                                <div className="slider__info">
                                    <div className="slider__location">
                                        <img src={iconPin} alt="" className="slider__location-icon" />
                                        <h2 className="slider__location-name">{_packet.location}</h2>
                                    </div>
                                    <div className="slider__location">
                                        <img src={iconTime} alt="" className="slider__location-icon" />
                                        <h2 className="slider__location-name">{days} days</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-section content-section-detail">
                            <div className="introduce col-8">
                                <div className="introduce__type">
                                    <div className="introduce__type-item">
                                        <img src={iconTypologies} alt="" className="introduce__type-img" />
                                        <div className="introduce__type-info">
                                            <h1 className="introduce__type-name">TYPOLOGIES</h1>
                                            <h3 className="introduce__type-">{_packet.type}</h3>
                                        </div>
                                    </div>
                                    <div className="introduce__type-item">
                                        <img src={iconBattery} alt="" className="introduce__type-img" />
                                        <div className="introduce__type-info">
                                            <h1 className="introduce__type-name">DIFFICULTY</h1>
                                            <h3 className="introduce__type-">Medium</h3>
                                        </div>
                                    </div>
                                    <div className="introduce__type-item">
                                        <img src={iconMiniage} alt="" className="introduce__type-img" />
                                        <div className="introduce__type-info">
                                            <h1 className="introduce__type-name">MIN. AGE</h1>
                                            <h3 className="introduce__type-">3 years</h3>
                                        </div>
                                    </div>
                                </div>
                                <img src={require(`src/assets` + _packet.img)} alt="" className="introduce__img" />
                                <div className="introduce__list">
                                    <ul className="introduce__list-title">
                                        <li>
                                            <a href="" className="introduce__list-item <?php echo $row['colorBtn']?>">
                                                Description
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="introduce__list-item">
                                                Map
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="introduce__list-item">
                                                Photo
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="introduce__list-item">
                                                Program
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="introduce__type-content">
                                    <h1 className="introduce__content-name">Amazing Experience</h1>
                                    <div className="space"></div>
                                    <p className="introduce__content-pag">{_packet.description}</p>
                                </div>
                            </div>
                            <div className="feedback-section">
                                <h1 className="title-resgister">Join with us</h1>
                                <Button to={`/contact/` + _packet._id} className={`btn-resgister ` + _packet.colorBtn}>
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
            {/* render the other packets */}
            <PacketsLayout data={packets} />
        </>
    );
}

export default PacketDetail;
