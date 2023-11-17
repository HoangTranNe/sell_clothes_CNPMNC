import BubbleTeeForm from "../components/bubble-tee-form";
import styles from "./index.module.css";
import { useRouter } from 'next/router';

const Frame = () => {
  const router = useRouter();
   const { productId } = router.query;
  return (
    <div className={styles.trangChiTitSnPhmParent}>
      <div className={styles.trangChiTitSnPhm}>
        <BubbleTeeForm />
      </div>
    </div>
  );
};

export default Frame;
