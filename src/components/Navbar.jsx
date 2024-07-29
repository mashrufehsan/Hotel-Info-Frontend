import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import searchIconWhite from '../assets/icons/search-icon-white.png'

import LocationPicker from './navbar-modals/LocationPicker'
import NavCalendar from './navbar-modals/NavCalendar'
import GuestsCounter from './navbar-modals/GuestsCounter'

const Navbar = () => {

    const [activeNavItem, setActiveNavItem] = useState(null);
    const navbarRef = useRef(null);
    const modalRef = useRef(null);

    const [selectedLocation, setSelectedLocation] = useState('Search destinations');
    const [checkInDate, setCheckInDate] = useState('Add dates');
    const [checkOutDate, setCheckOutDate] = useState('Add dates');
    const [checkInPlusMinus, setCheckInPlusMinus] = useState('');
    const [checkOutPlusMinus, setCheckOutPlusMinus] = useState('');
    const [guestDetails, setGuestDetails] = useState('Add guests');

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    const handleClickOutside = (event) => {
        if (
            navbarRef.current && !navbarRef.current.contains(event.target) &&
            modalRef.current && !modalRef.current.contains(event.target)
        ) {
            setActiveNavItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={navbarRef}>
            <div className="navbar-container">
                <nav className="navbar">
                    <div
                        className={`nav-item nav-item-1 ${activeNavItem === 1 ? 'active-navbar' : ''}`}
                        onClick={() => handleNavItemClick(1)}
                    >
                        <div>
                            <h6>Where</h6>
                            <p id="search-destination">{selectedLocation}</p>
                        </div>
                    </div>
                    <div
                        className={`nav-item nav-item-2 ${activeNavItem === 2 ? 'active-navbar' : ''}`}
                        onClick={() => handleNavItemClick(2)}
                    >
                        <div>
                            <h6>Check in</h6>
                            <div className="check-in-plus-minus">
                                <p id="check-in-date">{checkInDate}</p>
                                <p id="check-in-plus-minus">{checkInPlusMinus}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`nav-item nav-item-3 ${activeNavItem === 3 ? 'active-navbar' : ''}`}
                        onClick={() => handleNavItemClick(3)}
                    >
                        <div>
                            <h6>Check out</h6>
                            <div className="check-out-plus-minus">
                                <p id="check-out-date">{checkOutDate}</p>
                                <p id="check-out-plus-minus">{checkOutPlusMinus}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`nav-item nav-item-4 ${activeNavItem === 4 ? 'active-navbar' : ''}`}
                        onClick={() => handleNavItemClick(4)}
                    >
                        <div>
                            <h6>Who</h6>
                            <p>{guestDetails}</p>
                        </div>
                        <div className="nav-search">
                            <img src={searchIconWhite} alt="Search" />
                            <h5>Search</h5>
                        </div>
                    </div>
                </nav>
            </div>
            <div ref={modalRef}>
                {activeNavItem === 1 && <LocationPicker setSelectedLocation={setSelectedLocation}/>}
                {activeNavItem === 2 && <NavCalendar className='check-in-calendar'setDate={setCheckInDate} setPlusMinus={setCheckInPlusMinus}/>}
                {activeNavItem === 3 && <NavCalendar className='check-out-calendar'setDate={setCheckOutDate} setPlusMinus={setCheckOutPlusMinus}/>}
                {activeNavItem === 4 && <GuestsCounter setGuestDetails={setGuestDetails}/>}
            </div>
        </div>
    );
}


export default Navbar;