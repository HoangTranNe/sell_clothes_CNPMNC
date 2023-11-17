import Header from "./header";
import BubbleTeeContainer from "./bubble-tee-container";
import OrderShippingSection from "./order-shipping-section";
import Component1 from "./component1";
import styles from "./bubble-tee-form.module.css";

const BubbleTeeForm = () => {
  return (
    <div className={styles.property1default}>
      <Header />
      <div className={styles.trangChTtCSnPhmParent}>
        <div className={styles.trangChContainer}>
          <span>{`TRANG CHỦ / TẤT CẢ SẢN PHẨM / `}</span>
          <span className={styles.bubbleTee}>{`BUBBLE TEE `}</span>
        </div>
        <div className={styles.frameChild} />
      </div>
      <BubbleTeeContainer />
      <OrderShippingSection />
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img className={styles.frameItem} alt="" src="/rectangle-20@2x.png" />
          <div className={styles.sizeChart}>{`SIZE CHART `}</div>
        </div>
        <div className={styles.ccSnPhm}>{`CÁC SẢN PHẨM LIÊN QUAN `}</div>
        <img className={styles.frameInner} alt="" src="/rectangle-21@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-22@2x.png"
        />
        <img className={styles.frameChild1} alt="" src="/rectangle-23@2x.png" />
        <div className={styles.happyTeeContainer}>
          <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
          <p className={styles.p}>380.000₫</p>
        </div>
        <div className={styles.happyTeeContainer1}>
          <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
          <p className={styles.p}>380.000₫</p>
        </div>
        <div className={styles.happyTeeContainer2}>
          <p className={styles.happyTee}>HAPPY TEE - WHITE</p>
          <p className={styles.p}>380.000₫</p>
        </div>
      </div>
      <Component1
        component1Position="absolute"
        component1Top="659px"
        component1Left="818px"
        sLeft="42.35%"
        sFontSize="20px"
        sTextAlign="center"
        mLeft="44.71%"
        mFontSize="20px"
        mTextAlign="center"
        lLeft="41.18%"
        lFontSize="20px"
        lTextAlign="center"
        xLFontSize="20px"
      />
    </div>
  );
};

export default BubbleTeeForm;
