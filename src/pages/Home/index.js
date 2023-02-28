import DestinationServices from '@/services/DestinationServices';
import './Home.scss';
import { useState, useEffect } from 'react';

import DestinationLayout from '@/Layouts/Destination';
import PacketsLayout from '@/Layouts/Packets';
import SliderLayout from '@/Layouts/Slider';
import PacketServices from '@/services/PacketServices';

function Home() {
    const [destinations, setDestinations] = useState([]);
    const [packets, setPackets] = useState([]);
    const [packetGroup, setPacketGroup] = useState([]);

    
    // fetch api destinations
    useEffect(() => {
        const fetchApi = async () => {
            let result = await DestinationServices.getAll();
            setDestinations(result);
        };

        fetchApi();
    }, []);

    // fetch api packets
    useEffect(() => {
        const fetchApi = async () => {
            let result = await PacketServices.getAll();
            setPacketGroup(result)
            // reserve and slice 3 packet in array
            result = result.reverse().slice(0, 3);
            setPackets(result);
        };

        fetchApi();
    }, []);

    return (
        <>
            {/* Slider */}
            <SliderLayout />
            <div className="content">
                {/* Destination */}
                <DestinationLayout data={destinations} packets={packetGroup}/>

                {/* Packets */}
                <PacketsLayout data={packets}/>
            </div>
        </>
    );
}

export default Home;
