import styles from "./Download.module.css";
import rectangle_bg from "../../assets/images/rectangle background.png";
import gps_logo from "../../assets/images/gps.png";
import weather_logo from "../../assets/images/weather.png";
import app_store_logo from "../../assets/images/app store.png";
import play_store_logo from "../../assets/images/play store.png";

const Download = () => {
  return (
    <div className={styles.download_div}>
      <img src={rectangle_bg} alt="Blue Rectangle" />
      <div className={styles.location_weather_wrapper}>
        <img src={gps_logo} alt="Blue Rectangle" />
        <img src={weather_logo} alt="Blue Rectangle" />
      </div>
      <h1 className={styles.download_txt}>Download Now</h1>
      <div className={styles.apps_logos}>
        <img src={app_store_logo} alt="App Store Image" />
        <img src={play_store_logo} alt="Play Store Image" />
      </div>
    </div>
  );
};

export default Download;
