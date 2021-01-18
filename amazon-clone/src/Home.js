import React from "react";
import Product from "./Product";
import "./Home.css";
import ImageCarousel from "./ImageCarousel";
// import ImageCarousel from "./ImageCarousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__imageCarousel">
          <ImageCarousel />
        </div>

        <div className="home__productRow">
          <Product
            id={0}
            title="Originals: How Non-Conformists Move the World"
            price={14.89}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/511qyzBH42L._SX322_BO1,204,203,200_.jpg"
          />
          <Product
            id={1}
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray"
            price={2549.99}
            rating={4.5}
            image="https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_Retina-Display_111319_big.jpg.large.jpg"
          />
        </div>
        <div className="home__productRow">
          <Product
            id={3}
            title="iPhone 12 Pro (256 GB)"
            price={1099.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgPVSwmaLfkd7rQz2AQIt7521ro_FIOjtDQ&usqp=CAU"
          />
          <Product
            id={4}
            title="Keurig K-Classic Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 10 Oz. Brew Sizes, Black"
            price={79.0}
            rating={4.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Ikuq6AAfL._AC_SL1500_.jpg"
          />
          <Product
            id={5}
            title="Becoming by Michelle Obama"
            price={11.89}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg"
          />
        </div>
        <div className="home__productRow">
          <Product
            id={6}
            title="Samsung 65-inch Class QLED Q800T Series - Real 8K Resolution Direct Full Array 24X Quantum HDR 16X Smart TV with Alexa Built-in (QN65Q800TAFXZA, 2020 Model)"
            price={2697.99}
            rating={4.5}
            image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/qled-8k-tv/pdp/q800t-series/gallery/01_Q800T-QTB1_Front2_Titan-Black-1600x1200.jpg?$product-details-jpg$"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
