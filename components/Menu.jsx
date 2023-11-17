// Menu.jsx
import React from 'react';

const Menu = () => {
  return (
    <div id="menu">
      <table>
        <tr>
          <th>HOME</th>
          <th>CLOTHING</th>
          <th>CONTACT</th>
          <th><span className="red-bg">CLEARANCE SALE</span></th>
          <th style={{ position: 'relative' }}>
            <a href="#">
              <img src= ""style={{ height: '20px', width: '20px', paddingLeft: '577px' }}  />
              <span id="cart-item-count" className="quantity" style={{ position: 'absolute', top: '6px', right: '11px', backgroundColor: 'red', color: 'white', borderRadius: '5px', width: '13px' }}>0</span>
            </a>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default Menu;
