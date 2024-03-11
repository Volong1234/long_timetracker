import "./ListImage.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';
import nodata from '../../../img/cart_empty_icon.png'

const RightColumn = ({ imageUrls, handleRemoveImage, id }) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    const resizeHandler = () => {
      const imageList = document.querySelector('.image-list');
      if (imageList) {
        imageList.style.maxHeight = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const year = selectedDate.getFullYear(); 
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(selectedDate.getDate()).padStart(2, '0'); 
      const dateNew = `${year}-${month}-${day}`;
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5003/getImageOneUser/${id || ''}?date=${dateNew}`);
        console.log(response.url)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setImages(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUserData();
  }, [id, selectedDate]);

 
  const handleDateChange = async (selectedDate) => {
    setSelectedDate(selectedDate);
    setIsLoading(true);
  };

  


  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '6px' }}>
        <div style={{ fontWeight: 'bold', marginRight: '20px' }}>Image List</div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="-- Select Date --"
          />
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && images.length === 0 && (
        <div className="image-list">
          <div className="image-container">
            <img src={nodata} alt="Default Image" className="image-item" />
          </div>
        </div>
      )}
      {!isLoading && images.length > 0 && (
        <div className="image-list">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.cameraRecord} alt={``} className="image-item" />
              {/* <button className="remove-button" onClick={() => handleRemoveImage(index)}>X</button> */}
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default RightColumn;