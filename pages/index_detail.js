import { useCallback } from "react";
import styles from "../styles/index.module.css";
import Link from 'next/link';


const TrangChiTitSnPhm = () => {
    const onLOGOSTOREContainerClick = useCallback(() => {
        // Please sync "Home" to the project
    }, []);

    const onRectangle3Click = useCallback(() => {
        // Please sync "Group 31" to the project
    }, []);

    const onMUANGAYTextClick = useCallback(() => {
        // Please sync "Trang thanh toán" to the project
    }, []);
    
    const [selectedProduct, setSelectedProduct] = useState(null);

    const onProductClick = useCallback((productIndex) => {
        setSelectedProduct(productIndex);
    }, []);

    return (
        <div className={styles.trangChiTitSnPhm}>
            <div className={styles.property1default}>
                <div className={styles.header}>
                    <div className={styles.headerChild} />
                    <div className={styles.logoStore} onClick={onLOGOSTOREContainerClick}>
                        <img
                            className={styles.logoStoreChild}
                            alt=""
                            src="/rectangle-2@2x.png"
                        />
                    </div>
                    <div className={styles.groupParent}>
                        <div className={styles.vectorParent}>
                            <img
                                className={styles.groupChild}
                                alt=""
                                src="/rectangle-3.svg"
                            />
                            <img className={styles.searchIcon} alt="" src="/search.svg" />
                            <div className={styles.search}>SEARCH</div>
                        </div>
                        <img className={styles.userIcon} alt="" src="/user.svg" />
                        <div className={styles.shoppingCart}>
                            <img
                                className={styles.shoppingCartIcon}
                                alt=""
                                src="/shoppingcart.svg"
                            />
                            <div className={styles.ellipseParent}>
                                <div className={styles.groupItem} />
                                <div className={styles.div}>1</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navBar}>
                        <div className={styles.speacialPrice}>SPEACIAL PRICE</div>
                        <div className={styles.clothingParent}>
                            <div className={styles.clothing}>CLOTHING</div>
                            <img
                                className={styles.chevronDownIcon}
                                alt=""
                                src="/chevrondown.svg"
                            />
                        </div>
                        <div className={styles.tShirt}>T-SHIRT</div>
                        <div className={styles.tShirt}>POLO</div>
                    </div>
                </div>
                <div className={styles.trangChTtCSnPhmParent}>
                    <div className={styles.trangChContainer}>
                        <span>{`TRANG CHỦ / TẤT CẢ SẢN PHẨM / `}</span>
                        <span className={styles.bubbleTee}>{`BUBBLE TEE `}</span>
                    </div>
                    <div className={styles.groupInner} />
                </div>
                <div className={styles.image1Parent}>
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={styles.productImageContainer}
                            onClick={() => onProductClick(index)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    onProductClick(index);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`Product ${index + 1}`}
                        >
                            <img
                                className={styles.image1Icon}
                                alt={`Product ${index + 1}`}
                                src={`/image-${index + 1}@2x.png`}
                            />
                            {/* Các thông tin sản phẩm khác (tên, giá, ...) */}
                            <button type="button" onClick={() => onProductClick(index)}>
                                Product {index + 1}
                            </button>
                        </div>
                    ))}
                </div>
            {/* Hiển thị chi tiết sản phẩm khi có sản phẩm được chọn */}
            {selectedProduct !== null && (
                <div className={styles.productDetails}>
                    {/* Hiển thị chi tiết sản phẩm dựa trên selectedProduct */}
                    {/* ... */}
                    {/* Thêm nút hoặc điều hướng Link để quay trở lại trang chính */}
                    <Link href="/">
                        <a>Quay lại trang chính</a>
                    </Link>
                </div>
            )}
                <div className={styles.footerParent}>
                    <div className={styles.footer} />
                    <img
                        className={styles.frameChild}
                        alt=""
                        src="/rectangle-21@2x.png"
                    />
                    <div className={styles.tHngV}>Đặt hàng và vận chuyển toàn quốc</div>
                    <div className={styles.address}>
                        <div className={styles.ngNguynDuQun1ThnhPhParent}>
                            <div className={styles.ngNguynDu}>
                                123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh
                            </div>
                            <img
                                className={styles.clothesIcon}
                                alt=""
                                src="/clothes@2x.png"
                            />
                        </div>
                        <div className={styles.ngCmt8QunTnBnhThnhParent}>
                            <div className={styles.ngNguynDu}>
                                456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh
                            </div>
                            <img
                                className={styles.clothesIcon}
                                alt=""
                                src="/clothes1@2x.png"
                            />
                        </div>
                        <div className={styles.linH0969404274Wrapper}>
                            <div className={styles.linH0969404274}>
                                Liên hệ:
                                <span className={styles.span}>0969404274</span>
                            </div>
                        </div>
                        <div className={styles.contactUs}>Contact us</div>
                    </div>
                    <div className={styles.address1}>
                        <div className={styles.aboutUs}>About us</div>
                        <div className={styles.giiThiu}>Giới thiệu</div>
                        <div className={styles.hngDnMua}>Hướng dẫn mua hàng</div>
                        <div className={styles.chnhSchI}>Chính sách đổi trả</div>
                    </div>
                    <div className={styles.follow}>
                        <div className={styles.followUs}>Follow us</div>
                        <img
                            className={styles.instagramIcon}
                            alt=""
                            src="/instagram@2x.png"
                        />
                        <img
                            className={styles.facebookIcon}
                            alt=""
                            src="/facebook@2x.png"
                        />
                    </div>
                </div>
                <div className={styles.groupContainer}>
                    <div className={styles.rectangleParent}>
                        <img
                            className={styles.groupChild5}
                            alt=""
                            src="/rectangle-20@2x.png"
                        />
                        <div className={styles.sizeChart}>{`SIZE CHART `}</div>
                    </div>
                    <div className={styles.ccSnPhm}>{`CÁC SẢN PHẨM LIÊN QUAN `}</div>
                    <img
                        className={styles.groupChild6}
                        alt=""
                        src="/rectangle-211@2x.png"
                    />
                    <img
                        className={styles.groupChild7}
                        alt=""
                        src="/rectangle-22@2x.png"
                    />
                    <img
                        className={styles.groupChild8}
                        alt=""
                        src="/rectangle-23@2x.png"
                    />
                    <div className={styles.happyTeeContainer}>
                        <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
                        <p className={styles.cThitK}>380.000₫</p>
                    </div>
                    <div className={styles.happyTeeContainer1}>
                        <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
                        <p className={styles.cThitK}>380.000₫</p>
                    </div>
                    <div className={styles.happyTeeContainer2}>
                        <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
                        <p className={styles.cThitK}>380.000₫</p>
                    </div>
                </div>
                <div className={styles.component1}>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild9} />
                        <div className={styles.s}>S</div>
                    </div>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild9} />
                        <div className={styles.m}>M</div>
                    </div>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild9} />
                        <div className={styles.l}>L</div>
                    </div>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.groupChild9} />
                        <div className={styles.xl}>XL</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrangChiTitSnPhm;
