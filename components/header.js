import { useCallback } from "react";
import styles from "./header.module.css";

const Header = () => {
  const onLOGOSTOREContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.logoStore} onClick={onLOGOSTOREContainerClick}>
        <img
          className={styles.logoStoreChild}
          alt=""
          src="/rectangle-2@2x.png"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-3.svg" />
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
            <div className={styles.frameItem} />
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
  );
};

export default Header;
