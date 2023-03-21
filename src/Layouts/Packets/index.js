import './Packets.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import Image from '@/components/Image';
import { memo } from 'react';

function Packets({ data }) {
    return (
        <div className="content-section">
            <div className="packages-section">
                <h2 className="packages__sub-title">PROMOTIONS</h2>
                <h1 className="packages__title">
                    OUR
                    <span className="packages__title-underline">PACKAGES</span>
                </h1>
                <div className="packages__list">
                    {data.map((packet) => {
                        return (
                            <div className="col-3 packages__item" key={packet._id}>
                                <div className="packages__item-img">
                                    <Image
                                        src={require(`src/assets` + packet.img)}
                                        alt={data.title}
                                        className="packages__item-img-pic"
                                    />
                                </div>
                                <a href="" className={`packages__item-img-icon ` + packet.colorIcon}>
                                    <img src={require(`src/assets` + packet.logo)} alt="" />
                                </a>
                                <div className="packages__item-content">
                                    <div className="packages__item-destination">
                                        <h1 className="packages__item-destination-name">{packet.title}</h1>
                                        <p className="packages__item-destination-place">
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                className="packages__item-destination-place-icon"
                                            />
                                            {packet.location}
                                        </p>
                                    </div>
                                    <div className="packages__item-price">
                                        <p className="packages__item-price-name">
                                            {packet.type}
                                            <button className={`packages__item-price-btn ` + packet.colorBtn}>
                                                + 1
                                            </button>
                                        </p>
                                        <span className="packages__item-price-money">
                                            <span className="packages__item-price-old">{packet.oldPrice}</span>
                                            {packet.newPrice} $
                                        </span>
                                    </div>
                                    <div className="packages__item-description">
                                        <p className="packages__item-description-p">{packet.description}</p>

                                        <a
                                            href={`/packet/` + packet._id}
                                            className={`packages__item-description-btn ` + packet.colorBtn}
                                        >
                                            DETAILS
                                        </a>
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

export default memo(Packets);
