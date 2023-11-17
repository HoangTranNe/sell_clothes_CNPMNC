import styles from "./order-shipping-section.module.css";

const OrderShippingSection = () => {
  return (
    <div className={styles.footerParent}>
      <div className={styles.footer} />
      <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
      <div className={styles.tHngV}>Đặt hàng và vận chuyển toàn quốc</div>
      <div className={styles.address}>
        <div className={styles.ngNguynDuQun1ThnhPhParent}>
          <div className={styles.ngNguynDu}>
            123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh
          </div>
          <img className={styles.clothesIcon} alt="" src="/clothes@2x.png" />
        </div>
        <div className={styles.ngCmt8QunTnBnhThnhParent}>
          <div className={styles.ngNguynDu}>
            456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh
          </div>
          <img className={styles.clothesIcon} alt="" src="/clothes1@2x.png" />
        </div>
        <div className={styles.linH0969404274}>
          Liên hệ:
          <span className={styles.span}>0969404274</span>
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
        <img className={styles.instagramIcon} alt="" src="/instagram@2x.png" />
        <img className={styles.facebookIcon} alt="" src="/facebook@2x.png" />
      </div>
    </div>
  );
};

export default OrderShippingSection;
