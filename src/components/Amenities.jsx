import amenitiesIcon from '../assets/icons/001-cutlery.png'

const Amenities = ({ amenity }) => {
    return (
        <div className="place-offeres-sections">
            <img src={amenitiesIcon} alt="Test" />
            <p>{ amenity }</p>
        </div>
    );
}

export default Amenities;