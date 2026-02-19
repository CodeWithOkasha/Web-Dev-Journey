import React from "react";
import style from "./Feature.module.css";
import loaction_img from "../../assets/images/location.png";
import FeatureLayout from "./FetureLayout.jsx";
import { featureArr } from "./LayoutData.jsx";
const Feature = () => {
  return (
    <div className={style.feature_div}>
      <div className={style.test1}>
      <img src={loaction_img} alt="" />
      <p>
        Find the best routes with live weather and nearby places.Save, share,
        and explore.
      </p>
      </div>
      {/* <FeatureLayout {...featureArr[0]} /> */}
<div className={style.test2}>
    {featureArr.map((obj) => (
  <FeatureLayout {...obj} />
      
      
))}
</div>
    </div>

  );
};

export default Feature;
