import React from "react";
import flipkartLogo from "/images/flipkart.png"
import amazonLogo from "/images/amazon.png"
import shoeImage from "/images/shoe_image.png"
export function Hero() {
  return (
    <main className="hero">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero_btn">
<button>Shop Now</button>
<button className="hero_second_btn">Category</button>
        </div>
        <div className="shopping">
<p>Also Available On</p>
<div className="brand_logos">
<img src={flipkartLogo} alt="flipkart" />
<img src={amazonLogo} alt="amazon" />
</div>

        </div>
      </div>
      <div className="hero_image">
<img src={shoeImage} alt="Shoes-Image" />
      </div>
    </main>
  );
}
