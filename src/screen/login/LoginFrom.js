// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'Admin' && password === 'long123') {
        console.log('Đăng nhập thành công!');
        navigate('/dashboard');
      } else {
        console.log('Đăng nhập không thành công.');
      }
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', // Set chiều cao của phần tử cha bằng chiều cao của màn hình
      display: 'flex', // Sử dụng flexbox
      justifyContent: 'center', // Căn giữa theo chiều ngang
      alignItems: 'center', // Căn giữa theo chiều dọc
    }}>
      <div style={{ width: '40%' }}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '1rem' }}>
        Login
      </Button>
      </div>
    </div>
  );
};

export default LoginForm;