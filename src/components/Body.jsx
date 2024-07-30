import './Body.css';
import React, { useEffect, useState } from 'react';

import padLockIcon from '../assets/icons/padlock-icon.png';
import radioHostIcon from '../assets/icons/radio-host-icon.png';
import rightArrowIcon from '../assets/icons/right-arrow-icon.png';
import downArrowIcon from '../assets/icons/down-arrow-icon.png';
import mapDesktop from '../assets/maps-desktop.png';
import flagIcon from '../assets/icons/flag-icon.png';
import keyboardIcon from '../assets/icons/keyboard-icon.png';

import Room from './Room';
import Amenities from './Amenities';
import BodyCalendar from './BodyCalendar';

const Body = ({ hotelData }) => {
    const [rooms, setRooms] = useState([]);
    const path = 'http://localhost:4000'

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(`${path}/get-room?hotel_slug=${hotelData.slug}&room_slug=bedroom`);
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, [hotelData.slug, path]);


    return (
        <div className="wrapper">
            <div className="one">
                <div className="entire-rental-container">
                    <h2>Entire rental unit in Lima, Peru</h2>
                    <p>2 guests • 1 bedroom • 1 bed • 1 bath </p>
                    <h4>★ New</h4>
                </div>
                <div className="host-container">
                    <img src={path + hotelData.host_image} alt="Host Porfile" />
                    <div className="host-texts">
                        <h4>Hosted by {hotelData.host_name}</h4>
                        <p>{hotelData.host_category} • {hotelData.hosting_experience} years hosting</p>
                    </div>
                </div>
                <div className="self-super-container">
                    <div className="self-check">
                        <img src={padLockIcon} alt="padlock-icon.png" />
                        <div>
                            <h4>Self check-in</h4>
                            <p>Check yourself in with the smartlock.</p>
                        </div>
                    </div>
                    <div className="superhost">
                        <img src={radioHostIcon} alt="assets/radio-host-icon.png" />
                        <div>
                            <h4>Fernando is a superhost</h4>
                            <p>Superhosts are experienced, highly rated Hosts.</p>
                        </div>
                    </div>
                </div>
                <div className="translation">
                    <p>Somne info has been automatically translated. <span>Show original</span></p>
                </div>
                <div className="welcome">
                    <p>Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park!</p>
                    <p>It's conveniently located in Pueblo Libre, just 25 min. away from the airport. Steps away from Clinica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La ...</p>
                </div>
                <div className="show-more">
                    <p>Show more</p>
                    <img src={rightArrowIcon} alt="assets/right-arrow-icon.png" />
                </div>
                <div className="where-you-will-sleep-container">
                    <h2>Where you'll sleep</h2>
                    <div className="rooms-container">
                        {rooms.map((room, index) => (
                            <Room key={index} room={room} />
                        ))}
                    </div>
                </div>
                <div className="place-offeres-section">
                    <h3>What this place offeres</h3>
                    <div className="place-offeres-container">
                        {hotelData.amenities.map((amenity, index) => (
                            <Amenities key={index} amenity={amenity} />
                        ))}
                    </div>
                    <button id="show32-btn">Show all 32 amenities</button>
                </div>
                <div className="where-youll-be-container-mobile">
                    <h3>Where you'll be</h3>
                    <p>Lima, Provincia de Lima, Peru</p>
                    <img src={mapDesktop} alt="assets/maps-photos/maps-desktop.png" />
                    <div className="where-youll-be-footer">
                        <h6>Show more</h6>
                        <img src={rightArrowIcon} alt="assets/right-arrow-icon.png" />
                    </div>
                </div>
                <div className="calendar-container-main">
                    <h3>Select check-in date</h3>
                    <p>Add your travel dates for exact pricing</p>
                    <div className="calendar-grid">
                        <div className="calendar1">
                            <BodyCalendar />
                            <img src={keyboardIcon} alt="assets/keyboard-icon.png" />
                        </div>
                        <div className="calendar2">
                            <BodyCalendar />
                            <p>Clear Dates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two">
                <div className="dates-for-prices">
                    <h1>Add dates for prices</h1>
                    <table>
                        <tr>
                            <td>
                                <h3>CHECK-IN</h3>
                                <p>Add date</p>
                            </td>
                            <td>
                                <h3>CHECKOUT</h3>
                                <p>Add date</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="guest-box">
                                    <div>
                                        <h3>Guests</h3>
                                        <p>1 Guest</p>
                                    </div>
                                    <img src={downArrowIcon} alt="assets/down-arrow-icon.png" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button>Check availability</button>
                </div>
                <div className="flag-container">
                    <img src={flagIcon} alt="assets/flag-icon.png" />
                    <p>Report this listing</p>
                </div>
            </div>
        </div>
    );
}

export default Body;