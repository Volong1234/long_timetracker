import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RightColumn from '../listimage/ListImage'
import './ListUser.css'

const LeftColumn = ({ handleUserClick }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // Gọi API khi component được mount lần đầu tiên
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Gọi API để lấy danh sách người dùng
      const response = await axios.get('http://localhost:5003/getAllUser');
      console.log(response);
      // Lưu danh sách người dùng vào state
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleGetID = (id) => {
    setSelectedUserId(userId);
    setUserId(id)
  }
  
  const [images, setImages] = useState([
    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
    'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
  ])

    const handleRemoveImage  = (id) => {
      setImages((images) => images.filter((image, idx) => idx !== id))
    }


   const [userId, setUserId] = useState(''); 
  return (
    <div className="content">
  <div className="content-left">
    <div style={{ fontWeight: 'bold' }}>User List</div>
    <ul style={{ listStyle: 'none', padding: 8 }}>
        {users?.map((user, index) => (
          <li
            key={index}
            style={{
              marginBottom: '6px',
              cursor: 'pointer',
              fontWeight: selectedUserId === user._id ? 'bold' : 'normal',
            }}
            onClick={() => handleGetID(user._id)}
          >
            {user.email}
          </li>
        ))}
      </ul>
  </div>
  <div className="content-right">
    <RightColumn imageUrls={images} handleRemoveImage={handleRemoveImage} id={userId} />
  </div>
</div>
  
  );
};

export default LeftColumn;
