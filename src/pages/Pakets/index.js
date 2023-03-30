import './Packets.scss';
import backgroundImagePacket from '@/assets/img/parallax-search-2.jpg';
import PacketServices from '@/services/PacketServices';
import DestinationServices from '@/services/DestinationServices';
import PacketsLayout from '@/Layouts/Packets';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useDebounce from '@/hooks/useDebounce';

function Packets() {
    const { id } = useParams('/packets');
    const [packets, setPackets] = useState([]);
    const [destination, setDestination] = useState();
    const [price, setPrice] = useState(2000);

    const priceDebounce = useDebounce(price, 800);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await PacketServices.search(priceDebounce);
            setPackets(result);
        };
        fetchApi();
    }, [priceDebounce]);

    // Fetch appi destination's id
    useEffect(() => {
        const fetchApi = async () => {
            let result = await DestinationServices.get(id);
            setDestination(result);
        };

        id && fetchApi();
    }, [id]);

    // Fetch api all packets
    useEffect(() => {
        const fetchApi = async () => {
            let result = await PacketServices.getAll();
            // Reserve array
            result = result.reverse();
            setPackets(result);
        };

        fetchApi();
    }, []);

    useEffect(() => {
        let arr = [];

        const filter = async () => {
            await destination?.packages.forEach((title) => {
                arr.push(packets?.filter((packet) => packet.title === title));
            });
            setPackets(arr.flat());
        };
        filter();
    }, []);

    const handlePrice = (e) => {
        const price = e.target.value;
        const priceProgress = document.querySelector('.selctor-destination__price');
        priceProgress.innerHTML = price;
        setPrice(price);
    };

    const handleChange = (e) => {
        console.log(typeof e.target.value);
    };

    console.log(packets);

    return (
        <>
            <div className="slider-packets" style={{ backgroundImage: `url(${backgroundImagePacket})` }}>
                <div className="slider-content-packets content-section">
                    <div className="slider__title">
                        <p className="slider__title-sub-heading">OUR PACKAGES</p>
                        <h1 className="slider__title-heading">
                            Search your
                            <span className="slider-title-heading-underline">Holiday</span>
                        </h1>
                    </div>

                    <div className="slider__selection">
                        <div className="slider__selection-content">
                            <div className="selctor-destination ">
                                <h5 className="selctor-destination__title">Select Your Destination: </h5>
                                <div className="selection-option">
                                    <select name="" id="" className="selctor-destination__input">
                                        <option value="">All Destination</option>
                                        <option value="">Euro</option>
                                        <option value=""> - Italy</option>
                                        <option value=""> - Netherlands</option>
                                        <option value="">Asia</option>
                                        <option value=""> - Thailandia</option>
                                        <option value="">United State</option>
                                        <option value="">Oceania</option>
                                    </select>
                                </div>
                            </div>

                            <div className="selctor-destination ">
                                <h5 className="selctor-destination__title">Select Your Date: </h5>
                                <div className="selection-option">
                                    <input
                                        type="date"
                                        placeholder="mm-dd-yy"
                                        className="selection-option__input"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="selctor-destination ">
                                <h5 className="selctor-destination__title">
                                    Max Price: <span className="selctor-destination__price">{price}</span> $
                                </h5>
                                <div className="selection-option">
                                    <input
                                        type="range"
                                        className="selection-option__progress"
                                        max="10000"
                                        min="0"
                                        step="1"
                                        value={price}
                                        onChange={handlePrice}
                                    />
                                    <div className="selection-option__checkbox">
                                        <input type="checkbox" className="selection-option__input-checkbox" />
                                        <span className="selection-option__checkbox-description">
                                            See only promotions
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider__filter">
                            <i className="slider__filter-icon ti-filter"></i>
                            <span className="slider__filter-title">MORE FILTERS</span>
                        </div>
                    </div>

                    <div className="slider__option">
                        <div className="slider__option-content">
                            <div className="slider__option-filter">
                                <div className="slider__option-name">
                                    <p className="slider__option-name-title">PRICE</p>
                                    <i className="slider__option-name-icon ti-angle-down"></i>

                                    <div className="slider__option-name-filter">
                                        <a href="" className="slider__option-name-filter-item">
                                            LOWEST PRICE
                                        </a>
                                        <a href="" className="slider__option-name-filter-item-2">
                                            HIGHEST PRICE
                                        </a>
                                    </div>
                                </div>

                                <div className="slider__option-name">
                                    <p className="slider__option-name-title">NAME</p>
                                    <i className="slider__option-name-icon ti-angle-down"></i>

                                    <div className="slider__option-name-filter">
                                        <a href="" className="slider__option-name-filter-item">
                                            DESC
                                        </a>
                                        <a href="" className="slider__option-name-filter-item-2">
                                            ASC
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="slider__option-icon">
                                <i className="ti-menu-alt" id="change-to-list-2"></i>
                                <i className="ti-align-justify" id="change-to-list-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PacketsLayout data={packets} />
        </>
    );
}

export default Packets;
