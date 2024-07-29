import './LocationPicker.css'

import worldMap from '../../assets/navbar-maps/world-map.png'
import southEastAsia from '../../assets/navbar-maps/south-east-asia-map.png'
import canada from '../../assets/navbar-maps/canada-map.png'
import europe from '../../assets/navbar-maps/europe-map.png'
import thailand from '../../assets/navbar-maps/thailand-map.png'
import middleEast from '../../assets/navbar-maps/middle-east-map.png'

const LocationPicker = ({ setSelectedLocation }) => {

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };


    return (
        <div class="modal modal-1">
            <div class="modal-content">
                <h5>Search by region</h5>
                <div class="grid3x3">
                    <div>
                        <img src={worldMap} alt="Flexible" onClick={() => handleLocationClick("I'm flexible")}/>
                        <p>I'm flexible</p>
                    </div>
                    <div>
                        <img src={southEastAsia} alt="South East Asia" onClick={() => handleLocationClick("South East Asia")}/>
                        <p>Southeast Asia</p>
                    </div>
                    <div>
                        <img src={canada} alt="Canada" onClick={() => handleLocationClick("Canada")}/>
                        <p>Canada</p>
                    </div>
                    <div>
                        <img src={europe} alt="Europe" onClick={() => handleLocationClick("Europe")}/>
                        <p>Europe</p>
                    </div>
                    <div>
                        <img src={thailand} alt="Thailand" onClick={() => handleLocationClick("Thailand")}/>
                        <p>Thailand</p>
                    </div>
                    <div>
                        <img src={middleEast} alt="Middle East" onClick={() => handleLocationClick("Middle East")}/>
                        <p>Middle East</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPicker;