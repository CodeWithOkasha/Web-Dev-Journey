import styles from "./AppPreview.module.css";
import ovel_bg from "../../assets/images/Ovel background.png";
import first_mob from "../../assets/images/1st map mob.png";
import second_mob from "../../assets/images/2nd map mob.png";
import third_mob from "../../assets/images/3rd map mob.png";
export const AppPreview = () => {
  return (
    <div className={styles.app_prev_div}>
      <img src={ovel_bg} alt="Ovel Background" className={styles.ovel_bg} />
      <img src={first_mob} alt="First Map Mobile" className={styles.first_mobb} />
      <img src={second_mob} alt="Second Map Mobile" className={styles.second_mobb} />
      <img src={third_mob} alt="Third Map Mobile" className={styles.third_mobb} />
    </div>
  );
};
