import React from 'react'
import styles from './Footer.module.css';
import footer_bg from '../../assets/images/footer_bg.png'
import footer_logo from "../../assets/images/first-left-logo.png";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <img src={footer_bg} alt="Black Footer" />
      <div className={styles.upper_txt_container}>
        <p className={styles.left_txt}>Let’s try out</p>
        <p className={styles.right_txt}>Company</p>
      </div>
      <div className={styles.lower_txt_container}>
        <p>Featueres</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
      </div>
      <div className={styles.logo_div}>
      <img className={styles.footer_img} src={footer_logo} alt="Footer Picture" />
      </div>
    </div>
  )
}

export default Footer
