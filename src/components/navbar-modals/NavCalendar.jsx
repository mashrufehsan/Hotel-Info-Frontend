import './NavCalendar.css'

import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

const NavCalendar = ({ className, setDate, setPlusMinus }) => {

    return (
        <div className={`modal modal-2 ${className}`}>
            <div className="modal-content">
                <div className="check-in-out-header-container">
                    <div className="check-in-out-header">
                        <div className="check-in-out-header-item check-in-out-header-item-1">
                            <p>Dates</p>
                        </div>
                        <div className="check-in-out-header-item check-in-out-header-item-2">
                            <p>Months</p>
                        </div>
                        <div className="check-in-out-header-item check-in-out-header-item-3">
                            <p>Flexible</p>
                        </div>
                    </div>
                </div>
                <Flatpickr
                    id="nav-calendar"
                    options={{
                        inline: true,
                        onChange: (selectedDates) => {
                            if (selectedDates.length > 0) {
                                const date = selectedDates[0];
                                const formattedDate = date.toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric'
                                });
                                setDate(formattedDate);
                            }
                        },
                        dateFormat: "F j",
                    }}
                />
                <div className="plus-minus-footer-container">
                    <p className="plus-minus-footer-item" onClick={() => setPlusMinus('')}>Exact dates</p>
                    <p className="plus-minus-footer-item" onClick={() => setPlusMinus('± 1')}>± 1 day</p>
                    <p className="plus-minus-footer-item" onClick={() => setPlusMinus('± 2')}>± 2 days</p>
                    <p className="plus-minus-footer-item" onClick={() => setPlusMinus('± 3')}>± 3 days</p>
                    <p className="plus-minus-footer-item" onClick={() => setPlusMinus('± 7')}>± 7 days</p>
                </div>
            </div>
        </div>
    );
}

export default NavCalendar;