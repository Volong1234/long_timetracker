import React from 'react';
import "./ListImage.css"

const RightColumn = ({ imageUrls }) => {
  return (
    <div className="content-right">
      <div style={{ fontWeight: 'bold',  marginBottom: '6px' }}>Danh sách người dùng</div>
      <div className="image-list">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} className="image-item" />
        ))}
      </div>
    </div>
  );
};

export default RightColumn;