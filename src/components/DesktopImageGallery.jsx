// DesktopImageGallery.jsx

import './DesktopImageGallery.css';
import ShimmerLoader from './ShimmerLoader';
import nineDotsIcon from '../assets/icons/nine-dots-icon.png';
import { useState, useEffect } from 'react';

const DesktopImageGallery = ({ images }) => {
    const path = 'http://localhost:4000';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        };

        const loadImages = async () => {
            try {
                await Promise.all(images.map(img => loadImage(path + img)));
                setLoading(false);
            } catch (error) {
                console.error('Error loading images', error);
            }
        };

        loadImages();
    }, [images, path]);

    if (loading) {
        return (
            <div className="banner-container">
                <div className="round-left">
                    <ShimmerLoader />
                </div>
                <div className="grid2x2">
                    <div>
                        <ShimmerLoader />
                        <ShimmerLoader />
                    </div>
                    <div>
                        <ShimmerLoader />
                        <ShimmerLoader />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="banner-container">
            <div className="round-left">
                <img src={path + images[0]} alt="Bedroom 1" />
            </div>
            <div className="grid2x2">
                <div>
                    <img src={path + images[3]} alt="Bedroom 4" />
                    <img className="round-top-right" src={path + images[1]} alt="Bedroom 2" />
                </div>
                <div>
                    <img src={path + images[2]} alt="Bedroom 3" />
                    <div className="image-button-container">
                        <img className="round-bottom-right" src={path + images[4]} alt="Bedroom 5" />
                        <div className="nine-dots-btn">
                            <img src={nineDotsIcon} alt="Nine Dots Icon" />
                            <button className="image-button">Show all photos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopImageGallery;
