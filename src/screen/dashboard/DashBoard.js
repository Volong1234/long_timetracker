import React, { useState, useEffect } from 'react'
import Navbar from '../navarbar/NavarBar'
import './DashBoard.css';
import LeftColumn from './listuser/ListUser';
import RightColumn from './listimage/ListImage';


const DashBoard = () => {
    const [users, setUsers] = useState([])
    
    const getUsersData = async () => {

    }
    const imageUrls = [
      'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
      'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp',
    ];
    const [images, setImages] = useState(imageUrls)

      const handleRemoveImage  = (id) => {
        setImages((images) => images.filter((image, idx) => idx !== id))
      }

      const handleUserClick = (userName) => {
        console.log(`Người dùng ${userName.id} được chọn.`);
        // Thực hiện bất kỳ hành động nào bạn muốn khi người dùng được chọn
        
      };


  return (
    <div className="app">
      <Navbar></Navbar>
      <div >
      <LeftColumn users={users} handleUserClick={handleUserClick} />
      </div>
    </div>
  )
}

export default DashBoard