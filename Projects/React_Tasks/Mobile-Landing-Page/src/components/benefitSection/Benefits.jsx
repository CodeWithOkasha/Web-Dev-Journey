import React from "react";
import styles from "./Benefits.module.css";
import base_Img from "../../assets/images/second base.png";
import light_mob from "../../assets/images/2nd light mob.png";
import dark_mob from "../../assets/images/2nd dark mob.png";
import {data_Arr} from './Benefit_Data.jsx'
import BenefitLayout from "./BenefitLayout.jsx";

const Benefits = () => {
    
  return (
    
    <div className={styles.benefit_div}>
      <img
        src={base_Img}
        alt="Blue Background"
        className={styles.benefit_bg_img}
      />
      <div className={styles.benefit_header}>
        <h2>Awesome Features</h2>
        <p>
          Landy lets you take control of your money, balance your income
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and expenses, and understand where
          your money goes
        </p>
      </div>
      <div className={styles.outer_test}>
        {data_Arr.map((obj) => (
  <BenefitLayout {...obj} />
))}
      </div>
      <img  className={styles.light_mob} src={light_mob} alt="" />
      <img  className={styles.dark_mob} src={dark_mob} alt="" />
    </div>
  );
};

export default Benefits;
