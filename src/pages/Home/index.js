import PacketServices from '@/services/PacketServices';
import { useState } from 'react';
import PacketsLayout from '@/Layouts/Packets';
import SliderLayout from '@/Layouts/Slider';

import './Home.scss';
import { useEffect } from 'react';

function Home() {
    const [packets, setPackets] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            let result = await PacketServices.getAll();
            result = result.slice(0, 3);
            setPackets(result);
        };

        fetchApi();
    }, []);

    return (
        <>
            <SliderLayout />
            <div className="content">
                <div className="content-section">
                    <h2 className="packages__sub-title">PROMOTIONS</h2>
                    <h1 className="packages__title">
                        OUR
                        <span className="packages__title-underline">PACKAGES</span>
                    </h1>
                    <div className="packages__list">
                        {packets.map((packet) => {
                            return <PacketsLayout key={packet._id} data={packet} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
