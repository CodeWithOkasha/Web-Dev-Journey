import hero_style from "./Hero.module.css";
import blue_back_img from "../../assets/images/first-blue-background.png";
import app_store_logo from "../../assets/images/app store.png";
import play_store_logo from "../../assets/images/play store.png";
import dark_mobile from "../../assets/images/dark-mobile.png";
import light_mobile from "../../assets/images/light-mobile.png";
import small_wave from "../../assets/images/first-small-wave.svg";
export function Hero() {
  return (
    <div className={hero_style.hero_div}>
      <img
        src={blue_back_img}
        alt="Background Image"
        className={hero_style.blue_background}
      />
      <div className={hero_style.hero_left_div}>
        <div className={hero_style.hero_upper_txt}>
          <h1>
            <span style={{ color: "rgb(101, 68, 232)" }}>Hexia</span>Cloud
          </h1>
          <p>Solutions</p>
        </div>
        <div className={hero_style.hero_lower_txt}>
          <p style={{ marginBottom: "10px" }}>
            Effortless turn-by-turn navigation with live weather saved &shared
            locations, nearby places.
          </p>
          <p>
            <strong>Live weather</strong> insights including temperature, rain
            alerts, wind, and forecasts for every location.
          </p>
        </div>
        <div className={hero_style.hero_apps_logos}>
          <img src={app_store_logo} alt="App Store Image" />
          <img src={play_store_logo} alt="Play Store Image" />
        </div>
        <img
          src={dark_mobile}
          alt="DarkMode Mobile"
          className={hero_style.dark_mobile}
        />
        <img
          src={light_mobile}
          alt="LightMode Mobile"
          className={hero_style.light_mobile}
        />
      </div>
      <img src={small_wave} alt="SmallWave" className={hero_style.small_wave} />
    </div>
  );
}
