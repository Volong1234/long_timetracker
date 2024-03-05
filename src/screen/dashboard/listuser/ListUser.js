import React from 'react';

const LeftColumn = ({ users }) => {
  return (
    <div className="content-left">
      <div style={{ fontWeight: 'bold' }}>Danh sách người dùng</div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: '6px' }}>{user.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeftColumn;