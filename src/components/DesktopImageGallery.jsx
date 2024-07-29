import './DesktopImageGallery.css';

import nineDotsIcon from '../assets/icons/nine-dots-icon.png'

const DesktopImageGallery = ({images}) => {

    const path = 'http://localhost:4000/'

    return(
        <div className="banner-container">
            <div className="round-left">
                <img src={path + images[0]} alt="Bedroom 1"/>
            </div>
            <div className="grid2x2">
                <div>
                    <img src={path + images[3]} alt="Bedroom 4"/>
                    <img className="round-top-right" src={path + images[1]} alt="Bedroom 2"/>
                </div>
                <div>
                    <img src={path + images[2]} alt="Bedroom 3"/>
                    <div className="image-button-container">
                        <img className="round-bottom-right" src={path + images[4]} alt="Bedroom 5"/>
                        <div className="nine-dots-btn">
                            <img src={nineDotsIcon} alt="Nine Dots Icon"/>
                            <button className="image-button">Show all photos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DesktopImageGallery;