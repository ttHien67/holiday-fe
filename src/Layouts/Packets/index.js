import './Packets.scss';
import Image from '@/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Packets({ data }) {
    const colorBtn = `packages__item-description-btn ` + data.colorBtn;
    const image = require(`src/assets` + data.img);
    // const logo = require(`src/assets` + data.logo);
    return (
        <div className="col-3 packages__item">
            <div className="packages__item-img">
                <Image src={image} alt="" className="packages__item-img-pic" />
                <a href="" className="packages__item-img-icon">
                    {/* <Image src={require(`src/assets` + data.logo)} alt="" /> */}
                </a>
            </div>
            <div className="packages__item-content">
                <div className="packages__item-destination">
                    <h1 className="packages__item-destination-name">{data.title}</h1>
                    <p className="packages__item-destination-place">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {data.location}
                    </p>
                </div>
                <div className="packages__item-price">
                    <p className="packages__item-price-name">
                        {data.type}
                        <button className="packages__item-price-btn">+ 1</button>
                    </p>
                    <span className="packages__item-price-money">
                        <span className="packages__item-price-old">{data.oldPrice}</span>
                        {data.newPrice} $
                    </span>
                </div>
                <div className="packages__item-description">
                    <p className="packages__item-description-p">{data.description}</p>

                    <button className={colorBtn}>DETAILS</button>
                </div>
            </div>
        </div>
    );
}

export default Packets;
