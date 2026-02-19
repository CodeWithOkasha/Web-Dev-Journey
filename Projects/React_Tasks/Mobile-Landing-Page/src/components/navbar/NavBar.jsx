import nav_style from "./NavBar.module.css";
import NavImage from "../../assets/images/first-left-logo.png";
const NavBar = () => {
  return (
    <div className={nav_style.nav_data}>
      <img className={nav_style.nav_img} src={NavImage} alt="Nav Picture" />

      <div className={nav_style.nav_right}>
        <p>Featueres</p>
        <button>Download</button>
      </div>
    </div>
  );
};
export default NavBar;
