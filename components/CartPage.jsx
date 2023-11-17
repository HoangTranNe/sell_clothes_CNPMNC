// CartPage.jsx
import React, { useEffect, useState,} from 'react';
import Header from './Header';
import Banner from './Banner';
import Menu from './Menu';
import ContinueShoppingButton from './ContinueShoppingButton';
import CheckoutButton from './CheckoutButton';
import Footer from './Footer';
import './styles.css';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updateCart = () => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(storedCartItems);
      updateCartItemCount(storedCartItems);
    };

    updateCart();

    return () => {
      // Clean up the event listener
      document.removeEventListener('DOMContentLoaded', updateCart);
    };
  }, []);

  const removeItem = (index) => {
    const removedItem = cartItems[index];

    const confirmation = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');

    if (confirmation) {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      setCartItems(updatedCart);

      updateTotalPrice();
      updateCartItemCount();

      if (updatedCart.length === 0) {
        clearCartItemsTable();
        const emptyCartMessage = document.getElementById('empty-cart-message');
        if (emptyCartMessage) {
          emptyCartMessage.style.display = 'block';
        }
      }
    }
  };

  const clearCartItemsTable = () => {
    const cartItemsTable = document.getElementById('cart-items-table');
    const rowCount = cartItemsTable.rows.length;

    for (let i = rowCount - 1; i > 0; i--) {
      cartItemsTable.deleteRow(i);
    }
  };

  const updateTotalPrice = () => {
    const cartItemsTable = document.getElementById('cart-items-table');
    const totalPriceCell = cartItemsTable.rows[cartItemsTable.rows.length - 1].cells[1];
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (totalPriceCell) {
      totalPriceCell.innerHTML = `<strong>${totalPrice}₫</strong>`;
    }
  };

  const updateCartItemCount = () => {
    const cartIcon = document.getElementById('cart-item-count');
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    if (cartIcon) {
      cartIcon.innerHTML = itemCount;
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <br />
      <a1>Trang chủ / Giỏ hàng</a1>
      <div id="Content">
        <p style={{ paddingTop: '30px' }}>Giỏ hàng của bạn</p>

        <table id="cart-items-table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Ảnh sản phẩm</th>
              <th className="product-name">Tên sản phẩm</th>
              <th>Size</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {/* Hiển thị thông tin sản phẩm trong giỏ hàng */}
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td><img src={`image/${item.image}`} alt={item.name} style={{ width: '100px' }} /></td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.price}₫</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}₫</td>
                <td><img src="image/delete.png" className="delete-icon" onClick={() => removeItem(index)} alt="delete-icon" /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <ContinueShoppingButton />
        <CheckoutButton />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
