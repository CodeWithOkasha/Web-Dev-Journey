import styles from"./Feature.module.css"
const FetureLayout = ({logo,title,description,feature_footer}) => {
  return (
    <div className={styles.feture_inner_div}>
    <img src={logo} alt="Logo" className={styles.feature_logo} />
    <p className={styles.feature_title}>{title}</p>
    <p className={styles.description}>{description}</p>
    <img src={feature_footer} alt="Feature_Footer" />
    </div>
  )
}

export default FetureLayout
