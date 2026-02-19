import styles from "./HowItWorks.module.css";
export const HowItWorks = () => {
  return (
    <div className={styles.outer_container}>
      <h1>How it Work</h1>
      <h2>Here’s a simple explanation of how GPS works</h2>
      <p className={styles.para_test}>
        GPS (Global Positioning System) works by connecting your device to
        multiple satellites orbiting Earth. These satellites send signals that
        your phone receives and calculates your exact location. With this
        location data.
      </p>
      <h2> simple explanation of how Live weather app works</h2>
      <p>
        A weather app works by collecting real-time data from multiple sources
        such as weather stations, satellites, radar systems, and trusted
        meteorological services. When a user opens the app, it detects the
        current location (or a selected city) using GPS or manual search.
      </p>
    </div>
  );
};

// export default HowItWorks
