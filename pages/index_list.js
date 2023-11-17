import React, { useState } from 'react';
import product1 from "../public/images/anh1.png"
import product2 from "../public/images/anh2.png"
import product3 from "../public/images/anh3.png"
import product4 from "../public/images/anh4.png"
import Image from 'next/image'
import styles from '../styles/main.module.css';
import SearchableProductList from '../components/SearchableProductList '; 
import Link from 'next/link';
export default function App() {
  const products = [
    { id: 1, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 380.000, image: product1, },
    { id: 2, name: 'LINE BOXY RAGLAN TEE - BROWN', price: 370.000, image: product2,},
    { id: 3, name: 'LINE BOXY RAGLAN TEE - BLACK', price: 350.000, image: product3,},
    { id: 4, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 300.000, image: product4},
    { id: 5, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 390.000, image: product4},
    { id: 6, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 320.000, image: product2,},
    { id: 7, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 380.000, image: product1, },
    { id: 8, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 370.000, image: product2,},
    { id: 9, name: 'LINE BOXY RAGLAN TEE - CREAM', price: 350.000, image: product3,},
    
  ];

  const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false); 
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
      setIsSearching(!isSearching);
    };

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [isSearching, setIsSearching] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  

    return (
      <div className={styles.header}>
        <div className={styles.lOGO_STORE}>
           <Link href="/index_main">
            <Image 
              className={styles.rectangle} 
              alt="Rectangle"
              height={144}
              width={144}
              src="/images/rectangle_2.png"/>
           </Link>
          </div>
          <div className={styles.frame}>
            <div className={styles.group}>        
       
            <div className={styles.userDropdown}>
              <button className={styles.userBtn} onClick={toggleDropdown}/>
              <div className={styles.dropdownContent}>
                <a href="/index_user">Tài Khoản</a>
                <a href="#">Đơn Mua</a>
                <a href="/index_login">Đăng Xuất</a>
              </div>
            </div>
            <div className={styles.shopping_cart}>
              <div className={styles.overlap}>
                <button alt="Shopping cart">
                  <a href='/index_cart' className={styles.img}></a>
                </button>
                {/* <div className={styles.overlap_group_wrapper}>
                  <div className="div">
                    <div className={styles.ellipse} />
                    <div className={styles.text_wrapper}>1</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.nav_bar}>
            <div className={styles.text_wrapper_2}>SPEACIAL PRICE</div>
            <div className={styles.group_2}>
              <div className={styles.text_wrapper_3}>CLOTHING</div>
              <div className={styles.dropdown}>
                <button className={styles.chevron_down} alt="Chevron down"/>
                <div className={styles.dropdown_content}>
                  <a href="/index_list">Tee</a>
                  <a href="#">Baby Tee</a>
                  <a href="#">Bottom</a>
                </div>
              </div>
            </div>
            <div className={styles.text_wrapper_4}>T-SHIRT</div>
            <div className={styles.text_wrapper_4}>POLO</div>
          </div>
        </div>
      <div className="mx-auto p-4 flex">
        <div className="w-1/4">
          <h1 className="text-2xl font-bold mb-4">Danh mục sản phẩm</h1>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 mb-4"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="list" style={
                                      {
                                        marginLeft: '300px',
                                        display: 'grid',                                        
                                        gridTemplateColumns: "1fr 1fr 1fr",                                      
                                      }
                                    }>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 p-4 rounded flex flex-col items-center"
                style={{ minHeight: '300px' }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="img"
                  style={{ width: '400px', height: '400px', objectFit: 'contain' }}
                />
                <h2 className="font-bold mb-2">{product.name}</h2>
                <p className='font-bold'>{product.price}000đ</p>
              </div>
            ))}
          </div>
      </div>
    </div>
    );
  };
  return <ProductList />;
}
