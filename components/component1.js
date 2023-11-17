import { useMemo } from "react";
import styles from "./component1.module.css";

const Component1 = ({
  component1Position,
  component1Top,
  component1Left,
  sLeft,
  sFontSize,
  sTextAlign,
  mLeft,
  mFontSize,
  mTextAlign,
  lLeft,
  lFontSize,
  lTextAlign,
  xLFontSize,
}) => {
  const component1Style = useMemo(() => {
    return {
      position: component1Position,
      top: component1Top,
      left: component1Left,
    };
  }, [component1Position, component1Top, component1Left]);

  const sStyle = useMemo(() => {
    return {
      left: sLeft,
      fontSize: sFontSize,
      textAlign: sTextAlign,
    };
  }, [sLeft, sFontSize, sTextAlign]);

  const mStyle = useMemo(() => {
    return {
      left: mLeft,
      fontSize: mFontSize,
      textAlign: mTextAlign,
    };
  }, [mLeft, mFontSize, mTextAlign]);

  const lStyle = useMemo(() => {
    return {
      left: lLeft,
      fontSize: lFontSize,
      textAlign: lTextAlign,
    };
  }, [lLeft, lFontSize, lTextAlign]);

  const xLStyle = useMemo(() => {
    return {
      fontSize: xLFontSize,
    };
  }, [xLFontSize]);

  return (
    <div className={styles.component1} style={component1Style}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.s} style={sStyle}>
          S
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.s} style={mStyle}>
          M
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.s} style={lStyle}>
          L
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.xl} style={xLStyle}>
          XL
        </div>
      </div>
    </div>
  );
};

export default Component1;
