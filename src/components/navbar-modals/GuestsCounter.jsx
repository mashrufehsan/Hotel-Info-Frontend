import './GuestsCounter.css';

import minusIcon from '../../assets/icons/minus-icon.png';
import plusIcon from '../../assets/icons/plus-icon.png';
import { useState, useEffect, useCallback } from 'react';


const GuestsCounter = ({setGuestDetails}) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

    const updateGuestDetails = useCallback(() => {
        const details = [];
        if (adults > 0) details.push(`Ad: ${adults}`);
        if (children > 0) details.push(`Ch: ${children}`);
        if (infants > 0) details.push(`In: ${infants}`);
        if (pets > 0) details.push(`Pe: ${pets}`);
        setGuestDetails(details.length > 0 ? details.join(', ') : 'Add guests');
    }, [adults, children, infants, pets, setGuestDetails]);

    useEffect(() => {
        updateGuestDetails();
    }, [updateGuestDetails]);


    return(
        <div className="modal modal-4">
            <div className="modal-content">
                <div className="who-container">
                    <div className="who-item who-item-1">
                        <div className="who-item-text who-item-text-1">
                            <h6>Adults</h6>
                            <p>Age 13 or above</p>
                        </div>
                        <div className="who-item-counter who-item-counter-1">
                            <img src={minusIcon} alt="minus" className={`minus-icon ${adults === 0 ? 'disabled-counter-img' : ''}`} onClick={() => decrement(setAdults, adults)} />
                            <p>{adults}</p>
                            <img src={plusIcon} alt="plus" className="plus-icon" onClick={() => increment(setAdults, adults)} />
                        </div>
                    </div>
                    <div className="who-item who-item-2">
                        <div className="who-item-text who-item-text-2">
                            <h6>Children</h6>
                            <p>Ages 2-12</p>
                        </div>
                        <div className="who-item-counter who-item-counter-2">
                            <img src={minusIcon} alt="minus" className={`minus-icon ${children === 0 ? 'disabled-counter-img' : ''}`} onClick={() => decrement(setChildren, children)} />
                            <p>{children}</p>
                            <img src={plusIcon} alt="plus" className="plus-icon" onClick={() => increment(setChildren, children)} />
                        </div>
                    </div>
                    <div className="who-item who-item-3">
                        <div className="who-item-text who-item-text-3">
                            <h6>Infants</h6>
                            <p>Under 2</p>
                        </div>
                        <div className="who-item-counter who-item-counter-3">
                            <img src={minusIcon} alt="minus" className={`minus-icon ${infants === 0 ? 'disabled-counter-img' : ''}`} onClick={() => decrement(setInfants, infants)} />
                            <p>{infants}</p>
                            <img src={plusIcon} alt="plus" className="plus-icon" onClick={() => increment(setInfants, infants)} />
                        </div>
                    </div>
                    <div className="who-item who-item-4">
                        <div className="who-item-text who-item-text-4">
                            <h6>Pets</h6>
                            <p>Bringing a service animal?</p>
                        </div>
                        <div className="who-item-counter who-item-counter-4">
                            <img src={minusIcon} alt="minus" className={`minus-icon ${pets === 0 ? 'disabled-counter-img' : ''}`} onClick={() => decrement(setPets, pets)} />
                            <p>{pets}</p>
                            <img src={plusIcon} alt="plus" className="plus-icon" onClick={() => increment(setPets, pets)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestsCounter;