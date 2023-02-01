import PacketServices from '@/services/PacketServices';
import DestinationServices from '@/services/DestinationServices';
import { useState } from 'react';
import './Home.scss';
import { useEffect } from 'react';

import DestinationLayout from '@/Layouts/Destination';
import PacketsLayout from '@/Layouts/Packets';
import SliderLayout from '@/Layouts/Slider';

function Home() {
    const [packets, setPackets] = useState([]);
    const [destinations, setDestinations] = useState([]);

    // fetch api packets
    useEffect(() => {
        const fetchApi = async () => {
            let result = await PacketServices.getAll();
            result = result.slice(0, 3);
            setPackets(result);
        };

        fetchApi();
    }, []);

    // fetch api destinations
    useEffect(() => {
        const fetchApi = async () => {
            let result = await DestinationServices.getAll();
            setDestinations(result);
        };

        fetchApi();
    }, []);

    return (
        <>
            {/* Slider */}
            <SliderLayout />
            <div className="content">
                {/* Destination */}
                <div className="destination-section">
                    <div className="content-section">
                        <h2 className="des__sub-title">OUR PROPOSALS</h2>
                        <h1 className="des__title">
                            OUR <tab></tab>
                            <span className="des__title-underline">DESTINATIONS</span>
                        </h1>
                        <div className="des__list">
                            {destinations.map((destination) => {
                                return <DestinationLayout key={destination._id} data={destination} />;
                            })}
                        </div>
                    </div>
                </div>

                {/* Packets */}
                <div className="content-section">
                    <div className="packages-section">
                        <h2 className="packages__sub-title">PROMOTIONS</h2>
                        <h1 className="packages__title">
                            OUR <tab></tab>
                            <span className="packages__title-underline">PACKAGES</span>
                        </h1>
                        <div className="packages__list">
                            {packets.map((packet) => {
                                return <PacketsLayout key={packet._id} data={packet} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
