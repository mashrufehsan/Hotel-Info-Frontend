import './ComfyShareSave.css'

import { useState, useEffect } from 'react';

import shareIcon from '../assets/icons/share-icon.png'
import heartLightIcon from '../assets/icons/heart-light-icon.svg'
import heartSolidIcon from '../assets/icons/heart-solid-icon.svg'

const ComfyShareSave = ({title}) => {

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem('isSaved');
        if (savedState === 'true') {
            setIsSaved(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isSaved', isSaved.toString());
    }, [isSaved]);

    const toggleSave = () => {
        setIsSaved(!isSaved);
    };

    return(
        <div className="comfy-container">
            <div className="comfy-left">
                <h1>{title}</h1>
            </div>
            <div className="comfy-right">
                <div className="comfy-right-item comfy-right-item-1">
                    <img id="share" src={shareIcon} alt="Share Icon"/>
                    <p>Share</p>
                </div>
                <div className="comfy-right-item comfy-right-item-2">
                    {!isSaved ? (
                        <>
                            <img id="heart-light-icon" src={heartLightIcon} alt="Heart Light Icon" onClick={toggleSave}/>
                            <p>Save</p>
                        </>
                    ) : (
                        <>
                            <img id="heart-solid-icon" src={heartSolidIcon} alt="Heart Solid Icon" onClick={toggleSave}/>
                            <p>Saved</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ComfyShareSave;