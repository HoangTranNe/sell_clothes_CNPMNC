import React, { useState} from 'react'
import styles from '../styles/main.module.css';
import Image from 'next/image'
import Link from 'next/link';
import SearchableProductList from '../components/SearchableProductList '; 
import { Switch, Route } from 'react-router-dom';



export function Home() {
  const [isOpen, setIsOpen] = useState(false);  
  const products = [
    {
      name: 'LINE BOXY RAGLAN TEE - CREAM',
      price: '380.000₫',
      imageSrc: '/images/image_1.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BROWN',
      price: '370.000₫',
      imageSrc: '/images/image_2.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
  ];
  const clearancesaleProducts = [
    {
      name: 'LINE BOXY RAGLAN TEE - CREAM',
      price: '380.000₫',
      imageSrc: '/images/image_1.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BROWN',
      price: '370.000₫',
      imageSrc: '/images/image_2.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
    {
      name: 'LINE BOXY RAGLAN TEE - BLACK',
      price: '350.000₫',
      imageSrc: '/images/image_3.png',
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setIsSearching(!isSearching);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.lOGO_STORE}>
            <Image 
            className={styles.rectangle} 
            alt="Rectangle"
            height={144}
            width={144}
            src="/images/rectangle_2.png"/>
          </div>
          <div className={styles.frame}>
            <div className={styles.group}>        
              <div className={styles.overlap_group}>
                <button className={styles.search_btn} onClick={handleSearchClick}>
                  {isSearching && <SearchableProductList products={filteredProducts} />}
                </button>

                <input
                  type="text"
                  className={styles.search}
                  placeholder="Tìm kiếm sản phẩm"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>          
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
      <button className={styles.rectangle_4} alt="Rectangle"/>      
      <div className={styles.text_wrapper_5}>About us</div>
      <div className={styles.about_the_shop}>About&nbsp;&nbsp;The Shop</div>
      <p className={styles.nnv}>
        <span className={styles.span}>Chào mừng bạn đến với </span>
        <span className={styles.text_wrapper_6}>GENZ</span>
        <span className={styles.span}>
          {" "}
          , điểm đến duy nhất cho thời trang và phụ kiện hàng đầu. Chúng tôi cam kết mang đến cho bạn những xu hướng mới
          nhất, chất lượng xuất sắc và trải nghiệm mua sắm đáng nhớ sẽ khiến bạn quay trở lại nhiều lần hơn.
        </span>
      </p>
      <Image 
        height = {100} 
        width = {100} 
        className={styles.group_3}
        alt="banner"
        src="/images/rectangle_5.svg"
      />
     <div className={styles.overlap_2}>
        <div className={styles.list_products}>
          <div className={styles.rectangle_3}>
            <div className={styles.text_wrapper_7}>NEW PRODUCTS</div>
            <div className={styles.list_product_items}>
            {products.map((product, index) => (
              <Link href={`../ctsp/index/${index}`} key={index}> {/* Sử dụng Link để chuyển hướng đến trang chi tiết */}
                <div className={styles.item_products}>
                  <div className={styles.price_name}>
                    <p className={styles.p}>{product.name}</p>
                    <div className={styles.text_wrapper_8}>{product.price}</div>
                  </div>
                  <Image
                    className={styles.image}
                    alt="Image"
                    height={100}
                    width={100}
                    src={product.imageSrc}
                  />                                
                </div>
              </Link>
            ))}
            <button className={styles.BUTTON}>
              <a href="/index_list">Xem Tất Cả</a>
            </button>
          </div>
          </div>
        </div>
        <div className={styles.list_products}>
          <div className={styles.rectangle_6}>
              <div className={styles.text_wrapper_7}>CLEARANCE SALE</div>
                <div className={styles.list_product_items}>
                {products.map((clearancesaleProducts, index) => (
                  <Link href={`/ctsp/index/${index}`} key={index}> {/* Sử dụng Link để chuyển hướng đến trang chi tiết */}
                    <div className={styles.item_products}>
                      <div className={styles.price_name}>
                        <p className={styles.p}>{clearancesaleProducts.name}</p>
                        <div className={styles.text_wrapper_8}>{clearancesaleProducts.price}</div>
                      </div>
                      <Image
                        className={styles.image}
                        alt="Image"
                        height={50}
                        width={50}
                        src={clearancesaleProducts.imageSrc}
                      />                                
                    </div>
                  </Link>
                ))}
                <button className={styles.BUTTON}>
                  <a href="/index_list">Xem Tất Cả</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className={styles.frame_2}>
          <Image
              className={styles.rectangle_5}
              alt="Rectangle"
              height={100}
              width={100}
              src="/images/rectangle_2.svg" />
          <div className={styles.address}>
            <div className={styles.group_4}>
              <p className={styles.text_wrapper_12}>123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh</p>
              <Image
                  className={styles.clothes}
                  alt="Clothes"
                  height={100}
                  width={100}
                  src="/images/clothes.svg" />
            </div>
            <div className={styles.group_5}>
              <p className={styles.text_wrapper_12}>456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh</p>
              <Image
                  className={styles.clothes}
                  alt="Clothes"
                  height={100}
                  width={100}
                  src="/images/clothes.svg" />
            </div>
            <div className={styles.linh_wrapper}>
              <p className={styles.linh}>
                <span className={styles.text_wrapper_13}>Liên hệ:</span>
                <span className={styles.text_wrapper_14}>0969404274</span>
              </p>
            </div>
            <div className={styles.text_wrapper_15}>Contact us</div>
          </div>
          <div className={styles.address_2}>
            <div className={styles.text_wrapper_15}>About us</div>
            <div className={styles.text_wrapper_16}>Giới thiệu</div>
            <div className={styles.text_wrapper_17}>Hướng dẫn mua hàng</div>
            <div className={styles.text_wrapper_18}>Chính sách đổi trả</div>
          </div>
          <div className={styles.follow}>
            <div className={styles.text_wrapper_19}>Follow us</div>
            <Image
                className={styles.instagram}
                alt="Instagram"
                height={100}
                width={100}
                src="/images/instagram.svg" />
            <Image
                className={styles.facebook}
                height={100}
                width={100}
                alt="Facebook"
                src="/images/facebook.svg" />
          </div>
        </div>
      </div>     
    </div> 
  );
};
export default Home;
