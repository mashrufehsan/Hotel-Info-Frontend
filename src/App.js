import './App.css';
import Navbar from './components/Navbar';
import ComfyShareSave from './components/ComfyShareSave';
import DesktopImageGallery from './components/DesktopImageGallery';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/get-hotel/hotel-green');
        setHotelData(response.data);
      } catch (error) {
        console.error('Error fetching the hotel data:', error);
      }
    };

    fetchData();
  }, []);


  if (!hotelData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar/>
      <ComfyShareSave title={hotelData.title}/>
      <DesktopImageGallery images={hotelData.images}/>
    </div>
  );
}

export default App;
