import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProductDetail from '../pages/index_detail'; // Đảm bảo rằng bạn đã nhập đúng component ProductDetail
import styles from './SearchableProductList.module.css'; // Thay thế 'YourStylesheet' bằng tên stylesheet của bạn

const SearchableProductList = ({ products }) => {
  // 1. Thêm state để lưu trữ từ khóa tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Thêm hàm để xử lý sự kiện khi người dùng nhập từ khóa tìm kiếm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 3. Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className={styles.overlap_group}>
        <button className={styles.search_btn} />
        <input
          type="text"
          className={styles.search}
          placeholder="Tìm kiếm sản phẩm"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredProducts.map((product) => (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <img src={product.imageSrc} alt={product.name} />
          <Link to={`/product/${product.id}`}>Chi tiết</Link>
        </div>
      ))}
      
      <Switch>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
};

export default SearchableProductList;
