import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic thanh toán ở đây
    console.log('Thông tin thanh toán:', cardNumber, expiryDate, cvv);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h1 style={{ textAlign: 'center' }}>Trang thanh toán</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Họ và tên :</label>
            <input type="text" value={cardNumber} onChange={handleCardNumberChange} style={{ width: '100%', padding: '5px', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>Số điện thoại :</label>
            <input type="text" value={expiryDate} onChange={handleExpiryDateChange} style={{ width: '100%', padding: '5px', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block' }}>CVV:</label>
            <input type="text" value={cvv} onChange={handleCvvChange} style={{ width: '100%', padding: '5px', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', marginLeft:'60px' }}>
            <img src= "https://developers.momo.vn/v3/vi/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png" alt="Momo" style={{ width: '70px', marginRight: '30px' }} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdGO-hqsF-S7HvWpFXeYjYLSaYVjGmSRJcS6-ftlPFg&s" alt="Zalo Pay" style={{ width: '70px', marginRight: '30px' }} />
            <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/343419708_1702686423498628_8245157591394726408_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ZWU5cccAff8AX907TYH&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBZIUT9Wt9H5askwfKkCOPK3iosicN84yg39kAoGKx3gg&oe=65280550" alt="Banking" style={{ width: '70px', marginRight: '30px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', borderRadius: '4px' }}>Xác nhận thanh toán</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;