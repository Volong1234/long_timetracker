import React, {useState} from 'react'
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
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="content">
        <div className="content-left">
          {/* Nội dung cột trái */}
          <LeftColumn users={["User 1", "User 2", "User 3"]} />
        </div>
        <div className="content-right">
          {/* Nội dung cột phải */}
          <RightColumn imageUrls={imageUrls} />
        </div>
      </div>
    </div>
  )
}

export default DashBoard