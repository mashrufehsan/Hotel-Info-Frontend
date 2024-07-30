import './HotelPage.css';
import Navbar from './Navbar';
import ComfyShareSave from './ComfyShareSave';
import DesktopImageGallery from './DesktopImageGallery';
import Body from './Body';
import ShimmerLoader from './ShimmerLoader';
import ComfyShareSaveShimmer from './ComfyShareSaveShimmer';
import BodyShimmer from './BodyShimmer';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function HotelPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/get-hotel/${slug}`);
                if (response.status === 200) {
                    setHotelData(response.data);
                } else {
                    throw new Error('Hotel not found');
                }
            } catch (error) {
                setError('Hotel not found');
                navigate('/404'); // Redirect to the NotFoundPage
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className="HotelPage">
                <Navbar />
                <ComfyShareSaveShimmer />
                <ShimmerLoader />
                <BodyShimmer />
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!hotelData) {
        return <div>No Hotel Found</div>;
    }

    return (
        <div className="HotelPage">
            <Navbar />
            <ComfyShareSave title={hotelData.title} />
            <DesktopImageGallery images={hotelData.images} />
            <Body hotelData={hotelData} />
        </div>
    );
}

export default HotelPage;
