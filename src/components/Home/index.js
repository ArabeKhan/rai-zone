import React from "react";
import "./Home.style.css";
import bg from "../../images/bg.jpg";
import Product from "../Product";
import shoe1 from "../../images/shoes/shoe-1.png";
import shoe2 from "../../images/shoes/shoe-2.png";
import bag1 from "../../images/bags/bag-1.png";
import bag2 from "../../images/bags/bag-2.png";
import bag3 from "../../images/bags/bag-3.png";
import tv from "../../images/banner-images/xbox.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" src={bg} alt="_bg" />

        <div className="home_row">
          <Product
            id="43276543"
            image={bag1}
            title="Addidas Bag , Try it more"
            rating="4.5"
            price="345"
          />
          <Product
            id="12223221"
            image={bag2}
            title="New Version Addidas Bag , You like it more"
            rating="4.7"
            price="445"
          />
        </div>

        <div className="home_row">
          <Product
            id="16712322"
            image={shoe1}
            title="Addidas Shoe , You like it more"
            rating="4.5"
            price="345"
          />
          <Product
            id="14456209"
            image={shoe2}
            title="New Fashion Shoe , You like it more"
            rating="4.2"
            price="545"
          />

          <Product
            id="14783266"
            image={shoe2}
            title="Apex Shoe , You like it more"
            rating="3.2"
            price="245"
          />
        </div>

        <div className="home_row">
          <Product
            id="54109628"
            image={tv}
            title="Sony Gameimg Console , You like it more"
            rating="4.5"
            price="845"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
