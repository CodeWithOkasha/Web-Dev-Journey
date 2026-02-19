import React from 'react'
import styles from './Benefits.module.css'
const BenefitLayout = ({icon,title,description}) => {
  return (
    <div className={styles.innerLayout}>
      <img src={icon} alt="Orange Icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default BenefitLayout
